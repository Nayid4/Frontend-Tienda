/* eslint-disable react/prop-types */
import { Avatar, Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

// Responsive del carusel de trabajadores
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 1,
    
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


// Funcion que retorna la carta de la habitacion
export default function CardProuct({product}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };


  return (
    
    <Card sx={{maxWidth: 345, minHeight: 280
        ,boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.2)'
        ,borderRadius:10
         }}>
      <Carousel showDots={true} responsive={responsive}>
        {product.imagen.map((i, index) => (
          
            <Avatar
                key={index}
                src={i}
                style={{
                    width: '100%',
                    height: '270px',
                    borderRadius:0 // Para hacerlo circular
                }}
            />
          
        ))}
      </Carousel>
      <CardContent >
        {/*- - Nombre se la habitacion - -*/}
        <Typography gutterBottom variant="h5" component="div">
          {product.nombre}
        </Typography>

      </CardContent>

      
      <CardActions>
        
        {/*- - Precio - -*/}
        <Box sx={{display:"flex", flexGrow:1,color: "black" }}>
          <p>Precio: ${product.precio} COP</p>
        </Box>

        {/*- - Boton de comprar - -*/}
        <Button color="third" sx={{display:"flex", flexGrow:0,mr:1}} variant="contained" onClick={handleClick}>
          Comprar
        </Button>
      </CardActions>
    </Card>
    
    
  );
}
