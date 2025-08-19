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

type MessageType = 'greeting' | 'name' | 'email' | 'project' | 'projectDetails' | 'audience' | 'features' | 'content' | 'integrations' | 'platform' | 'design' | 'budget' | 'timeline' | 'summary' | 'contact' | 'goodbye' | 'phone';

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
  projectDetails: string;
  audience: string;
  features: string;
  content: string;
  integrations: string;
  platform: string;
  design: string;
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
    projectDetails: '',
    audience: '',
    features: '',
    content: '',
    integrations: '',
    platform: '',
    design: '',
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
    
    // Update form data using field if available, else by messageType
    const targetField = (currentMessage as any)?.field || messageType;
    if (targetField && targetField !== 'goodbye' && targetField !== 'summary') {
      setFormData(prev => ({
        ...prev,
        [targetField]: inputValue
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
    // Helpers
    const isUnset = (v?: string) => !v || /^(not sure|not yet|n\/a|na|—|none)$/i.test(v.trim());
    const clean = (v: string) => v.trim().replace(/\s+/g, ' ');
    const stripPeriod = (v: string) => v.replace(/\.$/, '');
    const titleCaseTech = (v: string) => {
      const t = v.toLowerCase();
      return t.replace(/react\b/i, 'React')
              .replace(/next\.?js\b/i, 'Next.js')
              .replace(/node\b/i, 'Node')
              .replace(/express\b/i, 'Express')
              .replace(/postgres(ql)?\b/i, 'PostgreSQL');
    };
    const normalizePOS = (v: string) => v.replace(/\bpos\b/gi, 'POS');
    const neutralizeFirstPerson = (v: string) => {
      let s = v;
      s = s.replace(/^\s*i\s*(want|wanna|need|am\s+looking\s+to|would\s+like\s+to)\s+/i, '');
      s = s.replace(/^\s*we\s*(want|wanna|need|are\s+looking\s+to|would\s+like\s+to)\s+/i, '');
      s = s.replace(/\bmy\b/gi, '');
      s = s.replace(/\bfor\s+myself\b/gi, 'for personal use');
      s = s.replace(/\bfor\s+me\b/gi, 'for personal use');
      s = s.replace(/\bfinance\b/gi, 'finance');
      s = normalizePOS(s);
      s = clean(s);
      // Ensure starts with an article
      if (!/^\s*(a|an|the)\b/i.test(s)) {
        const startsWithVowel = /^[aeiou]/i.test(s);
        s = (startsWithVowel ? 'An ' : 'A ') + s;
      }
      return s;
    };

    const parts: string[] = [];

    // Header with contact
    const namePart = !isUnset(data.name) ? clean(data.name) : '';
    const emailPart = !isUnset(data.email) ? clean(data.email) : '';
    if (namePart || emailPart) {
      const contact = namePart && emailPart
        ? `${namePart} <${emailPart}>`
        : (namePart || emailPart);
      parts.push(`Project contact: ${contact}.`);
    }

    // Lead/idea
    const ideaRaw = data.projectDetails || data.projectType || '';
    if (!isUnset(ideaRaw)) {
      const idea = stripPeriod(neutralizeFirstPerson(clean(ideaRaw)));
      parts.push(`${idea}.`);
    }

    // Audience (humanize "myself")
    if (!isUnset(data.audience)) {
      let audience = clean(data.audience);
      audience = audience.replace(/^myself$/i, 'personal use');
      audience = audience.replace(/^me$/i, 'personal use');
      parts.push(`It is intended for ${stripPeriod(audience)}.`);
    }

    // Scope: features + pages
    const scopeBits: string[] = [];
    if (!isUnset(data.features)) scopeBits.push(stripPeriod(normalizePOS(clean(data.features))));
    if (!isUnset(data.content)) scopeBits.push(stripPeriod(clean(data.content)));
    if (scopeBits.length) parts.push(`Core scope includes ${scopeBits.join('; ')}.`);

    // Integrations
    if (!isUnset(data.integrations)) {
      parts.push(`Planned integrations include ${stripPeriod(clean(data.integrations))}.`);
    }

    // Tech
    if (!isUnset(data.platform)) {
      parts.push(`Proposed tech stack: ${stripPeriod(titleCaseTech(normalizePOS(clean(data.platform))))}.`);
    }

    // Design (optional)
    if (!isUnset(data.design)) {
      parts.push(`Design preference: ${stripPeriod(clean(data.design))}.`);
    }

    // Constraints
    const constraints: string[] = [];
    if (!isUnset(data.budget)) constraints.push(`budget ${clean(data.budget)}`);
    if (!isUnset(data.timeline)) constraints.push(`timeline ${clean(data.timeline)}`);
    if (constraints.length) parts.push(`Constraints: ${constraints.join('; ')}.`);

    // Final polish: join and remove accidental double periods
    return parts.join(' ').replace(/\.\./g, '.');
  };

  // Placeholder: persist summary to backend/database (no-op for now)
  const persistSummary = async (summary: string, data: FormDataType) => {
    // TODO: POST to your API here
    return Promise.resolve();
  };

  const botResponse = (currentMessages: Message[], lastType?: string) => {
    let response = '';
    let type: Message['type'] = 'greeting';
    let inputType: 'text' | 'email' | 'tel' | 'number' = 'text';
    let field = '';
    let options: string[] = [];
    let responseSender: 'bot' | 'system' = 'bot';

    // Helper to detect generic/short project replies
    const isTooShortProject = (text: string) => {
      const cleaned = text.trim().toLowerCase();
      if (cleaned.length < 10) return true;
      const genericPhrases = [
        'website', 'a website', 'build a website', 'web site', 'app', 'an app', 'mobile app',
        'software', 'project', 'ecommerce', 'e-commerce', 'shop', 'store', 'saas', 'dashboard'
      ];
      return genericPhrases.includes(cleaned) || cleaned.split(/\s+/).length <= 2;
    };

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
          field = 'projectType';
          // Store the email in form data
          setFormData(prev => ({
            ...prev,
            email: inputValue
          }));
        }
        break;
      case 'project':
        // Save the raw project type/short description
        setFormData(prev => ({ ...prev, projectType: inputValue }));
        // Check if the project description is too short or generic
        if (isTooShortProject(inputValue)) {
          response = "Got it! To help us understand better, could you briefly describe the idea in 2–3 sentences? What's the goal and who benefits?";
          type = 'projectDetails';
          field = 'projectDetails';
        } else {
          // If it's reasonably detailed, still ask a quick follow-up about audience
          response = 'Thanks for sharing! Who is your primary audience or user base for this solution?';
          type = 'audience';
          field = 'audience';
        }
        break;
      case 'projectDetails':
        response = 'Great, that helps! Who is your primary audience or user base?';
        type = 'audience';
        field = 'audience';
        // persist
        setFormData(prev => ({ ...prev, projectDetails: inputValue }));
        break;
      case 'audience':
        response = 'Understood. What are the core features or user flows you need in the first version?';
        type = 'features';
        field = 'features';
        setFormData(prev => ({ ...prev, audience: inputValue }));
        break;
      case 'features':
        response = 'Noted. Do you already have content/pages in mind (e.g., Home, About, Pricing, Blog), or should we help with content as well?';
        type = 'content';
        field = 'content';
        setFormData(prev => ({ ...prev, features: inputValue }));
        break;
      case 'content':
        response = 'Any third‑party integrations needed (e.g., payments, auth, CRM, analytics, email, CMS)?';
        type = 'integrations';
        field = 'integrations';
        setFormData(prev => ({ ...prev, content: inputValue }));
        break;
      case 'integrations':
        response = 'Do you have a preferred platform/tech stack (e.g., Next.js, WordPress, Shopify) or should we recommend one?';
        type = 'platform';
        field = 'platform';
        setFormData(prev => ({ ...prev, integrations: inputValue }));
        break;
      case 'platform':
        response = 'Any design references or brand guidelines we should follow?';
        type = 'design';
        field = 'design';
        setFormData(prev => ({ ...prev, platform: inputValue }));
        break;
      case 'design':
        response = 'Thanks! To help us provide the best solution, could you give me an idea of your budget range for this project?';
        type = 'budget';
        field = 'budget';
        setFormData(prev => ({ ...prev, design: inputValue }));
        break;
      case 'budget':
        response = 'Got it! When are you looking to get started with this project?';
        type = 'timeline';
        field = 'timeline';
        break;
      case 'timeline':
        {
          const dataNow = { ...formData, [lastType]: inputValue } as FormDataType;
          const summary = generateSummary(dataNow);
          // Persist silently; do not show the summary in chat
          persistSummary(summary, dataNow).catch(() => {});
          response = 'Great! How would you prefer we send the proposal and next steps? Email or SMS?';
          type = 'contact';
        }
        break;
      case 'summary':
        // Route directly to contact preference
        response = 'Great! How would you prefer we send the proposal and next steps? Email or SMS?';
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
        // Final message should be from the system and do NOT clear chat history
        response = '✨ Thank you for your message! ✨ We appreciate you reaching out to us. Our team will review your inquiry and get back to you soon.';
        type = 'goodbye';
        responseSender = 'system';
        break;
      default:
        response = "👋 Welcome back! How can I assist you today?";
        type = 'greeting';
    }

    if (response) {
      const newMessage: Message = {
        id: Date.now(),
        text: response,
        sender: responseSender,
        type,
        ...(options.length > 0 && { options }),
        ...(inputType && { inputType }),
        ...(field && { field }),
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

  const startNewQuote = () => {
    // Keep history; append a divider and restart questions
    setFormData({
      name: '',
      email: '',
      projectType: '',
      projectDetails: '',
      audience: '',
      features: '',
      content: '',
      integrations: '',
      platform: '',
      design: '',
      budget: '',
      timeline: '',
      phoneNumber: ''
    });
    setMessages(prev => [
      ...prev,
      { id: Date.now(), text: '— New quote started —', sender: 'system', type: 'greeting' },
      { id: Date.now() + 1, text: "👋 Hello! I'm Frooxi's assistant. I'm here to help you with your project. May I know your name?", sender: 'bot', type: 'name' }
    ]);
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
              {message.sender === 'system' && message.type === 'goodbye' ? (
                <div className="w-full flex flex-col items-center space-y-2">
                  <div className="max-w-[90%] bg-gray-50 text-center text-gray-600 text-xs py-4 border border-gray-100 rounded-lg mx-auto shadow-sm px-4">
                    {message.text}
                  </div>
                  <button
                    type="button"
                    onClick={startNewQuote}
                    className="border border-gray-300 text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-50 text-sm"
                  >
                    New quote
                  </button>
                </div>
              ) : message.sender === 'system' ? (
                <div className="w-full flex justify-center">
                  <div className="max-w-[90%] bg-gray-50 text-center text-gray-600 text-xs py-4 border border-gray-100 rounded-lg mx-auto shadow-sm px-4">
                    {message.text}
                  </div>
                </div>
              ) : (
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-[#60FCC4] text-black rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {message.text}
                </div>
              )}
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
