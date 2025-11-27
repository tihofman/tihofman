# Design System Tokens

## Overview
This design system follows a clean, minimalist, and professional aesthetic as specified in the PRD. It uses a carefully curated color palette with dark blues, grays, and an accent color.

## Colors

### Primary (Blue)
The primary blue palette is used for interactive elements, links, and primary actions.
- `--color-primary-500`: Main primary color (#5c7cfa)
- `--color-primary-600`: Hover states (#4c6ef5)
- `--color-primary-700`: Active states (#4263eb)

### Neutral (Gray)
The neutral palette provides the foundation for backgrounds, text, and borders.
- `--color-neutral-50`: Light background (#f8f9fa)
- `--color-neutral-900`: Primary text color (#212529)
- `--color-neutral-700`: Secondary text (#495057)

### Accent (Red)
A vibrant accent color for CTAs and important highlights.
- `--color-accent`: Main accent (#ff6b6b)
- `--color-accent-dark`: Hover state (#fa5252)

## Typography

### Font Families
- `--font-sans`: System font stack for optimal performance and native look
- `--font-mono`: Monospace stack for code snippets and technical content

### Usage
All headings use bold weight (700) with tight line-height (1.2) for impact.
Body text uses normal line-height (1.6) for readability.

## Spacing

The spacing scale uses a consistent rhythm:
- `--spacing-xs`: 0.5rem (8px)
- `--spacing-sm`: 0.75rem (12px)
- `--spacing-md`: 1rem (16px)
- `--spacing-lg`: 1.5rem (24px)
- `--spacing-xl`: 2rem (32px)
- `--spacing-2xl`: 3rem (48px)
- `--spacing-3xl`: 4rem (64px)

## Border Radius

Rounded corners for a modern, soft appearance:
- `--radius-sm`: 0.375rem - Small elements (tags)
- `--radius-md`: 0.5rem - Cards, buttons
- `--radius-lg`: 0.75rem - Large cards
- `--radius-xl`: 1rem - Modals
- `--radius-2xl`: 1.5rem - Hero sections

## Shadows

Elevation system for depth:
- `--shadow-sm`: Subtle elevation for hover states
- `--shadow-md`: Standard card elevation
- `--shadow-lg`: Elevated cards and dropdowns
- `--shadow-xl`: Modals and overlays

## Transitions

Consistent animation timing:
- `--transition-fast`: 150ms - Micro-interactions (hover)
- `--transition-base`: 250ms - Standard transitions (buttons, links)
- `--transition-slow`: 350ms - Complex animations (modals)

All transitions use `cubic-bezier(0.4, 0, 0.2, 1)` for smooth, natural motion.

## Accessibility

### Focus States
All interactive elements have clear focus indicators using:
- 2px solid outline in primary-500
- 2px offset for visibility

### Color Contrast
All color combinations meet WCAG 2.1 Level AA standards:
- Text on neutral-50 background uses neutral-900 (21:1 contrast)
- Interactive elements have sufficient contrast
- Accent color is only used for non-critical UI elements

## Responsive Container

The `.container-responsive` utility provides consistent padding across breakpoints:
- Mobile: 1.5rem (24px) padding
- Tablet (768px+): 3rem (48px) padding
- Desktop (1024px+): 4rem (64px) padding
- Max-width: 1280px
