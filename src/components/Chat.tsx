"use client"
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { ChatResponse, UIAction } from '@/lib/llmResponseParser';

type Message = {
  role: 'user' | 'assistant (you)';
  content: string;
  data?: ChatResponse;
};

export function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant (you)',
          content: "Hey! 👋 I'm Mahesh, a Full Stack Developer. I'd love to chat about web development, my projects, or answer any questions you have!"
        }
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen, messages]);

  const handleActionClick = (action: UIAction) => {
    switch (action.type) {
      case 'link':
      case 'button':
        if (action.href) window.open(action.href, '_blank');
        break;
      case 'copy':
        if (action.value) {
          navigator.clipboard.writeText(action.value);
          //add toast here later :TODO
        }
        break;
    }
  };

  const renderAction = (action: UIAction, index: number) => {
    if (action.type === 'card') return null;

    return (
      <Button
        key={index}
        variant="secondary"
        size="sm"
        className="mt-2 mr-2 hover:bg-primary hover:text-primary-foreground transition-colors"
        onClick={() => handleActionClick(action)}
      >
        {action.label}
      </Button>
    );
  };

  const renderCard = (action: UIAction, index: number) => {
    if (action.type !== 'card') return null;

    return (
      <Card key={index} className="mt-3 bg-muted/50 border-primary/10 overflow-hidden">
        <div className="p-3">
          <h4 className="font-semibold text-primary">{action.label}</h4>
          {action.meta?.description && (
            <p className="text-xs text-muted-foreground mt-1 mb-2">{action.meta.description}</p>
          )}
          <div className="flex gap-2">
            {action.meta?.github && (
              <Button size="sm" variant="outline" className="h-7 text-xs" onClick={() => window.open(action.meta?.github, '_blank')}>
                GitHub
              </Button>
            )}
            {action.meta?.demo && (
              <Button size="sm" variant="outline" className="h-7 text-xs" onClick={() => window.open(action.meta?.demo, '_blank')}>
                Demo
              </Button>
            )}
          </div>
        </div>
      </Card>
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user' as const, content: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessages([...newMessages, {
          role: 'assistant (you)',
          content: data.content,
          data: data.data
        }]);
      } else {
        console.error('Chat error:', data.error);
        setMessages([...newMessages, {
          role: 'assistant (you)',
          content: "Sorry about that! Having some technical issues. Mind trying again? 🔧"
        }]);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setMessages([...newMessages, {
        role: 'assistant (you)',
        content: "Oops! Seems like my connection dropped. Could you try again? 🔌"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bg-primary"
        >
          <MessageSquare className="h-6 w-6 text-primary-foreground" />
        </Button>
      ) : (
        <Card className="w-[90vw] md:w-[380px] max-w-[380px] shadow-2xl rounded-xl border-t border-primary/20 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between p-3 sm:p-4 border-b">
            <div className="flex items-center gap-2 sm:gap-3">
              <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h3 className="font-semibold text-base sm:text-lg">Chat with Me</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-7 w-7 sm:h-8 sm:w-8 hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-3 sm:p-4">
            <div className="h-[50vh] sm:h-[400px] overflow-y-auto space-y-4 mb-4 scrollbar-thin scroll-smooth">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                >
                  <div
                    className={`rounded-2xl px-4 py-2 max-w-[85%] shadow-sm ${message.role === 'user'
                      ? 'bg-primary text-primary-foreground ml-4'
                      : 'bg-muted mr-4'
                      } ${message.role === 'user'
                        ? 'rounded-br-sm'
                        : 'rounded-bl-sm'
                      }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>

                    {/* Render UI Actions */}
                    {message.role === 'assistant (you)' && message.data?.ui_actions && (
                      <div className="mt-2 text-primary-foreground">
                        {/* Buttons & Links */}
                        <div className="flex flex-wrap">
                          {message.data.ui_actions.map((action, i) => renderAction(action, i))}
                        </div>
                        {/* Cards */}
                        <div className="flex flex-col gap-2">
                          {message.data.ui_actions.map((action, i) => renderCard(action, i))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl px-4 py-2 max-w-[85%] shadow-sm rounded-bl-sm mr-4">
                    <div className="flex gap-1 items-center">
                      <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                className="flex-1 rounded-full border bg-background px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Type your message..."
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading}
                className="rounded-full hover:scale-105 transition-transform h-9 w-9 sm:h-10 sm:w-10"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 