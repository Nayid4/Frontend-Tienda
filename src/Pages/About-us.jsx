/* eslint-disable no-unused-vars */
import { Box, Grid, Typography, Link, IconButton, Container } from "@mui/material";
import React from "react";
import Banner from "../Components/Banner";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Cambié TwitterIcon por WhatsAppIcon
import InstagramIcon from "@mui/icons-material/Instagram";

export default function About() {
  // Banner
  const bannerInfo = {
    titulo: "Sobre Nosotros",
    imagen: "/ruta/de/imagen/banner.jpg", // Agrega la ruta de la imagen del banner
  };

  return (
    <Box>
      <Banner props={bannerInfo} />

      <Container maxWidth="lg">
        <Grid container spacing={5} sx={{ 
            marginTop: 4, 
            mb: 5,
            display: "flex",
            justifyContent: "center"
        }}>
            <Grid item xs={12} md={5}>
                <Box sx={{ boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.6)', borderRadius: 10, padding: 5 }}>
                    <Typography variant="h4" sx={{ textAlign: "center" }}>
                        J/N Products
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                        J/N Products es tu tienda en línea de confianza para encontrar una
                        amplia variedad de productos de alta calidad. Nos enorgullece
                        ofrecerte productos de las categorías de hogar, tecnología, moda y
                        accesorios.
                    </Typography>
                    <Typography>
                    Explora nuestro sitio y descubre lo que J/N Products tiene para ofrecerte. Te damos 
                    la bienvenida a un mundo de posibilidades y esperamos ser tu destino favorito para 
                    encontrar productos emocionantes y de alta calidad.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={5}>
                <Box sx={{ boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.6)', borderRadius: 10, padding: 5 }}>
                    <Typography variant="h4" sx={{ textAlign: "center" }}>
                        Contacto
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                        ¡Estamos aquí para ayudarte en lo que necesites! Contáctanos a
                        través de nuestros canales de comunicación:
                    </Typography>
                    <Typography sx={{ textAlign: "center", marginTop: 2 }}>
                        Email: <Link href="mailto:jnproducts04@gmail.com" color="secondary">
                            jnproducts04@gmail.com
                        </Link>
                    </Typography>
                    <Typography sx={{ textAlign: "center" }}>
                        Teléfono: <Link href="tel:+573006026230" color="secondary">
                            +57 300 602 6230
                        </Link>
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: "center", marginTop: 2 }}>
                        Síguenos en nuestras redes sociales:
                    </Typography>
                    <Box
                        sx={{
                            textAlign: "center",
                            marginTop: 2,
                            "& .MuiIconButton-root": {
                                margin: "0 10px",
                                padding: "8px",
                                backgroundColor: "rgba(0, 0, 0, 0.05)",
                                borderRadius: "50%",
                                "&:hover": {
                                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                                },
                            },
                        }}
                    >
                        <IconButton
                            aria-label="Facebook"
                            href="https://web.facebook.com/profile.php?id=61551109985885"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FacebookIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            aria-label="WhatsApp" // Cambié "Twitter" por "WhatsApp"
                            href="https://wa.me/message/ND6PAZRENCLFD1?src=qr" // Reemplaza con tu enlace de WhatsApp
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsAppIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            aria-label="Instagram"
                            href="https://www.instagram.com/jnproducts04/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon fontSize="large" />
                        </IconButton>
                    </Box>
                </Box>
            </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
