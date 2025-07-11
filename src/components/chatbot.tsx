'use client';

import {
  chatbotAssistant,
  type ChatbotAssistantOutput,
} from '@/ai/flows/chatbot-assistant';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Bot, Send, User, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! How can I help you learn about ConcernConnect today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => scrollToBottom(), 100);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const response: ChatbotAssistantOutput = await chatbotAssistant({
        query: currentInput,
      });
      const assistantMessage: Message = {
        role: 'assistant',
        content: response.answer,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error with chatbot:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content:
          "I'm sorry, I'm having trouble connecting right now. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className={cn(
          'fixed bottom-4 right-4 z-50 transition-transform duration-300 ease-in-out',
          isOpen ? 'scale-0' : 'scale-100'
        )}
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="h-16 w-16 animate-pulse rounded-full shadow-lg"
        >
          <Bot className="h-8 w-8" />
          <span className="sr-only">Open Chatbot</span>
        </Button>
      </div>

      <div
        className={cn(
          'fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm transition-all duration-300 ease-in-out',
          isOpen
            ? 'transform-none opacity-100'
            : 'pointer-events-none translate-y-16 opacity-0'
        )}
      >
        <Card className="flex h-[600px] flex-col rounded-xl shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <Bot />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="font-headline text-lg">
                  AI Assistant
                </CardTitle>
                <CardDescription>
                  FAQs about our mission & more
                </CardDescription>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close Chatbot</span>
            </Button>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col p-0">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-end gap-2',
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {message.role === 'assistant' && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot size={20} />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        'max-w-[80%] break-words rounded-lg px-3 py-2',
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    {message.role === 'user' && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          <User size={20} />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-end justify-start gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot size={20} />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex items-center space-x-1 rounded-lg bg-muted px-3 py-2">
                      <span
                        className="h-1.5 w-1.5 animate-pulse rounded-full bg-foreground/50 "
                        style={{ animationDelay: '0s' }}
                      ></span>
                      <span
                        className="h-1.5 w-1.5 animate-pulse rounded-full bg-foreground/50 "
                        style={{ animationDelay: '0.2s' }}
                      ></span>
                      <span
                        className="h-1.5 w-1.5 animate-pulse rounded-full bg-foreground/50 "
                        style={{ animationDelay: '0.4s' }}
                      ></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            <div className="rounded-b-xl border-t bg-background/95 p-4">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
