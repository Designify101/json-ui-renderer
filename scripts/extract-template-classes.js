#!/usr/bin/env node

/**
 * Extract CSS Classes from JSON Templates
 * 
 * This script automatically scans all template files and extracts
 * CSS classes used in JSON configurations, generating a file that
 * Tailwind can scan during its content discovery process.
 * 
 * This ensures all dynamic CSS classes are included in both dev and production builds.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const TEMPLATES_DIR = path.join(__dirname, '../lib');
const OUTPUT_FILE = path.join(__dirname, '../generated/template-classes.js');
const GENERATED_DIR = path.join(__dirname, '../generated');

// Pattern to match CSS classes in className properties
const CSS_CLASS_PATTERNS = [
  // TypeScript object notation: className: "..."
  /className:\s*"([^"]+)"/g,
  // JSON format: "className": "..."
  /"className"\s*:\s*"([^"]+)"/g,
  // Alternative formats
  /"class"\s*:\s*"([^"]+)"/g,
  /className:\s*`([^`]+)`/g,
  /className:\s*'([^']+)'/g
];

// Set to store unique CSS classes
const extractedClasses = new Set();

/**
 * Extract CSS classes from file content
 */
function extractClassesFromContent(content) {
  CSS_CLASS_PATTERNS.forEach(pattern => {
    let match;
    // Need to reset regex lastIndex for global patterns
    pattern.lastIndex = 0;
    
    while ((match = pattern.exec(content)) !== null) {
      const classNames = match[1];
      
      // Split by spaces and filter out empty strings
      classNames.split(/\s+/).forEach(className => {
        const trimmed = className.trim();
        if (trimmed && !trimmed.includes('{{') && !trimmed.includes('$')) {
          // Only add valid CSS classes, exclude template variables
          extractedClasses.add(trimmed);
        }
      });
    }
  });
}

/**
 * Extract CSS classes from a single file
 */
function extractClassesFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`  Scanning: ${path.relative(process.cwd(), filePath)}`);
    extractClassesFromContent(content);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
  }
}

/**
 * Recursively scan directory for template files
 */
function scanDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        scanDirectory(itemPath);
      } else if (item.endsWith('.ts') || item.endsWith('.js')) {
        extractClassesFromFile(itemPath);
      }
    });
  } catch (error) {
    console.error(`Error scanning directory ${dirPath}:`, error.message);
  }
}

/**
 * Generate the output file that Tailwind can scan
 */
function generateOutputFile(classes) {
  const sortedClasses = Array.from(classes).sort();
  
  // Create generated directory if it doesn't exist
  if (!fs.existsSync(GENERATED_DIR)) {
    fs.mkdirSync(GENERATED_DIR, { recursive: true });
  }

  // Generate JavaScript file with all CSS classes
  const content = `/**
 * Generated file containing all CSS classes used in JSON templates
 * This file is automatically generated by scripts/extract-template-classes.js
 * DO NOT EDIT MANUALLY - your changes will be overwritten
 * 
 * Generated at: ${new Date().toISOString()}
 * Total classes: ${sortedClasses.length}
 */

// These CSS classes are used in JSON templates and need to be included in Tailwind builds
export const templateClasses = [
${sortedClasses.map(className => `  "${className}",`).join('\n')}
];

// Export classes as a string for Tailwind content scanning
export const templateClassesString = \`
${sortedClasses.join(' ')}
\`;

// Default export for convenience
export default templateClasses;
`;

  fs.writeFileSync(OUTPUT_FILE, content, 'utf8');
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Extracting CSS classes from JSON templates...');
  
  if (!fs.existsSync(TEMPLATES_DIR)) {
    console.error(`❌ Templates directory not found: ${TEMPLATES_DIR}`);
    process.exit(1);
  }

  // Clear previous results
  extractedClasses.clear();

  // Scan all template files
  scanDirectory(TEMPLATES_DIR);

  console.log(`✅ Found ${extractedClasses.size} unique CSS classes`);

  // Generate output file
  generateOutputFile(extractedClasses);
  
  console.log(`💾 Generated: ${path.relative(process.cwd(), OUTPUT_FILE)}`);
  console.log('🎉 Tailwind will now include all template CSS classes in builds!');
}

// Export for programmatic use
module.exports = { main, extractClassesFromContent, extractedClasses };

// Run if called directly
if (require.main === module) {
  main();
} 