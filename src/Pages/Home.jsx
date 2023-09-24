import { Avatar, Box} from "@mui/material";
import Banner from "../assets/Logo/Banner.png"

export default function Home(){


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
            
        </Box>
    )
}