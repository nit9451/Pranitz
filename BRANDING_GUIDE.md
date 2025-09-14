# 🎨 Pranitz AI Branding Guide

## Quick Brand Customization

To customize your Pranitz AI app with your own branding, follow these simple steps:

### 1. 📝 **Change App Name & Text**

Edit `client/src/config/branding.js`:
```javascript
export const BRANDING_CONFIG = {
  appName: "Your App Name",           // Main app name
  appShortName: "YourApp",            // Short name for PWA
  tagline: "Your custom tagline",     // App tagline
  description: "Your description",    // App description
  // ... rest of config
};
```

### 2. 🎨 **Change Brand Colors**

Edit `client/src/styles/brand-colors.css`:
```css
:root {
  --primary-color: #your-color;      /* Main brand color */
  --secondary-color: #your-color;    /* Secondary color */
  --accent-color: #your-color;       /* Accent color */
  /* ... other colors */
}
```

**Pre-made Color Themes Available:**
- **Default**: Purple/Blue gradient (#667eea, #764ba2)
- **Dark Theme**: Purple/Dark (#8b5cf6, #a855f7)
- **Corporate Blue**: Professional blue (#2563eb, #1d4ed8)
- **Green Tech**: Modern green (#059669, #047857)
- **Orange Energy**: Vibrant orange (#ea580c, #c2410c)

### 3. 🖼️ **Custom Icons**

Replace these files in `client/public/`:
- `favicon.ico` - Browser tab icon
- `logo192.png` - PWA icon (192x192)
- `logo512.png` - PWA icon (512x512)

### 4. 📱 **PWA Branding**

Update `client/public/manifest.json`:
```json
{
  "short_name": "YourApp",
  "name": "Your App Name",
  "description": "Your app description",
  "theme_color": "#your-color",
  "background_color": "#your-color"
}
```

### 5. 🌐 **Meta Tags**

Update `client/public/index.html`:
```html
<title>Your App Name - Your Tagline</title>
<meta name="description" content="Your app description" />
<meta name="keywords" content="your, keywords, here" />
```

## 🎨 **Color Customization Examples**

### Corporate Brand (Blue)
```css
--primary-color: #2563eb;
--secondary-color: #1d4ed8;
--accent-color: #059669;
```

### Tech Startup (Green)
```css
--primary-color: #059669;
--secondary-color: #047857;
--accent-color: #2563eb;
```

### Creative Agency (Orange)
```css
--primary-color: #ea580c;
--secondary-color: #c2410c;
--accent-color: #2563eb;
```

### Financial (Dark Blue)
```css
--primary-color: #1e40af;
--secondary-color: #1e3a8a;
--accent-color: #059669;
```

## 📋 **Files to Update for Complete Rebranding**

1. **App Name & Content:**
   - `client/src/config/branding.js`
   - `client/src/App.js` (welcome messages)

2. **Colors & Styling:**
   - `client/src/styles/brand-colors.css`
   - `client/public/index.html` (theme-color)

3. **PWA Configuration:**
   - `client/public/manifest.json`
   - `client/public/browserconfig.xml`

4. **Icons & Assets:**
   - `client/public/favicon.ico`
   - `client/public/logo192.png`
   - `client/public/logo512.png`

5. **Meta Information:**
   - `client/public/index.html`
   - `client/public/offline.html`

## 🚀 **Quick Start Commands**

After making changes:
```bash
# Restart the development server
npm run dev

# Or restart both frontend and backend
npm run dev
```

## 💡 **Pro Tips**

1. **Test on Mobile**: Use browser dev tools to test mobile appearance
2. **PWA Installation**: Test the install prompt in Chrome/Edge
3. **Color Contrast**: Ensure good contrast for accessibility
4. **Icon Size**: Use 512x512 for high-quality icons
5. **Brand Consistency**: Keep colors consistent across all touchpoints

## 🎯 **Your Current Branding**

**App Name:** Pranitz AI  
**Brand:** Pranitz  
**Primary Color:** #667eea (Purple-Blue)  
**Secondary Color:** #764ba2 (Purple)  
**Accent Color:** #10b981 (Green)  

Ready to customize? Just edit the files above and restart your development server!
