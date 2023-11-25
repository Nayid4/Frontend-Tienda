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
  AppBar,
  Container,
  Toolbar,
  Avatar,
  Link,
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

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  
    // Categorias de productos
    const categorias = [
        {
            titulo: "Hogar",
            imagen: "/src/assets/Categorias/Hogar-1.jpg",
            path: "/Hogar"
        },
        {
            titulo: "Tecnologia",
            imagen: "/src/assets/Categorias/Tecnologia-1.jpg",
            path: "/Tecnologia"
        },
        {
            titulo: "Moda",
            imagen: "/src/assets/Categorias/Moda-1.jpg",
            path: "/Moda"
        },
        {
            titulo: "Accesorios",
            imagen: "/src/assets/Categorias/Accesorios-1.jpg",
            path: "/Accesorios"
        }
    ]

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
            <Link  href="/" underline="none" sx={{mr: 1, }}>
                <Avatar
                    alt="Mi Imagen"
                    src={Logo}
                    style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%', // Para hacerlo circular
                    }}
                />
            </Link>
    
            
  
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
                    page.titulo === "Categorias" ? (
                        <Box key={page.titulo}>
                            <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            color="secondary"
                            onClick={handleClick}
                            >
                            {page.titulo}
                            </Button>
                            <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            >
                            {categorias.map((cat, index)=> 
                                <MenuItem key={index} onClick={() => navigate(cat.path)}>{cat.titulo}</MenuItem>
                            )}
                            </Menu>
                        </Box>
                    ):(
                        <Button key={page.titulo} sx={{color:"black"}} onClick={() => navigate(page.path)}>
                            {page.titulo}
                        </Button>
                    )
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
            <Box sx={{ flexGrow: 1, justifyContent: 'flex-start', display: { xs: 'none', md: 'flex' } }}>
            {ListaMenu.map((page) => (
                page.titulo === "Categorias" ? (
                <Box key={page.titulo} sx={{mt:2}}>
                    <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    color="secondary"
                    onClick={handleClick}
                    >
                    {page.titulo}
                    </Button>
                    <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    >
                    {categorias.map((cat, index)=> 
                        <MenuItem key={index} onClick={() => navigate(cat.path)}>{cat.titulo}</MenuItem>
                    )}
                    </Menu>
                </Box>
                ) : (
                <Button
                    key={page.path}
                    onClick={() => navigate(page.path)}
                    sx={{
                    transition: "0.2s",
                    "&:hover": { transform: "scale(1.05)" },
                    my: 2,
                    color: 'black',
                    display: 'block'
                    }}
                >
                    {page.titulo}
                </Button>
                )
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
