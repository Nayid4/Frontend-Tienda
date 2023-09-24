import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material'
import Hogar from "../assets/Categorias/Hogar-1.jpg" 



export default function CardCategory({datos}) {

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Hogar}
          alt={datos.titulo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="black" sx={{textAlign:'center',}}>
            {datos.titulo}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}