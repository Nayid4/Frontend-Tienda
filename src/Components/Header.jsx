/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Logo from "../assets/Logo/Logo-1.png";
import {
  Button,
  MenuItem,
  Menu,
  IconButton,
  Box,
  Typography,
  AppBar,
  Container,
  Toolbar,
  Avatar,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import IconButtom from "./IconButtom";

export default function Header({auth, cambiarEstadoAuth }){

    // Lista que contiene los titulos del header
  const ListaMenu = [
    {
      titulo:"Inicio",
      path:"/"
    },
    {
      titulo:"Categorias",
      path:"/categories"
    },
    {
      titulo:"Sobre Nosotros",
      path:"/about-us"
    }
  ];

    const [anchorElNav, setAnchorElNav] = useState(null);
  

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const navigate = useNavigate();
  
    const menu = [
      {
        titulo:"Perfil",
        path:"/profile",
      },
      {
        titulo:"Reservas",
        path:"/your-booking",
      },
      {
        titulo:"Cerrar Sesion",
        path:"Cerrar",
      }
    ];
  
    return (
      <AppBar color="third" sx={{
        backdropFilter:'blur(5px) saturate(131%)',
        WebkitBackdropFilter: 'blur(5px) saturate(131%)',
        backgroundColor: 'white',
        borderRadius: '0px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.125)'
      }}>
        <Container maxWidth="x1" color="inherit"> 
          <Toolbar disableGutters>
            {/*- - Icono Responsive - - */}
            {/*<Link to="/" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
              <img className="logo-main" src={Logo} alt="" />
    </Link>*/}
            <Avatar
                alt="Mi Imagen"
                src={Logo}
                style={{
                    width: '70px',
                    height: '70px',
                    marginRight:'10px' ,
                    borderRadius: '50%', // Para hacerlo circular
                }}
            />
  
            {/*- - Menu Responsive - -*/}
            <Box sx={{ justifyContent: 'flex-end',flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {auth.auth === true ? (
              <IconButtom menu= {menu} auth = {auth} cambiarEstadoAuth={cambiarEstadoAuth}/>
            ) : (
              null
            )}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/*- - Generamos los botones del menu - -*/}
                {ListaMenu.map((page) => (
                  <MenuItem key={page.titulo} onClick={() => navigate(page.path)}>
                    <Typography textAlign="center">{page.titulo}</Typography>
                  </MenuItem>
                ))}
  
                {/*- - Si no se ha iniciado sesion generamos los botones de registro - -*/}
                
                {auth.auth === false ? (
                <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)' }}>
                  {/*- - Boton Iniciar sesion - -*/}
                  <Button
                    key={98}
                    className="hover:text-violet-900"
                    sx={{color:"black"}}
                    onClick={() => navigate("/sign-in")}
                  >
                    Iniciar Sesion
                  </Button>
  
                  {/* Botón Registrar */}
                  <Button
                    key={97}
                    sx={{bgcolor:"#D9D9D9"}}
                    variant="contained"
                    onClick={() => navigate("/sign-up")}
                    
                  >
                    Registrarse
                  </Button>
                </Box>
              ):(
              null
              )}
              </Menu>
            </Box>
  
  
            {/*- - Generamos los botones del encabezado - -*/}
            <Box sx={{ flexGrow: 1,justifyContent: 'flex-start', display: { xs: 'none', md: 'flex' } }}>
              {ListaMenu.map((page) => (
                <Button
                  key={page.path}
                  onClick={() => navigate(page.path)}
                  sx={{ transition: "0.2s",
                  "&:hover": { transform: "scale(1.05)"},my: 2, color: 'black', display: 'block' }}
                >
                  {page.titulo}
                </Button>
              ))}
            </Box>
  
            {/*- - Ponemos los botones de registro o avatar del usuario - -*/}
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }}}>
              {/*- - Botones de Login y Registro de usuario - -*/}
              {auth.auth === false ? (
                <Box sx={{alignItems: 'flex-start'}}>
                  {/*- - Boton Iniciar sesion - -*/}
                  
                  <Button
                    key={96}
                    onClick={() => navigate("/sign-in")}
                    sx={{ transition: "0.2s",
                    "&:hover": { transform: "scale(1.05)"},my: 2, color: 'black', m:1 }}
                    >
                    Iniciar Sesion
                  </Button>
  
                  {/* Botón Registrar */}
                  <Button
                    key={95}
                    variant="contained"
                    onClick={() => navigate("/sign-up")}
                    sx={{
                        bgcolor:"#D9D9D9"
                      ,transition: "0.2s",
                      "&:hover": { transform: "scale(1.05)"},borderRadius:"10px"
                    }}
                  >
                    Registrarse
                  </Button>
                </Box>
              ) : null}
            </Box>
            
          </Toolbar>
        </Container>
      </AppBar>)
}
