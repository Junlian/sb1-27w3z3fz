import { useState } from 'react';
import { IconButton, Menu, MenuItem, Badge } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';

const HistoryButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleMenu}
        size="small"
        aria-controls="history-menu"
        aria-haspopup="true"
      >
        <Badge badgeContent={3} color="primary">
          <HistoryIcon />
        </Badge>
      </IconButton>
      <Menu
        id="history-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Recent Search 1</MenuItem>
        <MenuItem onClick={handleClose}>Recent Search 2</MenuItem>
        <MenuItem onClick={handleClose}>Recent Search 3</MenuItem>
        <MenuItem onClick={handleClose}>View All History</MenuItem>
      </Menu>
    </>
  );
};

export default HistoryButton;