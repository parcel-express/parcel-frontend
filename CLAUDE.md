# Parcel Express Frontend

This is a Next.js 15 project with multilingual support using next-intl and styled-components for styling.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **next-intl** for internationalization (English, Georgian, Russian)
- **styled-components** for CSS-in-JS styling
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
3. The app automatically detects browser language or you can access specific locales:
   - `/en` for English
   - `/ka` for Georgian  
   - `/ru` for Russian

## Internationalization

Translations are stored in the `messages/` directory. To add new translations:

1. Add the key-value pair to all language files
2. Use `useTranslations('namespace')` hook in components
3. Access translations with `t('key')`

## Styling

This project uses styled-components for styling. The `StyledComponentsRegistry` component ensures proper SSR support.

## TypeScript

The project is fully typed with TypeScript. Configuration can be found in `tsconfig.json`.