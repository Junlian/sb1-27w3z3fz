import { Box } from '@mui/material';
import SearchInterface from '../SearchInterface';
import { SearchFilters } from '../../types';

interface SearchSectionProps {
  onSearch: (query: string, filters: SearchFilters) => Promise<void>;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch }) => {
  return (
    <Box sx={{ mb: 3, width: '100%' }}>
      <SearchInterface onSearch={onSearch} />
    </Box>
  );
};

export default SearchSection;