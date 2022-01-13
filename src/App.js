import { Navbar } from './Components/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Header from './Components/Header/Header'
import { useEffect, useState } from 'react'

function App() {
    const [title, setTitle] = useState(null)
    const location = useLocation()
    useEffect(() => {
        const parsedTitle = location.pathname.replace(/\W/g, ' ')
        setTitle(parsedTitle)
    }, [location])
    return (
        <Grid container={true}>
            <Navbar />
            <Header title={title} />
            <Outlet />
        </Grid>
    )
}

export default App
