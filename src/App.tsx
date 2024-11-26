import "./App.css";
import {styled} from "@mui/system";
import Columns from "./components/Columns.tsx";
import {useEffect, useState} from "react";

const UpBox = styled('div')({
    paddingTop: '12rem'
})

function App() {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <UpBox/>
            <Columns isMobile={isMobile}/>
        </>
    );
}

export default App;