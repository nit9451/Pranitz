#!/usr/bin/env node

/**
 * PWA Fix Script for Pranitz AI
 * Diagnoses and fixes common PWA installation issues
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 Pranitz AI PWA Fix Script\n');

// Check if we're in the right directory
if (!fs.existsSync('client/public/manifest.json')) {
  console.error('❌ Please run this script from the root directory of your Pranitz AI project');
  process.exit(1);
}

console.log('✅ Project structure looks good');

// 1. Check manifest.json
console.log('\n📋 Checking manifest.json...');
try {
  const manifest = JSON.parse(fs.readFileSync('client/public/manifest.json', 'utf8'));
  
  const requiredFields = ['name', 'short_name', 'start_url', 'display', 'theme_color', 'background_color', 'icons'];
  const missingFields = requiredFields.filter(field => !manifest[field]);
  
  if (missingFields.length > 0) {
    console.log('⚠️  Missing required fields:', missingFields.join(', '));
  } else {
    console.log('✅ Manifest has all required fields');
  }
  
  // Check icons
  if (manifest.icons && manifest.icons.length > 0) {
    console.log('✅ Icons configured');
    manifest.icons.forEach(icon => {
      const iconPath = path.join('client/public', icon.src);
      if (fs.existsSync(iconPath)) {
        console.log(`✅ Icon exists: ${icon.src}`);
      } else {
        console.log(`❌ Missing icon: ${icon.src}`);
      }
    });
  } else {
    console.log('❌ No icons configured');
  }
  
} catch (error) {
  console.error('❌ Invalid manifest.json:', error.message);
}

// 2. Check service worker
console.log('\n🔧 Checking service worker...');
const swPath = 'client/public/sw.js';
if (fs.existsSync(swPath)) {
  console.log('✅ Service worker file exists');
  
  const swContent = fs.readFileSync(swPath, 'utf8');
  if (swContent.includes('install') && swContent.includes('fetch')) {
    console.log('✅ Service worker has required events');
  } else {
    console.log('⚠️  Service worker may be missing required events');
  }
} else {
  console.log('❌ Service worker file missing');
}

// 3. Check HTML meta tags
console.log('\n🌐 Checking HTML meta tags...');
const htmlPath = 'client/public/index.html';
if (fs.existsSync(htmlPath)) {
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  const requiredTags = [
    'manifest',
    'theme-color',
    'apple-mobile-web-app-capable',
    'viewport'
  ];
  
  requiredTags.forEach(tag => {
    if (htmlContent.includes(tag)) {
      console.log(`✅ Meta tag found: ${tag}`);
    } else {
      console.log(`❌ Missing meta tag: ${tag}`);
    }
  });
} else {
  console.log('❌ HTML file missing');
}

// 4. Check service worker registration
console.log('\n📱 Checking service worker registration...');
const indexPath = 'client/src/index.tsx';
if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  if (indexContent.includes('serviceWorkerRegistration')) {
    console.log('✅ Service worker registration found');
  } else {
    console.log('❌ Service worker registration missing');
  }
} else {
  console.log('❌ Index file missing');
}

// 5. Create missing files if needed
console.log('\n🔨 Creating missing files...');

// Ensure offline.html exists
const offlinePath = 'client/public/offline.html';
if (!fs.existsSync(offlinePath)) {
  const offlineHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Offline - Pranitz AI</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            text-align: center;
        }
        h1 { font-size: 3em; margin-bottom: 10px; }
        p { font-size: 1.2em; margin-bottom: 20px; }
        button {
            background-color: #fff;
            color: #667eea;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1em;
        }
    </style>
</head>
<body>
    <h1>You are offline!</h1>
    <p>It looks like you're not connected to the internet.</p>
    <p>Please check your connection and try again.</p>
    <button onclick="window.location.reload()">Retry</button>
</body>
</html>`;
  
  fs.writeFileSync(offlinePath, offlineHtml);
  console.log('✅ Created offline.html');
}

// 6. Generate PWA test report
console.log('\n📊 PWA Test Report:');
console.log('==================');

const testResults = {
  manifest: fs.existsSync('client/public/manifest.json'),
  serviceWorker: fs.existsSync('client/public/sw.js'),
  icons: fs.existsSync('client/public/logo192.png') && fs.existsSync('client/public/logo512.png'),
  offline: fs.existsSync('client/public/offline.html'),
  registration: fs.existsSync('client/src/sw-register.js')
};

Object.entries(testResults).forEach(([test, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${test}: ${passed ? 'PASS' : 'FAIL'}`);
});

const allTestsPassed = Object.values(testResults).every(test => test);
console.log(`\n🎯 Overall PWA Status: ${allTestsPassed ? '✅ READY' : '❌ NEEDS FIXES'}`);

if (allTestsPassed) {
  console.log('\n🚀 Your Pranitz AI PWA is ready!');
  console.log('\nNext steps:');
  console.log('1. Build the app: cd client && npm run build');
  console.log('2. Deploy to HTTPS-enabled hosting (Vercel, Netlify, etc.)');
  console.log('3. Test PWA installation on mobile devices');
  console.log('4. Look for "Add to Home Screen" option in browser menu');
} else {
  console.log('\n🔧 Please fix the issues above before deploying');
}

console.log('\n📖 See PWA_TROUBLESHOOTING.md for detailed help');
