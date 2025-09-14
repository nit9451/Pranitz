const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

// Store chat sessions in memory (for production, consider using a database)
const chatSessions = new Map();

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, sessionId } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Get or create session
    let session = chatSessions.get(sessionId);
    if (!session) {
      session = {
        id: sessionId || uuidv4(),
        messages: [],
        createdAt: new Date()
      };
      chatSessions.set(session.id, session);
    }

    // Add user message to session
    session.messages.push({
      role: 'user',
      content: message,
      timestamp: new Date()
    });

    // Call Perplexity API
    const perplexityResponse = await axios.post('https://api.perplexity.ai/chat/completions', {
      model: 'llama-3.1-sonar-small-128k-online',
      messages: session.messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      max_tokens: 1000,
      temperature: 0.7,
      top_p: 0.9,
      return_citations: true,
      search_domain_filter: ['perplexity.ai'],
      search_recency_filter: 'month'
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const aiResponse = perplexityResponse.data.choices[0].message.content;
    
    // Add AI response to session
    session.messages.push({
      role: 'assistant',
      content: aiResponse,
      timestamp: new Date()
    });

    // Update session
    chatSessions.set(session.id, session);

    res.json({
      response: aiResponse,
      sessionId: session.id,
      citations: perplexityResponse.data.citations || []
    });

  } catch (error) {
    console.error('Chat API error:', error);
    
    if (error.response?.status === 401) {
      return res.status(401).json({ 
        error: 'Invalid API key. Please check your Perplexity API configuration.' 
      });
    }
    
    if (error.response?.status === 429) {
      return res.status(429).json({ 
        error: 'Rate limit exceeded. Please try again later.' 
      });
    }
    
    res.status(500).json({ 
      error: 'Failed to process your request. Please try again.' 
    });
  }
}
