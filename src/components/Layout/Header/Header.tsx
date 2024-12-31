import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import ProfileButton from './ProfileButton';
import HistoryButton from './HistoryButton';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Research Assistant
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <HistoryButton />
          <ProfileButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;