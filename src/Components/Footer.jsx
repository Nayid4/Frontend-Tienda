import {} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Avatar } from '@mui/material';
import Logo from "../assets/Logo/Logo-1.png";

const footerStyle = {
  backgroundColor: '#D9D9D9',
  padding: '16px 0',
  color: '#333',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
};

const logoTextStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginLeft: '8px',
};

const linksStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '16px',
};

const linkStyle = {
  margin: '0 16px',
  color: '#333',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
};

const socialIconsStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const socialIconStyle = {
  color: '#333',
  '&:hover': {
    color: '#1877f2', // Color de Facebook al pasar el cursor
  },
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container>
        <Box style={logoStyle}>
            <Avatar
                alt="Mi Imagen"
                src={Logo}
                style={{
                    width: '60px',
                    height: '60px',
                    marginRight:'10px' ,
                    borderRadius: '50%', // Para hacerlo circular
                }}
            />
          <Typography style={logoTextStyle}>J/N Products</Typography>
        </Box>
        <Box style={linksStyle}>
          <Link style={linkStyle} href="#">
            Inicio
          </Link>
          <Link style={linkStyle} href="#">
            Productos
          </Link>
          <Link style={linkStyle} href="#">
            Contacto
          </Link>
        </Box>
        <Box style={socialIconsStyle}>
          <IconButton style={socialIconStyle} href="#">
            <FacebookIcon />
          </IconButton>
          <IconButton style={socialIconStyle} href="#">
            <TwitterIcon />
          </IconButton>
          <IconButton style={socialIconStyle} href="#">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
