# Modern Dashboard with Tailwind CSS & shadcn/ui

A responsive, modern dashboard built with React, TypeScript, Tailwind CSS, and shadcn/ui following industry standards.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with collapsible sidebar
- **Modern UI**: Clean, professional interface with purple accent colors
- **Component Library**: Built with shadcn/ui components
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Responsive Sidebar**: Collapses to icons on mobile, full width on desktop

## 🎨 Design System

### Color Palette

- **Primary**: Purple (#6828EE) - Main brand color
- **Secondary**: Blue (#335CFF) - Accent color for tags
- **Neutral**: Gray scale for text and backgrounds
- **Semantic**: Success, warning, and error states

### Components

- **Sidebar**: Navigation with collapsible sections
- **Header**: Top bar with search, notifications, and user profile
- **Table**: Data table with sorting, filtering, and actions
- **Cards**: Information containers with consistent styling

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── checkbox.tsx
│   │   ├── badge.tsx
│   │   └── index.ts
│   ├── layout/          # Layout components
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── DashboardLayout.tsx
│   └── dashboard/       # Dashboard-specific components
│       └── LeadsTable.tsx
├── lib/
│   └── utils.ts         # Utility functions
├── index.css            # Global styles and CSS variables
└── App.tsx              # Main application component
```

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type safety and better DX
- **Tailwind CSS v3** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Vite** - Fast build tool and dev server
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Beautiful icons

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📱 Responsive Behavior

### Mobile (< 1024px)

- Sidebar collapses to show only icons
- Header shows hamburger menu
- Content takes full width
- Touch-friendly interactions

### Desktop (≥ 1024px)

- Sidebar shows full navigation
- Header shows full branding
- Content area adjusts to sidebar width
- Hover states and advanced interactions

## 🎯 Key Components

### Sidebar

- **Collapsible**: Toggles between icon-only and full view
- **Navigation**: Organized sections with icons and labels
- **User Profile**: Bottom section with user info
- **Onboarding Card**: Promotional content for team setup

### Header

- **Search**: Global search functionality
- **Notifications**: Bell icon with notification indicator
- **User Profile**: Welcome message and user avatar
- **Menu Toggle**: Mobile hamburger menu

### Leads Table

- **Tabs**: Leads, Quality Score, Leaderboard
- **Actions**: Filter and Export buttons
- **Data**: Lead information with tags and connections
- **Responsive**: Adapts to different screen sizes

## 🔧 Customization

### Colors

Update CSS variables in `src/index.css` to change the color scheme:

```css
:root {
  --primary: 262 83% 58%; /* Purple */
  --secondary: 221 83% 53%; /* Blue */
  --background: 0 0% 100%; /* White */
}
```

### Components

All components are built with Tailwind CSS classes and can be easily customized by modifying the className props.

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Follow the established component patterns
2. Use TypeScript for all new components
3. Maintain responsive design principles
4. Follow the existing naming conventions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
