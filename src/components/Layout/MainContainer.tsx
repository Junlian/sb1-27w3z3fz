import { Container, ContainerProps } from '@mui/material';
import Header from './Header/Header';

interface MainContainerProps extends ContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children, ...props }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 3,
        px: { xs: 2, sm: 3 },
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
      {...props}
    >
      <Header />
      {children}
    </Container>
  );
};

export default MainContainer;