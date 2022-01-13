import Button from '@mui/material/Button';
import {Navbar} from "./Components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Grid from '@mui/material/Grid';

function App() {
    return (
        <Grid container={true}>
            <Navbar/>
            <Outlet/>
        </Grid>
    );
}

export default App;
