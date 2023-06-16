
import { Link } from "react-router-dom"
import { Box, Stack } from "@mui/material"
import{SearchBar} from "../"

import {colors} from "../constants/color"

const Navbar = () => {

    return(
        <Stack
         direction={"row"} 
         alignItems={"center"} 
         justifyContent={"space-between"} 
         p={2} 
         sx={{backgroundColor : colors.primary,  position : "sticky",height :"5vh",top :0, zIndex:"111" }}
         >
            <Link to={"/"}>
                <h4  height={60} style={{height : "2rem" ,color : "green",fontSize : "24px",cursor : "pointer"}} > YanaTube</h4>

            </Link>
                
            <SearchBar/> 
            <Box/>
        </Stack>
    )
}

export default Navbar