# 🚀 GitHub Repository Setup Guide for Pranitz AI

## 📋 **Step-by-Step Instructions**

### **Step 1: Create GitHub Repository**

1. **Go to GitHub**: Open [github.com](https://github.com) in your browser
2. **Sign in** to your GitHub account (create one if needed)
3. **Create new repository**:
   - Click the **"+"** icon in top-right corner
   - Select **"New repository"**
   - Fill in the details:
     ```
     Repository name: pranitz-ai
     Description: Pranitz AI - Intelligent AI Chatbot with PWA Support
     Visibility: Public (recommended for free hosting)
     Initialize: Leave unchecked
     ```
4. **Click "Create repository"**

### **Step 2: Copy Repository URL**

After creating the repo, GitHub will show you the repository URL:
```
https://github.com/YOUR_USERNAME/pranitz-ai.git
```
**Copy this URL** - you'll need it in the next step!

### **Step 3: Push Your Code**

Run these commands in your project directory:

```bash
# Add your GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/pranitz-ai.git

# Push your code to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### **Step 4: Verify Upload**

1. Go back to your GitHub repository page
2. Refresh the page
3. You should see all your Pranitz AI files uploaded!

## 🎯 **Quick Commands Summary**

```bash
# 1. Create repo on GitHub.com (do this first)
# 2. Then run these commands:

git remote add origin https://github.com/YOUR_USERNAME/pranitz-ai.git
git push -u origin main
```

## 📁 **What Will Be Uploaded**

Your repository will contain:
- ✅ **Complete Pranitz AI application**
- ✅ **PWA configuration** (manifest, service worker)
- ✅ **Deployment configs** (Vercel, Netlify, Railway)
- ✅ **Branding files** (custom colors, icons)
- ✅ **Documentation** (README, deployment guides)
- ✅ **Production-ready code**

## 🚀 **After GitHub Upload**

Once your code is on GitHub, you can:

### **Deploy to Vercel** (Recommended):
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your `pranitz-ai` repository
4. Add environment variables:
   ```
   PERPLEXITY_API_KEY=your_api_key_here
   NODE_ENV=production
   ```
5. Deploy!

### **Deploy to Netlify**:
1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Deploy automatically

### **Deploy to Railway**:
1. Go to [railway.app](https://railway.app)
2. Connect GitHub repository
3. Add environment variables
4. Deploy!

## 🔧 **Troubleshooting**

### **If you get authentication errors:**
```bash
# Use GitHub CLI (easier)
gh auth login
gh repo create pranitz-ai --public --source=. --remote=origin --push
```

### **If you get permission errors:**
1. Make sure you're signed in to GitHub
2. Check your repository URL is correct
3. Ensure the repository exists on GitHub

### **If files don't appear:**
```bash
# Check what's staged
git status

# Add all files
git add .

# Commit again
git commit -m "Add all Pranitz AI files"

# Push again
git push origin main
```

## 📱 **PWA Installation After Deployment**

Once deployed with HTTPS:
1. **Android**: Chrome → Menu → "Add to Home Screen"
2. **iOS**: Safari → Share → "Add to Home Screen"
3. **Desktop**: Chrome → Install icon in address bar

## 🎉 **Success Checklist**

- [ ] ✅ Created GitHub repository
- [ ] ✅ Pushed code to GitHub
- [ ] ✅ Deployed to hosting platform
- [ ] ✅ Added environment variables
- [ ] ✅ Tested PWA installation
- [ ] ✅ Pranitz AI working on mobile!

**Your Pranitz AI will be live and installable as a PWA!** 🚀
