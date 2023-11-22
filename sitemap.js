const SitemapGenerator = require('sitemap-generator');
const https = require('https');

// Change this to your actual domain
const domain = 'https://www.atlastea.co.ke';

// Change these paths based on your app structure
const paths = [
  '/',
  '/about',
  '/service',
  '/auction',
  '/news',
  '/garden',
  '/profile',
  '/community',
  '/science'
  // Add other important pages
];

const generator = SitemapGenerator(domain, {
  stripQuerystring: false,
  filepath: './public/sitemap.xml',
  httpsAgent: new https.Agent(), // Remove the 'rejectUnauthorized' option
});

// Add paths to the sitemap
generator.on('add', (url) => {
  console.log(url);
});

// Start the generator
generator.start();


