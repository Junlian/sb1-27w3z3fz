import { useState } from 'react';
import { Box, Button } from '@mui/material';
import FileUploadZone from './FileUploadZone';
import FilePreview from './FilePreview';
import { FileWithPreview } from '../../types';

const UploadManager: React.FC = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const handleFilesAccepted = (newFiles: FileWithPreview[]) => {
    setFiles(prev => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (fileToRemove: FileWithPreview) => {
    setFiles(prev => prev.filter(file => file !== fileToRemove));
    URL.revokeObjectURL(fileToRemove.preview);
  };

  const handleUpload = async () => {
    // TODO: Implement file upload logic
    console.log('Uploading files:', files);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <FileUploadZone onFilesAccepted={handleFilesAccepted} />
      
      {files.length > 0 && (
        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
          {files.map((file) => (
            <FilePreview
              key={file.name}
              file={file}
              onRemove={handleRemoveFile}
            />
          ))}
          <Button 
            variant="contained" 
            onClick={handleUpload}
            sx={{ mt: 1 }}
          >
            Upload {files.length} file{files.length !== 1 ? 's' : ''}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default UploadManager;