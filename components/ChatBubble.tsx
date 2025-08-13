"use client";

import { useState, useRef, useEffect } from 'react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot' | 'system';
  type?: 'greeting' | 'name' | 'email' | 'subject' | 'message' | 'thanks';
};

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "📩 Contact Us\n\nWe'd love to hear from you! Please provide your name to get started.",
      sender: 'bot',
      type: 'name',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatContainerRef.current && !chatContainerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const currentMessage = messages[messages.length - 1];
    const newMessages = [...messages];

    // Add user's message if not a system message
    if (currentMessage.sender !== 'system') {
      newMessages.push({
        id: Date.now(),
        text: inputValue,
        sender: 'user',
      });
    }
    
    // Bot response based on current message type
    if (currentMessage.type === 'name') {
      // Basic name validation
      if (inputValue.trim().length < 2) {
        newMessages.push({
          id: Date.now() + 1,
          text: 'Please enter your full name (minimum 2 characters).',
          sender: 'bot',
          type: 'name',
        });
      } else {
        setFormData({ ...formData, name: inputValue });
        newMessages.push({
          id: Date.now() + 1,
          text: `Thanks, ${inputValue}. What's your email address?`,
          sender: 'bot',
          type: 'email',
        });
      }
    } else if (currentMessage.type === 'email') {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue)) {
        newMessages.push({
          id: Date.now() + 1,
          text: 'Please enter a valid email address (e.g., your.name@example.com).',
          sender: 'bot',
          type: 'email',
        });
      } else {
        setFormData({ ...formData, email: inputValue });
        newMessages.push({
          id: Date.now() + 1,
          text: 'What is this regarding? (e.g., Project Inquiry, General Question, Quote Request)',
          sender: 'bot',
          type: 'subject',
        });
      }
    } else if (currentMessage.type === 'subject') {
      setFormData(prev => ({
        ...prev,
        subject: inputValue,
      }));
      
      newMessages.push({
        id: Date.now() + 1,
        text: 'Please enter your message:',
        sender: 'bot',
        type: 'message',
      });
    } else if (currentMessage.type === 'message') {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: inputValue,
        timestamp: new Date().toISOString()
      });
      newMessages.push({
        id: Date.now() + 1,
        text: `Thank you, ${formData.name}! Your message has been sent.\n\nWe'll get back to you at ${formData.email} soon.`,
        sender: 'bot',
        type: 'thanks',
      });
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Add thank you message with emoji
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now() + 2,
            text: '✨ Thank you for your message! ✨\n\nWe appreciate you reaching out to us. Our team will review your inquiry and get back to you soon.',
            sender: 'system',
            type: 'thanks'
          }
        ]);
      }, 1000);
    } else if (currentMessage.type === 'thanks') {
      setInputValue('');
      return;
    }

    // Scroll to bottom when messages update
    setTimeout(() => {
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

    setMessages(newMessages);
    setInputValue('');
  };

  const toggleChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={chatContainerRef}>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className={`p-2 rounded-full transition-colors ${
          isOpen ? 'bg-gray-100' : 'hover:bg-gray-50'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* Chat Dropdown */}
      <div
        className={`absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-all duration-200 transform origin-top-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-white p-4 border-b border-gray-100">
          <h3 className="text-sm font-medium text-gray-900">Chat with us</h3>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] text-sm rounded-lg px-3 py-2 ${
                  message.sender === 'user'
                    ? 'bg-[#60FCC4] text-gray-900 rounded-br-none'
                    : message.sender === 'system' 
                    ? 'bg-gray-50 text-center text-gray-600 text-xs py-4 border border-gray-100 rounded-lg mx-auto max-w-[90%] my-2'
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="p-3 border-t border-gray-100 bg-white"
        >
          <div className="flex space-x-2">
            <input
              type={messages[messages.length - 1]?.type === 'email' ? 'email' : 'text'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                messages[messages.length - 1]?.type === 'email'
                  ? 'Enter your email...'
                  : 'Type your message...'
              }
              className="flex-1 text-black text-sm px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60FCC4] focus:border-[#60FCC4]"
              required
            />
            <button
              type="submit"
              className="bg-black text-white rounded-lg px-3 hover:bg-gray-800 transition-colors text-sm font-medium"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
