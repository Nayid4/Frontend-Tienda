/* eslint-disable react/prop-types */
import {} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function CardCategory({ datos }) {
    const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, minHeight: 280
        ,boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.6)'
        ,borderRadius:10
         }}
         onClick={() => navigate(datos.path)}>
      <CardActionArea>
        
        <CardContent sx={{minHeight:200,display: 'flex',
          justifyContent: 'center',alignItems: 'center',}}>
            <Avatar
                alt={datos.titulo}
                src={datos.imagen}
                style={{
                    width: '50%',
                    height: '50%',
                    borderRadius:0 // Para hacerlo circular
                }}
            />
        </CardContent>

        <CardContent >
          <Typography gutterBottom variant="h5" component="div" color="black" sx={{ textAlign: 'center' }}>
            {datos.titulo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
