# Personal Blog Site

A Gatsby-based personal blog built with React and MDX.

Live site: [fasilmarshooq.github.io](https://fasilmarshooq.github.io/)

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

### Installation

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start development server**
   ```bash
   pnpm develop
   ```
   
   Your site will be running at `http://localhost:8000`

### Available Commands

- **`pnpm develop`** - Start development server with hot reload
- **`pnpm start`** - Alias for develop command
- **`pnpm build`** - Build production version
- **`pnpm serve`** - Serve production build locally
- **`pnpm clean`** - Clear Gatsby cache
- **`pnpm format`** - Format code with Prettier
- **`pnpm deploy`** - Build and deploy to GitHub Pages

## 🚀 Deployment

### GitHub Pages Deployment

The project is configured to deploy to GitHub Pages using the `gh-pages` package:

```bash
pnpm deploy
```

This command will:
1. Build the production version of your site
2. Deploy it to the `release` branch on GitHub Pages

### Manual Deployment

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Deploy the `public` folder** to your hosting service of choice

## 📁 Project Structure

- `src/` - Source code and components
- `posts/` - Blog posts in MDX format
- `static/` - Static assets and icons
- `gatsby-config.js` - Gatsby configuration
- `gatsby-node.js` - Gatsby build customization

## 🛠️ Built With

- [Gatsby](https://www.gatsbyjs.com/) - React-based static site generator
- [MDX](https://mdxjs.com/) - Markdown with JSX support
- [Styled Components](https://styled-components.com/) - CSS-in-JS styling
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
