'use client';

import { useState, useEffect, useRef } from 'react';

// Icons
const XMarkIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PaperAirplaneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const ChatBubbleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

type MessageType = 'greeting' | 'name' | 'email' | 'project' | 'budget' | 'timeline' | 'summary' | 'contact' | 'goodbye' | 'phone';

type InputType = 'text' | 'email' | 'tel' | 'number';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot' | 'system';
  type?: MessageType;
  options?: string[];
  inputType?: InputType;
  field?: string;
};

type FormDataType = {
  [key: string]: string;
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  phoneNumber: string;
};

type Question = {
  text: string | ((name: string) => string);
  field: string;
  type: MessageType;
  options?: string[];
  inputType?: InputType;
  validate?: (value: string) => boolean;
  error?: string;
};


export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  
  // Initialize with welcome message only if messages are empty
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      setMessages([{
        id: Date.now(),
        text: "👋 Hello! I'm Frooxi's assistant. I'm here to help you with your project. May I know your name?",
        sender: 'bot',
        type: 'name',
      }]);
    }
  }, [isOpen, messages.length]);
  const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    phoneNumber: ''
  });
  const [isSending, setIsSending] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
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

  // Listen for open chat event from hero button
  useEffect(() => {
    const handleOpenChat = (e: Event) => {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        // Initialize messages when opening the chat
        setMessages([{
          id: Date.now(),
          text: "👋 Hello! I'm Frooxi's assistant. I'm here to help you with your project. May I know your name?",
          sender: 'bot',
          type: 'name',
        }]);
      }
    };
    
    // Add event listener for custom 'openChat' event
    window.addEventListener('openChat', handleOpenChat);
    
    // Cleanup
    return () => {
      window.removeEventListener('openChat', handleOpenChat);
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isSending) return;

    const currentMessage = messages[messages.length - 1];
    const newMessages = [...messages];
    const messageType = currentMessage.type || 'greeting';

    // Add user's message
    newMessages.push({
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      type: messageType as MessageType
    });
    
    // Update form data
    if (messageType && messageType !== 'goodbye' && messageType !== 'summary') {
      setFormData(prev => ({
        ...prev,
        [messageType]: inputValue
      }));
    }

    setMessages(newMessages);
    setInputValue('');
    
    // Bot response logic
    setTimeout(() => {
      botResponse(newMessages, messageType);
    }, 500);
  };

  const generateSummary = (data: FormDataType) => {
    return `Here's what I've gathered about your project:
    
• Name: ${data.name}
• Email: ${data.email}
• Project Type: ${data.projectType}
• Budget: ${data.budget}
• Timeline: ${data.timeline}

Would you like to provide any additional details before we proceed?`;
  };

  const botResponse = (currentMessages: Message[], lastType?: string) => {
    let response = '';
    let type: Message['type'] = 'greeting';
    let inputType: 'text' | 'email' | 'tel' | 'number' = 'text';
    let field = '';
    let options: string[] = [];

    switch (lastType) {
      case 'name':
        response = `Nice to meet you, ${inputValue}! Could you share your email address so we can stay in touch?`;
        type = 'email';
        field = 'email';
        inputType = 'email';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputValue)) {
          response = 'Hmm, that email doesn\'t look quite right. Could you double-check and enter a valid email address?';
          type = 'email';
          field = 'email';
          inputType = 'email';
        } else {
          response = 'Got it! Could you tell me more about the project you have in mind? What kind of solution are you looking to build?';
          type = 'project';
        }
        break;
      case 'project':
        response = 'Thanks for sharing! To help us provide the best solution, could you give me an idea of your budget range for this project?';
        type = 'budget';
        field = 'budget';
        break;
      case 'budget':
        response = 'Got it! When are you looking to get started with this project?';
        type = 'timeline';
        field = 'timeline';
        break;
      case 'timeline':
        response = generateSummary({...formData, [lastType]: inputValue});
        type = 'summary';
        break;
      case 'summary':
        response = 'Perfect! How would you prefer we send you the proposal and next steps? You can choose email or SMS.';
        type = 'contact';
        break;
      case 'contact':
        const contactMethod = inputValue.toLowerCase();
        if (contactMethod.includes('sms') || contactMethod.includes('text') || contactMethod.includes('phone')) {
          response = 'Great! Please share your phone number with the country code (e.g., +1234567890) and we\'ll text you the details.';
          type = 'phone';
          field = 'phoneNumber';
          inputType = 'tel';
        } else if (contactMethod.includes('email') || contactMethod.includes('mail')) {
          response = `Perfect! We'll send the proposal to ${formData.email} shortly. Is there anything else you'd like to discuss?`;
          type = 'goodbye';
        } else {
          response = 'I\'m not sure I caught that. Would you prefer to receive the proposal via email or SMS?';
          type = 'contact';
        }
        break;
      case 'phone':
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        if (!phoneRegex.test(inputValue)) {
          response = 'Please enter a valid phone number with country code (e.g., +1234567890)';
          type = 'phone';
          field = 'phoneNumber';
          inputType = 'tel';
        } else {
          response = `Great! We'll text the proposal to ${inputValue} shortly. Is there anything else you'd like to discuss?`;
          type = 'goodbye';
        }
        break;
      case 'goodbye':
        response = 'Thank you for choosing Frooxi! Our team will be in touch shortly. Have a wonderful day!';
        type = 'goodbye';
        setTimeout(() => {
          // Reset the chat after a delay
          setMessages([{
            id: Date.now(),
            text: "👋 Welcome back! How can I assist you today?",
            sender: 'bot',
            type: 'greeting',
          }]);
          setFormData({
            name: '',
            email: '',
            projectType: '',
            budget: '',
            timeline: '',
            phoneNumber: ''
          });
        }, 3000);
        break;
      default:
        response = "👋 Welcome back! How can I assist you today?";
        type = 'greeting';
    }

    if (response) {
      const newMessage: Message = {
        id: Date.now(),
        text: response,
        sender: 'bot',
        type,
        ...(options.length > 0 && { options }),
        ...(inputType && { inputType }),
      };
      setMessages(prev => [...prev, newMessage]);
    }
  };

  const handleOptionSelect = (option: string, field?: string) => {
    if (!field) return;
    
    setInputValue(option);
    // Trigger form submission after a small delay to allow state update
    setTimeout(() => {
      const form = document.getElementById('chat-form') as HTMLFormElement;
      form?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }, 50);
  };

  // Only render the chat interface in the browser
  if (typeof window === 'undefined') {
    return null;
  }

  return isOpen ? (
    <div 
      ref={chatContainerRef}
      className="fixed bottom-8 right-8 z-50 w-96 bg-white rounded-xl shadow-2xl flex flex-col h-[600px] overflow-hidden"
    >
      {/* Chat Header */}
      <div className="bg-black text-white p-4 flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Frooxi Assistant</h3>
          <p className="text-xs text-gray-300">We&apos;ll respond quickly</p>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-300"
          aria-label="Close chat"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-[#60FCC4] text-black rounded-br-none'
                    : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <form 
        onSubmit={handleSubmit}
        className="p-3 border-t border-gray-100 bg-white"
        id="chat-form"
      >
        <div className="flex space-x-2">
          <input
            type={messages[messages.length - 1]?.type === 'email' ? 'email' : 'text'}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={
              messages[messages.length - 1]?.type === 'email'
                ? 'Enter your email...'
                : messages[messages.length - 1]?.type === 'phone'
                ? 'Enter your phone number...'
                : 'Type your message...'
            }
            className="flex-1 text-black text-sm px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60FCC4] focus:border-[#60FCC4]"
            disabled={isSending}
            required
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isSending}
            className="bg-black text-white rounded-lg px-4 hover:bg-gray-800 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  ) : null;
}
