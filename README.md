# JSON UI/Graphics Generator 🎨

A powerful Next.js application that transforms JSON configurations into beautiful React UI components with advanced charting capabilities, theme support, and real-time rendering.

## ✨ Features

### 🎯 Core Capabilities
- **JSON-to-React Conversion**: Transform JSON configurations into fully functional React components
- **60+ Chart Templates**: Comprehensive collection of area, bar, line, pie, radar, and radial charts
- **Real-time Playground**: Interactive environment for testing and editing JSON templates
- **Theme System**: Complete dark/light mode support with theme-aware components
- **Data Interpolation**: Dynamic content using `{{}}` syntax for flexible data binding
- **SVG Support**: Native SVG rendering with animations and custom graphics

### 📊 Chart Collections
- **Area Charts** (10+ templates): Natural curves, gradients, stacked areas
- **Bar Charts** (8+ templates): Vertical, horizontal, multiple datasets, negative values
- **Line Charts** (8+ templates): Trend analysis, time series, performance tracking
- **Pie Charts** (7+ templates): Simple pies, donuts, custom legends
- **Radar Charts** (7+ templates): Performance metrics, skill assessments
- **Radial Charts** (10+ templates): Progress indicators, circular visualizations

### 🛠️ Technical Stack
- **Next.js 15** with React 19
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Recharts** for data visualization
- **Framer Motion** for animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd json-graphic-generator

# Install dependencies
npm install

# Start development server
npm run dev
```

### Usage
```bash
# Extract CSS classes (runs automatically)
npm run extract-css

# Build for production
npm run build

# Start production server
npm start
```

## 📚 Documentation

### For New Users
- [Installation & Setup Guide](./docs/installation-setup.md)
- [JSON Schema Reference](./docs/json-schema-reference.md)
- [Playground Usage Guide](./docs/playground-usage-guide.md)

### For Developers
- [Architecture Overview](./docs/architecture.md)
- [Component Creation Rules](./docs/component-creation-rules.md)
- [Render Engine Guide](./docs/render-engine-guide.md)
- [Component Registry Guide](./docs/component-registry-guide.md)

### For Contributors
- [Contributing Guide](./docs/contributing-guide.md)
- [Testing Guide](./docs/testing-guide.md)
- [Performance Guide](./docs/performance-guide.md)

### Advanced Topics
- [Theme System Guide](./docs/theme-system-guide.md)
- [Data Binding Guide](./docs/data-binding-guide.md)
- [CSS Extraction Guide](./docs/css-extraction-guide.md)
- [Security Guide](./docs/security-guide.md)

## 🏗️ Architecture

The application follows a modular architecture with clear separation of concerns:

- **Render Engine**: Core system converting JSON to React components
- **Component Registry**: Maps component names to React components
- **Type System**: TypeScript interfaces for JSON structure validation
- **Template System**: Pre-built JSON templates for different chart types
- **CSS Extraction**: Build-time CSS class extraction for Tailwind

## 📊 Chart Collections

### Available Templates
- **Area Charts**: Interactive gradients, stacked areas, natural curves
- **Bar Charts**: Analytics dashboards, horizontal bars, negative values
- **Line Charts**: Time series, health metrics, financial trends
- **Pie Charts**: Sales breakdown, donut charts, custom legends
- **Radar Charts**: Skill assessments, performance metrics, multi-series
- **Radial Charts**: Progress indicators, circular analytics, custom shapes

### Data Integration
All charts support dynamic data binding using the `{{}}` syntax:
```json
{
  "data": {
    "chartData": [
      {"month": "Jan", "sales": 1200}
    ]
  },
  "root": {
    "type": "ChartBarDefault",
    "props": {
      "data": "$data.chartData"
    }
  }
}
```

## 🎨 Theme System

Complete theme support with automatic adaptation:
- Light/dark mode toggle
- Theme-aware color schemes
- CSS custom properties
- Component-level theming

## 🔧 Development

### Project Structure
```
json-graphic-generator/
├── app/                    # Next.js app router
├── components/            # React components
│   ├── charts/           # Chart components
│   ├── render-engine/    # Core rendering system
│   └── ui/               # UI components
├── lib/                   # Templates and utilities
├── types/                 # TypeScript definitions
├── docs/                  # Documentation
└── scripts/               # Build scripts
```

### Key Commands
```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run extract-css # Extract CSS classes
npm run lint        # Run ESLint
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./docs/contributing-guide.md) for details on:
- Code style and standards
- Testing requirements
- Pull request process
- Issue reporting

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Recharts](https://recharts.org/) for data visualization
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Next.js](https://nextjs.org/) for the framework
- [Framer Motion](https://www.framer.com/motion/) for animations

## 📞 Support

- Documentation: [docs/](docs/)
- Issues: [GitHub Issues](https://github.com/your-repo/issues)
- Discussions: [GitHub Discussions](https://github.com/your-repo/discussions)

---

**JSON Render Engine** - Transform JSON into beautiful React components with ease! 🎨✨ 