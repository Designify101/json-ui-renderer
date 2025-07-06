# Installation & Setup Guide 🚀

This guide provides step-by-step instructions for setting up the JSON UI/Graphics Generator development environment.

## Prerequisites 📋

### Required Software
- **Node.js 18.0.0 or higher** ([Download](https://nodejs.org/))
- **npm 9.0.0 or higher** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

### Optional but Recommended
- **VS Code** ([Download](https://code.visualstudio.com/))
- **pnpm** or **yarn** as alternative package managers

### System Requirements
- **RAM**: 8GB minimum, 16GB recommended
- **Storage**: 2GB free space
- **OS**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)

## Installation Steps 🔧

### 1. Clone the Repository
```bash
# Clone the repository
git clone <repository-url>
cd json-graphic-generator

# Verify the clone
ls -la
```

### 2. Install Dependencies
```bash
# Install all dependencies
npm install

# Alternative with pnpm (faster)
pnpm install

# Alternative with yarn
yarn install
```

### 3. Environment Setup
```bash
# Create environment file (if needed)
cp .env.example .env.local

# Edit environment variables
# Note: Most functionality works without custom environment variables
```

### 4. Initial Build
```bash
# Extract CSS classes (important for Tailwind)
npm run extract-css

# Verify the build works
npm run build
```

### 5. Start Development Server
```bash
# Start development server
npm run dev

# Server will start at http://localhost:3000
```

### 6. Verify Installation
Open your browser and navigate to:
- **Main App**: http://localhost:3000
- **Playground**: http://localhost:3000/playground
- **Charts**: http://localhost:3000/bar-charts

## Development Environment Configuration 🛠️

### VS Code Setup
Install the following extensions for the best development experience:

#### Essential Extensions
```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-json"
  ]
}
```

#### VS Code Settings
Create `.vscode/settings.json`:
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    "className:\\s*[\"']([^\"']*)[\"']",
    "className:\\s*`([^`]*)`"
  ],
  "files.associations": {
    "*.json": "jsonc"
  }
}
```

#### Workspace Configuration
Create `.vscode/launch.json` for debugging:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    }
  ]
}
```

### TypeScript Configuration
The project uses TypeScript with strict settings. Key configuration in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### Tailwind CSS Configuration
The project uses a custom Tailwind configuration with:
- **CSS Variables**: For theme support
- **Custom Components**: shadcn/ui integration
- **Dynamic Classes**: CSS extraction for JSON templates

Important: Always run `npm run extract-css` before building to ensure all CSS classes are included.

## Package Scripts Explanation 📦

### Development Scripts
```bash
# Start development server with hot reload
npm run dev

# Extract CSS classes from JSON templates
npm run extract-css

# Run TypeScript type checking
npm run type-check

# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix
```

### Build Scripts
```bash
# Build for production
npm run build

# Start production server
npm run start

# Build and analyze bundle
npm run analyze
```

### Testing Scripts (when implemented)
```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## Environment Variables 🔐

### Optional Environment Variables
Create `.env.local` file:
```env
# App Configuration
NEXT_PUBLIC_APP_NAME="JSON UI Generator"
NEXT_PUBLIC_APP_VERSION="1.0.0"

# Development
NODE_ENV=development
NEXT_PUBLIC_DEBUG=true

# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# API Configuration (if needed)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Environment Variables in Production
```env
NODE_ENV=production
NEXT_PUBLIC_DEBUG=false
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Project Structure Overview 📁

```
json-graphic-generator/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── */                 # Route pages
├── components/            # React components
│   ├── charts/           # Chart components
│   ├── render-engine/    # Core rendering system
│   ├── ui/               # UI components (shadcn/ui)
│   └── */                # Other component categories
├── lib/                   # Utility functions and templates
│   ├── *-templates.ts    # JSON templates
│   └── utils.ts          # Utility functions
├── types/                 # TypeScript type definitions
├── docs/                  # Documentation
├── public/                # Static assets
├── scripts/               # Build scripts
├── generated/             # Generated files (CSS classes)
└── hooks/                 # React hooks
```

## Troubleshooting Common Issues 🔧

### Issue: "Module not found" errors
**Solution**: 
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: CSS classes not working
**Solution**:
```bash
# Run CSS extraction
npm run extract-css

# Check if generated files exist
ls -la generated/
```

### Issue: TypeScript errors
**Solution**:
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Restart TypeScript server in VS Code
Ctrl/Cmd + Shift + P > "TypeScript: Restart TS Server"
```

### Issue: Build fails
**Solution**:
```bash
# Clean build cache
rm -rf .next

# Rebuild
npm run build
```

### Issue: Hot reload not working
**Solution**:
```bash
# Check if port 3000 is available
lsof -i :3000

# Kill existing process if needed
kill -9 <PID>

# Restart development server
npm run dev
```

### Issue: Performance issues during development
**Solution**:
```bash
# Use pnpm for faster installs
npm install -g pnpm
pnpm install

# Disable unnecessary VS Code extensions
# Close unused browser tabs
# Check system resources
```

## Advanced Configuration 🔧

### Custom Port Configuration
```bash
# Run on different port
PORT=3001 npm run dev

# Or set in package.json
"scripts": {
  "dev": "next dev -p 3001"
}
```

### Proxy Configuration (for API calls)
Add to `next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*',
      },
    ]
  },
}
```

### Custom Webpack Configuration
```javascript
// next.config.mjs
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Custom webpack configuration
    return config
  },
}
```

## Development Tips 💡

### Best Practices
1. **Always run `npm run extract-css`** before building
2. **Use TypeScript strictly** - don't use `any` types
3. **Follow component creation rules** in the documentation
4. **Test with both light and dark themes**
5. **Check mobile responsiveness** regularly

### Debugging Tips
1. **Use React DevTools** browser extension
2. **Check console logs** for render engine debug info
3. **Use VS Code debugger** for complex issues
4. **Test with different JSON configurations**
5. **Monitor performance** with browser dev tools

### Code Quality
```bash
# Format code
npm run format

# Check for security issues
npm audit

# Update dependencies
npm update
```

## Next Steps 🎯

After successful installation:

1. **Explore the Playground** at `/playground`
2. **Read the Architecture Guide** (`docs/architecture.md`)
3. **Check Component Creation Rules** (`docs/component-creation-rules.md`)
4. **Try creating a custom component**
5. **Read the JSON Schema Reference** (`docs/json-schema-reference.md`)

## Getting Help 🆘

### Documentation
- **Architecture**: `docs/architecture.md`
- **Component Creation**: `docs/component-creation-rules.md`
- **JSON Schema**: `docs/json-schema-reference.md`
- **API Reference**: `docs/api-reference.md`

### Support Channels
- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For questions and community support
- **Documentation**: For detailed guides and references

### Common Resources
- **Next.js Documentation**: https://nextjs.org/docs
- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

## Congratulations! 🎉

You've successfully set up the JSON UI/Graphics Generator development environment. You're now ready to start building amazing JSON-driven UI components! 