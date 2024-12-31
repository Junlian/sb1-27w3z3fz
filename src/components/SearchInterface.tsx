import { useState } from 'react';
import { TextField, IconButton, Box, Paper } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import UploadManager from './Upload/UploadManager';
import { SearchFilters } from '../types';

interface SearchInterfaceProps {
  onSearch: (query: string, filters: SearchFilters) => Promise<void>;
}

const SearchInterface: React.FC<SearchInterfaceProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);

  const handleSearch = async () => {
    await onSearch(query, filters);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Paper elevation={1} sx={{ p: 2 }}>
        <TextField
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search papers or ask research questions..."
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setIsAdvancedMode(!isAdvancedMode)}>
                <TuneIcon />
              </IconButton>
            ),
          }}
        />
      </Paper>
      <UploadManager />
    </Box>
  );
};

export default SearchInterface;