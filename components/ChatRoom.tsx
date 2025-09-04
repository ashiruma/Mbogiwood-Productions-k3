// components/ChatRoom.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

type Message = {
    user: string;
    message: string;
};

export default function ChatRoom({ roomName }: { roomName: string }) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const socketRef = useRef<WebSocket | null>(null);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Establish WebSocket connection
        const socket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${roomName}/`);
        socketRef.current = socket;

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, data]);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        // Clean up the connection when the component unmounts
        return () => {
            socket.close();
        };
    }, [roomName]);

    // Auto-scroll to the latest message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = () => {
        if (inputMessage.trim() && socketRef.current?.readyState === WebSocket.OPEN) {
            socketRef.current.send(JSON.stringify({ 'message': inputMessage }));
            setInputMessage('');
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>Community Live Chat</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className="flex flex-col">
                        <p className="font-bold text-sm text-primary">{msg.user}</p>
                        <p className="text-foreground">{msg.message}</p>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </CardContent>
            <div className="p-4 border-t border-border flex gap-2">
                <Input
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <Button onClick={sendMessage}><Send className="w-4 h-4" /></Button>
            </div>
        </Card>
    );
}