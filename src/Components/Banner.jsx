/* eslint-disable react/prop-types */
import { Avatar, Box, Typography } from "@mui/material";
import Imagen from "../assets/Logo/Banner.png"

// eslint-disable-next-line no-unused-vars
export default function Banner({props}){

    return (
        <Box
            sx={{
                width: "100%",
                position: "relative",
                overflow: "hidden",
                "&::after": {
                    content: '""',
                    display: "block",
                    // Media query para cambiar paddingBottom en dispositivos móviles
                    "@media (max-width: 768px)": {
                    pt:25,
                    paddingBottom: "26.25%", // Mantiene este valor en dispositivos móviles
                    },
                    "@media (min-width: 769px)": {
                    paddingBottom: "30.25%", // Cambia a este valor en pantallas más grandes (PC)
                    },
                },
                }}
        >
            <Avatar
            alt="Mi Imagen"
            src={Imagen}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                objectFit: "cover",
                borderRadius:0
            }}
            />
            <Typography
            variant="h1"
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                fontSize: "10vw", // Tamaño de fuente relativo al ancho de la pantalla
                fontWeight: "bold", // Aumenta el grosor de las letras
                whiteSpace: "nowrap", // Evita que las palabras se separen
                transform: "translate(-50%, -50%)", // Centra vertical y horizontalmente
                zIndex: 1, // Asegura que el texto esté encima de la imagen
                color: "white", // Color del texto
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Sombra de texto
            }}
            >
            {props.titulo}
            </Typography>
        </Box>
    )
}