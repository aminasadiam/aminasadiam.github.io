# Minimal Black & White Portfolio

A clean, minimalist portfolio website built with SolidJS, Vite, and Tailwind CSS featuring a pure black and white design with understated elegance.

## ✨ Design Philosophy

- **Minimal**: Every element has a purpose
- **Clean**: Simple lines, clear typography
- **Timeless**: No trends, focused on substance
- **Readable**: Perfect contrast and spacing
- **Elegant**: Less is more

## 📐 Design System

### Colors
- **Primary**: Black (#000000)
- **Background**: White (#ffffff)
- **Secondary**: Gray (#666666 - #cccccc)
- **Accents**: Simple borders only

### Typography
- **Font**: Inter (clean, minimal sans-serif)
- **Hierarchy**: Size and weight only
- **Line Height**: Generous for readability

### Components
- **Borders**: Simple 1px black lines
- **Cards**: Bordered boxes with hover states
- **Buttons**: Text-based or bordered
- **Links**: Underline animation on hover

## 🎯 Sections

### Navigation
- Fixed border bottom
- Simple left-right layout
- Three main links
- No dropdown or complex interactions

### Hero Section
- Large bold headline (7xl)
- Brief description
- Social links with underline hover
- Clear, direct messaging

### About
- Four key points
- 2x2 grid layout
- Simple dividers
- Focus on substance

### Skills
- Tag-based display
- Bordered pills
- Hover: black background with white text
- Clean grid layout

### Work/Portfolio
- Project cards with borders
- Year displayed on right
- Hover effect: inverted colors
- Arrow indicator for interaction

### Stats
- Simple numbers with labels
- Bottom borders only
- Minimal presentation
- Focus on metrics

### Contact
- Email input with border
- Simple send button
- Clear call-to-action
- Minimal copy

### Footer
- Single line of text
- Center aligned
- No extra elements

## 🎨 Visual Elements

### Spacing
- Generous padding and margins
- Breathing room between sections
- Clear visual hierarchy

### Borders
- 1px solid black
- Full width dividers between sections
- Card borders for grouped content

### Hover States
- Color inversion (black → white)
- Smooth transitions
- Understated feedback

### Typography Weight
- Regular: 400
- Medium: 500
- Bold: 700
- Extra Bold: 800 (headlines)

## 📱 Responsive

- Full width sections
- 2-column grids scale appropriately
- Touch-friendly button sizes
- Readable on all devices

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build
```

## 📦 Technology Stack
- **Framework**: SolidJS
- **Build**: Vite
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript

## 🎨 Customization

### Update Content
- [Home.tsx](src/Pages/Home.tsx) - All portfolio content
- [App.tsx](src/App.tsx) - Navigation and layout

### Update Colors
- [tailwind.config.ts](tailwind.config.ts) - Color palette
- [index.css](src/index.css) - Custom styles

### Update Typography
- [index.html](index.html) - Font loading
- [tailwind.config.ts](tailwind.config.ts) - Font family

## 📄 License
MIT

---

Designed with intention. Built with care.
