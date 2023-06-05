import React, {useState, useEffect, useContext} from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    MDBRow,
    MDBCol,
} from "mdb-react-ui-kit";
import {ProductContext} from '../context/product-context'
import Cards from '../components/Cards'

const theme = createTheme();

export default function Album() {
    const{products} = useContext(ProductContext)
    const [search,setSearch] = useState('')
    console.log(search)

    //Filter products array by category of collection
    const filteredProducts = products.filter(product => {
        return (
            product.category !== "RTF Drone" && product.category !== 'base'
        )
    })
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="lg">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="left"
                            color="text.primary"
                            gutterBottom
                        >
                            FlexDrone
                        </Typography>
                        <Typography variant="h5" align="left" color="text.secondary" paragraph>
                            Browse Components and Parts
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '50ch',mb:4 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e)=> setSearch(e.target.value)}/>
                        </Box>
                            <MDBRow>

                                {products.filter(item => {
                                    return search.toLowerCase() === ''
                                        ? item : item.name.toLowerCase().includes(search)
                                }).filter(items=> {
                                    return (
                                        items.category !== "RTF Drone" && items.category !== 'base'
                                    )
                                }).map((product) => (
                                    <MDBCol md="12" lg="4" className="mb-4 mb-lg-0" key={product.name} >
                                        <Cards key={product.product_id} product={product}/>
                                    </MDBCol>
                                ))}
                            </MDBRow>
                    </Container>
                </Box>
        </ThemeProvider>
    );
}

