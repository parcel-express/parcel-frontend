module.exports = {
  ci: {
    collect: {
      // Local testing configuration
      url: ['http://localhost:3000', 'http://localhost:3000/en'],
      numberOfRuns: 1, // Faster for local development
      startServerCommand: 'npm run dev',
      startServerReadyPattern: 'Ready on',
      startServerReadyTimeout: 10000,
      settings: {
        chromeFlags: '--no-sandbox --disable-dev-shm-usage --headless',
        preset: 'desktop',
      },
    },
    assert: {
      // More relaxed thresholds for local development
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],

        // Key metrics only for local testing
        'largest-contentful-paint': ['warn', { maxNumericValue: 5000 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],

        // Critical accessibility
        'color-contrast': 'error',
        'button-name': 'error',
        list: 'error',

        // Best practices - disable console errors due to expected 404s
        'errors-in-console': 'off',
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse-results',
    },
  },
};
