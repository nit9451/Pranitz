#!/bin/bash

# GitHub Repository Setup Script for Pranitz AI
echo "🚀 Setting up GitHub repository for Pranitz AI"
echo "=============================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Initial commit: Pranitz AI - Intelligent AI Chatbot with PWA Support"

echo ""
echo "✅ Ready to push to GitHub!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub.com"
echo "2. Copy the repository URL"
echo "3. Run these commands:"
echo "   git remote add origin YOUR_REPO_URL"
echo "   git push -u origin main"
echo ""
echo "Example:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/pranitz-ai.git"
echo "   git push -u origin main"
