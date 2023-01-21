import { Container } from '@mui/material';
import Header from './header/index';
import Body from './body/index';
import Footer from './footer/index';
import './index.css';

function Index() {
  return (
    <div className="">
      <Container sx={{ height: '100vh' }}>
          <Header />
          <Body />
          <Footer />        
      </Container>
      
    </div>
  );
}

export default Index;