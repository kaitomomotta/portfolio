import "./App.css";
import {styled} from "@mui/system";

const UpBox = styled('div')({
    paddingTop: '12rem'
})

function App() {
    return (
        <>
            <UpBox/>
            <div className="columns">
                <div className="column is-half">First column</div>
                <div className="column">Second column</div>
                <div className="column">Third column</div>
            </div>
        </>
    );
}

export default App;