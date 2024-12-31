import { useState } from 'react';
import { TextField, IconButton, Typography, Paper, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState<Message[]>([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };

    setConversation(prev => [...prev, userMessage]);
    setInput('');

    // TODO: Implement API call to get assistant response
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: 'This is a placeholder response. API integration pending.',
      sender: 'assistant',
      timestamp: new Date()
    };

    setConversation(prev => [...prev, assistantMessage]);
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h6">Research Assistant</Typography>
      </Box>
      
      <Box sx={{ 
        flex: 1,
        overflowY: 'auto',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
        {conversation.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: 'flex',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'
            }}
          >
            <Paper
              elevation={1}
              sx={{
                p: 2,
                maxWidth: '80%',
                backgroundColor: message.sender === 'user' ? '#e3f2fd' : '#f5f5f5'
              }}
            >
              <Typography>{message.content}</Typography>
            </Paper>
          </Box>
        ))}
      </Box>

      <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your research..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            size="small"
          />
          <IconButton onClick={handleSend} color="primary">
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default AIAssistant;