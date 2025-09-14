# 🚀 Pranitz AI Deployment Guide

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)
**Best for**: Quick deployment with automatic builds

#### Steps:
1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Pranitz AI"
   git branch -M main
   git remote add origin https://github.com/yourusername/pranitz-ai.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Configure environment variables
   - Deploy!

#### Environment Variables for Vercel:
```
PERPLEXITY_API_KEY=your_api_key_here
PERPLEXITY_API_URL=https://api.perplexity.ai/chat/completions
```

---

### Option 2: Netlify
**Best for**: Frontend hosting with serverless functions

#### Steps:
1. **Build locally**:
   ```bash
   cd client
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `client/build` folder
   - Or connect your GitHub repository

---

### Option 3: Railway (Full Stack)
**Best for**: Both frontend and backend deployment

#### Steps:
1. **Prepare for Railway**:
   ```bash
   # Create railway.json
   echo '{"build": {"builder": "NIXPACKS"}}' > railway.json
   ```

2. **Deploy**:
   - Go to [railway.app](https://railway.app)
   - Connect GitHub repository
   - Add environment variables
   - Deploy!

---

### Option 4: Heroku
**Best for**: Traditional full-stack deployment

#### Steps:
1. **Create Procfile**:
   ```
   web: node server/index.js
   ```

2. **Deploy**:
   ```bash
   heroku create pranitz-ai-app
   heroku config:set PERPLEXITY_API_KEY=your_key_here
   git push heroku main
   ```

---

## Quick Deployment Commands

### Build Production Version:
```bash
# Build client
cd client
npm run build

# The build folder will be created in client/build/
```

### Environment Variables Needed:
```env
# Required for production
PERPLEXITY_API_KEY=your_perplexity_api_key_here
PERPLEXITY_API_URL=https://api.perplexity.ai/chat/completions
NODE_ENV=production
PORT=5000
```

### Test Production Build Locally:
```bash
# Serve the built files
cd client/build
npx serve -s . -l 3000

# In another terminal, start the server
cd ..
node server/index.js
```

---

## Deployment Checklist

### Before Deployment:
- [ ] ✅ Build production version (`npm run build`)
- [ ] ✅ Set up environment variables
- [ ] ✅ Test API key works
- [ ] ✅ Verify PWA functionality
- [ ] ✅ Check mobile responsiveness

### During Deployment:
- [ ] ✅ Add environment variables to hosting platform
- [ ] ✅ Configure domain (if needed)
- [ ] ✅ Set up SSL certificate
- [ ] ✅ Test deployed application

### After Deployment:
- [ ] ✅ Test chat functionality
- [ ] ✅ Verify PWA installation
- [ ] ✅ Check mobile performance
- [ ] ✅ Monitor API usage

---

## Recommended Hosting Platforms

| Platform | Frontend | Backend | Difficulty | Cost | Best For |
|----------|----------|---------|------------|------|----------|
| **Vercel** | ✅ | ✅ | Easy | Free/Paid | Quick deployment |
| **Netlify** | ✅ | ✅ | Easy | Free/Paid | Static + Functions |
| **Railway** | ✅ | ✅ | Medium | Free/Paid | Full-stack |
| **Heroku** | ✅ | ✅ | Medium | Paid | Traditional apps |
| **Render** | ✅ | ✅ | Easy | Free/Paid | Alternative to Heroku |

---

## Production Optimizations

### 1. Environment Security:
```env
# Production environment
NODE_ENV=production
PORT=5000
PERPLEXITY_API_KEY=your_production_key
PERPLEXITY_API_URL=https://api.perplexity.ai/chat/completions
CLIENT_URL=https://your-domain.com
```

### 2. CORS Configuration:
```javascript
// server/index.js
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
};
app.use(cors(corsOptions));
```

### 3. Error Handling:
- Add proper error logging
- Implement rate limiting
- Add request validation

---

## Domain and SSL

### Custom Domain:
1. Buy domain from Namecheap, GoDaddy, etc.
2. Configure DNS records
3. Add domain to hosting platform
4. Enable SSL certificate

### Free SSL:
- Vercel: Automatic SSL
- Netlify: Automatic SSL
- Railway: Automatic SSL
- Heroku: Automatic SSL

---

## Monitoring and Analytics

### Recommended Tools:
- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: User tracking
- **Sentry**: Error monitoring
- **Uptime Robot**: Uptime monitoring

---

## Next Steps

1. **Choose your hosting platform**
2. **Build production version**
3. **Set up environment variables**
4. **Deploy and test**
5. **Configure custom domain (optional)**

**Ready to deploy? Let me know which platform you'd prefer!** 🚀
