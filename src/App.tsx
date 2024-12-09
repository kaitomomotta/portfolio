import "./App.css";
import { styled, ThemeProvider } from "@mui/system";
import AllColumns from "./components/AllColumns.tsx";
import theme from "./assets/theme.ts";
import {useEffect, useState} from "react";

const UpBox = styled("div")({
  paddingTop: "12rem",
});

function App() {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 950);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
          <ThemeProvider theme={theme}>
            <UpBox/>
            <AllColumns isMobile={isMobile} />
          </ThemeProvider>
        </>
    );
}

export default App;
