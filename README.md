# Parcel Express Frontend

This is a [Next.js](https://nextjs.org) project with multilingual support using
next-intl and styled-components for styling.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **next-intl** for internationalization (English, Georgian, Russian)
- **styled-components** for CSS-in-JS styling
- **Inter Font** and **Noto Sans Georgian** via Google Fonts
- **Design System Components** based on Figma designs
- **Lighthouse CI** for automated performance testing
- **ESLint** for code linting with custom rules

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Available Scripts

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Code Quality

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint and fix issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run validate` - Run all quality checks

### Performance Testing

#### Local Testing (Recommended for Development)

```bash
npm run lighthouse:local
```

- Runs Lighthouse tests against local development server
- Uses relaxed performance thresholds suitable for development
- Tests main page and English locale
- Results saved to `./lighthouse-results/`

#### Full Performance Testing

```bash
npm run perf:test
```

- Builds the application and runs comprehensive Lighthouse tests
- Tests all locales (English, Georgian, Russian)
- Uses production-level performance thresholds
- Takes longer but provides complete performance analysis

#### CI/Production Testing

```bash
npm run perf:ci
```

- Uses strict production thresholds
- Same configuration as GitHub Actions pipeline
- Suitable for pre-deployment validation

## Performance Standards

Our Lighthouse CI enforces the following minimum standards:

- **Performance Score**: ≥85%
- **Accessibility Score**: ≥90%
- **Best Practices Score**: ≥90%
- **SEO Score**: ≥90%

### Key Metrics:

- **First Contentful Paint (FCP)**: <2000ms
- **Largest Contentful Paint (LCP)**: <4000ms
- **Cumulative Layout Shift (CLS)**: <0.1
- **Total Blocking Time (TBT)**: <500ms
- **Speed Index**: <3000ms

## Automated Testing

### GitHub Actions Pipeline

Performance tests run automatically on:

- **Push to `main` or `develop` branches**
- **Pull requests to `main`**

The pipeline will:

1. Build the application
2. Run Lighthouse tests on all locales
3. Fail if performance thresholds aren't met
4. Upload results as artifacts for review

### Viewing Results

- **Local**: Results saved to `./lighthouse-results/` folder
- **CI**: Check the "Actions" tab in GitHub for detailed reports
- **Artifacts**: Download full Lighthouse reports from GitHub Actions

## Supported Languages

- English (en) - Default
- Georgian (ka) - Uses Noto Sans Georgian font
- Russian (ru) - Uses Inter font

Access specific locales:

- `/en` for English
- `/ka` for Georgian
- `/ru` for Russian

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for more details.
