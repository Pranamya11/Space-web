import React, { useState, useRef, useEffect } from 'react';
import { planetData } from '../data/planetData';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (sender, text) => {
    setMessages(prev => [...prev, { sender, text, id: Date.now() }]);
  };

  const handleBotReply = (msg) => {
    const lower = msg.toLowerCase();
    
    // Try to match planet name
    let found = null;
    for (const key in planetData) {
      if (lower.includes(key.toLowerCase()) || lower.includes(planetData[key].name.toLowerCase())) {
        found = planetData[key];
        break;
      }
    }
    
    if (found) {
      // Moons question
      if (lower.includes('moon')) {
        if (found.moons && found.moons.length > 0) {
          addMessage('bot', `${found.name} has the following moon(s): ${found.moons.map(m => m.name).join(', ')}.`);
        } else {
          addMessage('bot', `${found.name} has no moons.`);
        }
        return;
      }
      
      // Gravity question
      if (lower.includes('gravity')) {
        const gravity = found.desc.find(d => d.label.toLowerCase().includes('gravity'));
        if (gravity) {
          addMessage('bot', `${found.name}'s gravity: ${gravity.value}`);
        } else {
          addMessage('bot', `Sorry, I don't have gravity info for ${found.name}.`);
        }
        return;
      }
      
      // General info
      let info = `<b>${found.name}</b>: ${found.description}<br/>`;
      info += found.desc.map(d => `<b>${d.label}:</b> ${d.value}`).join('<br/>');
      addMessage('bot', info);
      return;
    }
    
    // List all planets
    if (lower.includes('all planets') || lower.includes('list planets')) {
      addMessage('bot', 'The major planets are: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.');
      return;
    }
    
    // Help
    if (lower.includes('help')) {
      addMessage('bot', 'You can ask me about any planet, its moons, or stats. For example: "Tell me about Mars", "What is the gravity of Jupiter?", "List moons of Saturn".');
      return;
    }
    
    // Fallback
    addMessage('bot', "Sorry, I didn't understand. Try asking about a planet, its moons, or stats!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userMsg = inputValue.trim();
    if (!userMsg) return;
    
    addMessage('user', userMsg);
    setInputValue('');
    
    setTimeout(() => handleBotReply(userMsg), 400);
  };

  return (
    <>
      <button 
        className="chatbot-btn"
        onClick={() => setIsOpen(true)}
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        💬
      </button>
      
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <span>SpaceBot</span>
          <button 
            className="chatbot-close"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((message) => (
            <div key={message.id} className={`chatbot-message ${message.sender}`}>
              <span dangerouslySetInnerHTML={{ __html: message.text }}></span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <form className="chatbot-form" onSubmit={handleSubmit}>
          <input 
            className="chatbot-input"
            type="text" 
            placeholder="Ask about a planet..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="chatbot-send">Send</button>
        </form>
      </div>
    </>
  );
};

export default Chatbot; 