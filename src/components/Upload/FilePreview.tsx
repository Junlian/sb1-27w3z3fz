import { Box, IconButton, Typography, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import { FileWithPreview } from '../../types';

interface FilePreviewProps {
  file: FileWithPreview;
  onRemove: (file: FileWithPreview) => void;
}

const FilePreview: React.FC<FilePreviewProps> = ({ file, onRemove }) => {
  return (
    <Paper 
      sx={{ 
        p: 2, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2 
      }}
    >
      <DescriptionIcon color="primary" />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="body2" noWrap>{file.name}</Typography>
        <Typography variant="caption" color="text.secondary">
          {(file.size / 1024 / 1024).toFixed(2)} MB
        </Typography>
      </Box>
      <IconButton 
        size="small" 
        onClick={() => onRemove(file)}
        aria-label="remove file"
      >
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
};

export default FilePreview;