import {} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary:{
      main: "#000000"
    },
    third:{
      main:"#D9D9D9"
    },
    fourth:{
      main: "#1A1C22"
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>
)
