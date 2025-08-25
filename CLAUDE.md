# Parcel Express Frontend

This is a Next.js 15 project with multilingual support using next-intl and
styled-components for styling.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **next-intl** for internationalization (English, Georgian, Russian)
- **styled-components** for CSS-in-JS styling
- **Inter Font** via Google Fonts with weights 400, 500, 600, 700
- **Design System Components** (Button, Typography) based on Figma designs
- **ESLint** for code linting

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Locale-specific pages
│   │   ├── layout.tsx      # Locale layout with providers
│   │   └── page.tsx        # Home page
│   ├── components/
│   │   └── StyledComponentsRegistry.tsx  # SSR support for styled-components
│   └── globals.css
├── components/
│   ├── Button.tsx          # Design system Button component
│   ├── Typography.tsx      # Design system Typography component
│   └── index.ts            # Component exports
├── i18n/
│   ├── request.ts          # next-intl configuration
│   └── routing.ts          # Locale routing setup
└── middleware.ts           # Locale middleware

messages/                   # Translation files
├── en.json                 # English translations
├── ka.json                 # Georgian translations
└── ru.json                 # Russian translations
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Supported Languages

- English (en) - Default
- Georgian (ka)
- Russian (ru)

## Development

1. Run the development server: `npm run dev`
2. Open [http://localhost:3000](http://localhost:3000)
3. The app automatically detects browser language or you can access specific
   locales:
   - `/en` for English
   - `/ka` for Georgian
   - `/ru` for Russian

## Internationalization

Translations are stored in the `messages/` directory. To add new translations:

1. Add the key-value pair to all language files
2. Use `useTranslations('namespace')` hook in components
3. Access translations with `t('key')`

## Styling

This project uses styled-components for styling. The `StyledComponentsRegistry`
component ensures proper SSR support.

## Design System Components

This project uses a design system based on Figma designs. **ALWAYS use these
components instead of creating custom styled components.**

### Button Component

Located at `src/components/Button.tsx`. Import from `src/components`.

**Available variants:**

- `default` - Transparent background with white border (for dark backgrounds)
- `primary` - Gradient background (main call-to-action)
- `secondary` - White background with gray border
- `tertiary` - Light gray background
- `disabled` - Disabled state (auto-applied when `disabled` prop is true)

**Available sizes:**

- `xs` - 8px padding, 14px font, 20px icons, 8px border radius
- `sm` - 10px padding, 14px font, 20px icons, 8px border radius
- `md` - 10px padding, 16px font, 20px icons, 8px border radius
- `lg` - 12px padding, 16px font, 20px icons, 8px border radius
- `xl` - 16px padding, 18px font, 24px icons, 10px border radius

**Interactive Effects:**

- **Hover**: Subtle lift animation with enhanced shadows
- **Click/Active**: Scale down effect (0.96-0.98 scale) with faster transition
- **Ripple Effect**: Expanding circle animation on click for tactile feedback
- **Enhanced Shadows**: Dynamic shadow changes based on interaction state
- **Smooth Transitions**: Cubic-bezier easing for natural movement
- **Primary Button**: Special enhanced effects with deeper shadows and larger
  hover lift

**Usage Examples:**

```tsx
import { Button } from '../components';

// Basic usage
<Button variant="primary" size="md">Click me</Button>

// With icons
<Button variant="secondary" size="lg" leftIcon={<Icon />}>
  Save Changes
</Button>

// Disabled state
<Button variant="primary" size="md" disabled>
  Loading...
</Button>

// Focus state
<Button variant="default" size="sm" focused>
  Focused Button
</Button>

// With click handler
<Button variant="primary" size="lg" onClick={() => console.log('Clicked!')}>
  Interactive Button
</Button>
```

### Typography Component

Located at `src/components/Typography.tsx`. Import from `src/components`.

**Available variants:**

- `display-2xl` - 72px/90px, -2% letter spacing
- `display-xl` - 60px/72px, -2% letter spacing
- `display-lg` - 48px/60px, -2% letter spacing
- `display-md` - 36px/44px, -2% letter spacing
- `display-sm` - 30px/38px
- `display-xs` - 24px/32px
- `text-xl` - 20px/30px
- `text-lg` - 18px/28px
- `text-md` - 16px/24px
- `text-sm` - 14px/20px
- `text-xs` - 12px/18px

**Available weights:**

- `regular` - 400
- `medium` - 500
- `semibold` - 600
- `bold` - 700

**Semantic Components** (preferred for common use cases):

- `Heading1` through `Heading6` - Pre-configured headings
- `BodyLarge`, `BodyMedium`, `BodySmall` - Body text
- `Caption` - Small text for labels

**Usage Examples:**

```tsx
import {
  Typography,
  Heading1,
  BodyMedium,
  Caption
} from '../components';

// Basic usage
<Typography variant="display-lg" weight="semibold">
  Large Display Text
</Typography>

// Semantic components (preferred)
<Heading1>Main Page Title</Heading1>
<BodyMedium>This is body text content.</BodyMedium>
<Caption>Small caption text</Caption>

// Custom colors
<Typography variant="text-lg" color="#535862">
  Secondary text color
</Typography>

// Custom HTML elements
<Typography variant="text-md" as="span" weight="semibold">
  Inline bold text
</Typography>
```

**Design System Colors:**

- Primary text: `#181d27`
- Secondary text: `#535862`
- Brand purple: `#662d91`
- Brand blue: `#302e9c`

## TypeScript

The project is fully typed with TypeScript. Configuration can be found in
`tsconfig.json`.

## Font System

The project uses **Inter font** loaded via Google Fonts with weights 400, 500,
600, 700. Font is configured in `src/app/[locale]/layout.tsx` and available
globally via CSS variable `--font-inter`.
