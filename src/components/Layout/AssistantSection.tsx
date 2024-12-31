import { Box } from '@mui/material';
import AIAssistant from '../AIAssistant';

const AssistantSection: React.FC = () => {
  return (
    <Box sx={{ flex: 1, minHeight: 0 }}>
      <AIAssistant />
    </Box>
  );
};

export default AssistantSection;