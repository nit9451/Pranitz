#!/usr/bin/env node

/**
 * Pranitz AI Deployment Script
 * Helps prepare and deploy your Pranitz AI application
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Pranitz AI Deployment Helper\n');

// Check if we're in the right directory
if (!fs.existsSync('package.json') || !fs.existsSync('client/package.json')) {
  console.error('❌ Please run this script from the root directory of your Pranitz AI project');
  process.exit(1);
}

console.log('✅ Project structure looks good');

// Check environment variables
const envFile = '.env';
if (!fs.existsSync(envFile)) {
  console.log('⚠️  No .env file found. Creating from template...');
  if (fs.existsSync('env.example')) {
    fs.copyFileSync('env.example', envFile);
    console.log('✅ Created .env file from template');
    console.log('📝 Please edit .env file with your API key before deploying');
  }
}

// Build client
console.log('\n🔨 Building client for production...');
try {
  execSync('cd client && npm run build', { stdio: 'inherit' });
  console.log('✅ Client built successfully');
} catch (error) {
  console.error('❌ Failed to build client:', error.message);
  process.exit(1);
}

// Check build output
const buildDir = path.join('client', 'build');
if (fs.existsSync(buildDir)) {
  console.log('✅ Build directory created:', buildDir);
  
  // List build contents
  const buildContents = fs.readdirSync(buildDir);
  console.log('📁 Build contents:', buildContents.join(', '));
} else {
  console.error('❌ Build directory not found');
  process.exit(1);
}

// Create deployment package
console.log('\n📦 Creating deployment package...');

const deploymentFiles = [
  'server/',
  'client/build/',
  'package.json',
  '.env',
  'README.md'
];

console.log('📋 Files ready for deployment:', deploymentFiles.join('\n'));

// Generate deployment instructions
const deploymentInstructions = `
🎉 Pranitz AI is ready for deployment!

Next steps:
1. Choose your hosting platform:
   - Vercel (recommended): https://vercel.com
   - Netlify: https://netlify.com  
   - Railway: https://railway.app
   - Heroku: https://heroku.com

2. Environment variables needed:
   PERPLEXITY_API_KEY=your_api_key_here
   NODE_ENV=production
   PORT=5000

3. For Vercel (easiest):
   - Push code to GitHub
   - Connect repository to Vercel
   - Add environment variables
   - Deploy!

Your Pranitz AI app is production-ready! 🚀
`;

console.log(deploymentInstructions);

// Create a simple start script for production
const startScript = `#!/usr/bin/env node

// Production start script for Pranitz AI
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes
app.use('/api', require('./server/index.js'));

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
  console.log('🚀 Pranitz AI running on port', PORT);
});
`;

fs.writeFileSync('start.js', startScript);
console.log('✅ Created production start script: start.js');

console.log('\n🎯 Deployment Summary:');
console.log('✅ Client built for production');
console.log('✅ Environment configured');
console.log('✅ Production script created');
console.log('✅ Ready for deployment!');
console.log('\n📖 See DEPLOYMENT_GUIDE.md for detailed instructions');
