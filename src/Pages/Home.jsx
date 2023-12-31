import { Box, Grid, Typography} from "@mui/material";
import Banner from "../Components/Banner"
import CardCategory from "../Components/CardCategory";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardProduct from "../Components/CardProduct"

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

    // Banner
    const bannerInfo = {
        titulo: "J/N Products",
        imagen: ""
    }

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

    // Productos destacados
    const productos = [
        {
            nombre:"Band M7",
            imagen:["/src/assets/Productos/Band m7/1.png",
            "/src/assets/Productos/Band m7/2.png"],
            descripcion:"",
            precio:'55.900'
        },
        {
            nombre:"Audifonos Inpods 12",
            imagen:["/src/assets/Productos/Audifonos Inpods/1.png",
            "/src/assets/Productos/Audifonos Inpods/2.png",
            "/src/assets/Productos/Audifonos Inpods/3.png"],
            precio:'40.000'
        },
        {
            nombre:"Organizador Zapatero",
            imagen:["/src/assets/Productos/Zapatera/1.png",
            "/src/assets/Productos/Zapatera/2.png",
            "/src/assets/Productos/Zapatera/3.png",
            "/src/assets/Productos/Zapatera/4.png"],
            precio:'81.900'
        },
        {
            nombre:"Audifonos I12",
            imagen:["/src/assets/Productos/Audifonos 2/1.png"],
            precio:'55.000'
        }
    ]

    return (
        <Box maxWidth='xl'
        sx={{ mb:10}}
        style={{ width: '100%' }}
        >
           
           <Banner props={bannerInfo}/>

            {/*- - Categorias - -*/}
            <Grid container 
            sx={{
                padding: 0,
                marginBottom: 3,
                ml:0,
                mr:0
              }}
            >
                {/*- - Categorias - -*/}
                <Grid item xs={12} sx={{boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)'}}>
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
                                <Box key={i} sx={{ margin: 2 }}>
                                    <CardCategory key={i} datos={info} />
                                </Box>
                            ))}
                        </Carousel>
                    </Box>
                </Grid>

                {/*- - Destacados - -*/}
                <Grid item xs={12}>
                    <Box sx={{ marginBottom: 3 }}>
                        <Typography
                            variant="h1"
                            color="secondary"
                            sx={{ fontSize: 30, margin: 2, textAlign: "center",fontFamily: 'monospace',
                            fontWeight: 700,
                            textDecoration: 'none'}}
                        >
                            Destacados
                        </Typography>

                        <Carousel showDots={false} responsive={responsive}>
                            {productos.map((info, i) => (
                                <Box key={i} sx={{ margin: 2 }}>
                                    <CardProduct key={i} product={info}
                                    />
                                </Box>
                            ))}
                        </Carousel>
                        
                    </Box>
                </Grid>
                
            </Grid>
        </Box>
    )
}