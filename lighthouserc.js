module.exports = {
  ci: {
    collect: {
      // URLs to test - add your deployment URL here
      url: ['http://localhost:3000/en', 'http://localhost:3000/ka', 'http://localhost:3000/ru'],
      // Number of runs per URL for more consistent results
      numberOfRuns: 1,
      // Start a local server if needed
      startServerCommand: 'npm run build && npm run start',
      // Settings for the Lighthouse run
      settings: {
        // Chrome flags for consistent testing
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
        // Preset configurations
        preset: 'desktop', // or 'mobile'
      },
    },
    assert: {
      // Performance thresholds - adjust based on your requirements
      assertions: {
        // Core Web Vitals
        'categories:performance': ['error', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],

        // Specific metrics
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 4000 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 500 }],
        'speed-index': ['error', { maxNumericValue: 3000 }],

        // Accessibility
        'color-contrast': 'error',
        'button-name': 'error',
        list: 'error',
        listitem: 'error',

        // Best practices
        'errors-in-console': 'warn', // Changed to warn since you have 404s
        'uses-responsive-images': 'error',
        'uses-optimized-images': 'warn',

        // SEO
        'meta-description': 'error',
        'document-title': 'error',
        viewport: 'error',
      },
    },
    upload: {
      // Optional: Upload results to Lighthouse CI server
      target: 'temporary-public-storage',
      // Or use filesystem storage
      // target: 'filesystem',
      // outputDir: './lighthouse-results',
    },
  },
};
