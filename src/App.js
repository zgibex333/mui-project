import Button from '@mui/material/Button';

function App() {
    return (
        <div className="App">
            <Button variant={"contained"} onClick={()=>console.log('123')}>First MUI</Button>
        </div>
    );
}

export default App;
