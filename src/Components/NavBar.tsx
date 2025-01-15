import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavBar() {
    return (
        <Box sx={{ width: '100%' }}>
            <AppBar
                position="absolute"
                sx={{
                    width: '100%',
                    backgroundColor: '#007bff',
                    top: 0,
                    left: 0,
                    zIndex: 1000,
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            fontSize: '4rem',
                            position: 'absolute',
                            flexGrow: 1,
                            fontWeight: 'bold',
                            fontFamily: 'Inter, Arial, sans-serif',
                            color: '#fff',
                            marginLeft: '15%',
                            marginTop: '3%',
                            textAlign: 'start',
                            textShadow: '2px 2px 4px #000',
                        }}
                    >
                        Zoo Inventory
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
