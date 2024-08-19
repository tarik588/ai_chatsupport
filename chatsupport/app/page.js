'use client';
import React, { useState } from 'react';
import { Box, TextField, IconButton, List, ListItem, ListItemText, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatBox = () => {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');
        }
    };

    return (
        <Paper sx={{ width: '400px', height: '500px', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto' }}>
                <List>
                    {messages.map((message, index) => (
                        <ListItem key={index}>
                            <ListItemText 
                                primary={message.text} 
                                align={message.sender === 'user' ? 'right' : 'left'} 
                                sx={{ background: message.sender === 'user' ? '#e3f2fd' : '#fff' }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box sx={{ p: 2, borderTop: '1px solid #ddd' }}>
                <Box sx={{ display: 'flex' }}>
                    <TextField
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        variant="outlined"
                        placeholder="Type a message..."
                        fullWidth
                    />
                    <IconButton color="primary" onClick={handleSend}>
                        <SendIcon />
                    </IconButton>
                </Box>
            </Box>
        </Paper>
    );
};

export default ChatBox;
