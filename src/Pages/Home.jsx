import { Avatar, Box, Container, Grid, Typography} from "@mui/material";
import Banner from "../assets/Logo/Banner.png"
import CardCategory from "../Components/CardCategory";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home(){

    // Responsive del carusel de las categorias
    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 3,
        slidesToSlide: 2,
        },
        desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 3,
        },
        tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        },
    };

    const categorias = [
        {
            titulo:"Hogar",
            imagen:"./Hogar-1.jpg"
        },
        {
            titulo:"Tecnologia",
            imagen:"./Teconlogia-1.jpg"
        },
        {
            titulo:"Moda",
            imagen:"./Moda-1.jpg"
        },
        {
            titulo:"Hogar",
            imagen:"./Accesorios-1.jpg"
        }
    ]

    return (
        <Box maxWidth='xl'
        sx={{mt:8, mb:10}}
        style={{ width: '100%' }}
        >
            {/*- - Imagen del banner - -*/}
            <Avatar
                alt="Mi Imagen"
                src={Banner}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius:0 // Para hacerlo circular
                }}
            />
            
            {/*- - Categorias - -*/}
            <Grid Container maxWidth='xl'
            sx={{
                padding: 5,
                marginBottom: 3,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', // Agregar sombra en el borde inferior
              }}
            >
                <Grid item xs={12}>
                    <Box sx={{ marginBottom: 3 }}>
                        <Typography
                            variant="h1"
                            color="secondary"
                            sx={{ fontSize: 30, margin: 2, textAlign: "center",fontFamily: 'monospace',
                            fontWeight: 700,
                            textDecoration: 'none'}}
                        >
                            Categorias
                        </Typography>
                        <Carousel showDots={false} responsive={responsive}>
                            {categorias.map((info, i) => (
                            <CardCategory key={i} datos={info} />
                            
                            ))}
                        </Carousel>
                    </Box>
                </Grid>
                
            </Grid>
        </Box>
    )
}