import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { ApiService } from "../../service/api.service"
import { Container,Box,Typography } from "@mui/material"
import { Videos } from "../"
import {colors} from "../constants/color"
const Search =  () => {
    const [videos,setVideo] =useState([])
    const {id} = useParams()
    
    
    useEffect(() =>{
      const getData = async () =>{
        try {
          const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
          setVideo(data.items)
        } catch (error) {
          console.log(error)
        }
      }

      getData()
    },[id])

    


    return (
         <Box p={2} sx={{height : "90vh", }}>
            <Container sx={{maxWidth: "90%"}} >
                <Typography fontSize={"36px"} fontWeight={"bold"} variant="h4" mb={2}>
                    Search for <span style={{color : colors.secondary}} >{id}</span> videos
                </Typography>
                <Videos videos={videos}/>
            </Container>
        
        </Box>

    )
}

export default Search