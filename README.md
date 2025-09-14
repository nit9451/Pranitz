# Pranitz AI - GPT-like AI Assistant

A modern, ChatGPT-inspired web application powered by advanced AI technology. Built with React, TypeScript, and Express.js.

## Features

- 🤖 **AI-Powered Conversations**: Chat with advanced AI models
- 💬 **ChatGPT-like Interface**: Clean, modern UI similar to ChatGPT
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 💾 **Conversation History**: Save and manage multiple chat sessions
- ⚡ **Real-time Responses**: Fast, streaming-like experience
- 🎨 **Beautiful UI**: Modern design with smooth animations
- 📋 **Copy Messages**: Easy copying of AI responses
- 🔄 **Typing Indicators**: Visual feedback during AI processing

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- AI API key (Perplexity Pro)

## Getting Started

### 1. Clone and Install Dependencies

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp env.example .env
```

Edit the `.env` file and add your AI API key:

```env
# AI API Configuration
PERPLEXITY_API_KEY=your_perplexity_api_key_here
PERPLEXITY_API_URL=https://api.perplexity.ai/chat/completions

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
CLIENT_URL=http://localhost:3000
```

### 3. Get Your AI API Key

1. Go to [Perplexity AI](https://www.perplexity.ai/)
2. Sign up for a Pro account
3. Navigate to your API settings
4. Generate an API key
5. Copy the key to your `.env` file

### 4. Run the Application

#### Development Mode (Recommended)

```bash
# Run both server and client concurrently
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- React frontend on `http://localhost:3000`

#### Manual Setup

If you prefer to run them separately:

```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

### 5. Open the Application

Navigate to `http://localhost:3000` in your browser to start chatting!

## Project Structure

```
pranitz-ai-chatbot/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── types/         # TypeScript type definitions
│   │   ├── App.tsx        # Main App component
│   │   └── index.tsx      # Entry point
│   └── package.json
├── server/                # Express.js backend
│   └── index.js          # Server entry point
├── package.json          # Root package.json
├── .env                  # Environment variables
└── README.md
```

## API Endpoints

- `POST /api/chat` - Send a message and get AI response
- `GET /api/conversations` - Get all conversations
- `GET /api/conversations/:id` - Get specific conversation
- `GET /api/health` - Health check

## Configuration

### Available Models

The application uses the `llama-3.1-sonar-small-128k-online` model by default. You can modify this in `server/index.js`:

```javascript
model: 'llama-3.1-sonar-small-128k-online'  // Change this line
```

Available models:
- `llama-3.1-sonar-small-128k-online`
- `llama-3.1-sonar-large-128k-online`
- `llama-3.1-sonar-huge-128k-online`

### Customization

- **Styling**: Modify CSS files in `client/src/components/`
- **API Settings**: Adjust parameters in `server/index.js`
- **UI Components**: Edit React components in `client/src/components/`

## Production Deployment

### Build for Production

```bash
# Build the React app
npm run build
```

### Environment Variables for Production

```env
NODE_ENV=production
PORT=5000
PERPLEXITY_API_KEY=your_production_api_key
CLIENT_URL=https://yourdomain.com
```

### Deploy to Platforms

The app can be deployed to:
- **Vercel**: Connect your GitHub repository
- **Netlify**: Deploy the client, use serverless functions for API
- **Heroku**: Deploy both client and server
- **DigitalOcean**: Use App Platform or Droplets

## Troubleshooting

### Common Issues

1. **API Key Not Working**
   - Verify your AI API subscription is active
   - Check that the API key is correctly set in `.env`
   - Ensure no extra spaces or quotes in the API key

2. **CORS Errors**
   - Make sure `CLIENT_URL` in `.env` matches your frontend URL
   - Check that both server and client are running

3. **Connection Issues**
   - Verify both server (port 5000) and client (port 3000) are running
   - Check firewall settings
   - Try refreshing the browser

4. **Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check Node.js version compatibility

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Check the server logs in your terminal
3. Verify all environment variables are set correctly
4. Ensure your AI API key has sufficient credits

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with [Perplexity AI](https://www.perplexity.ai/) for Pranitz AI
- UI inspired by ChatGPT
- Powered by React and Express.js

---

**Note**: Make sure you have an active AI API subscription to use this application. The free tier may have limitations.
