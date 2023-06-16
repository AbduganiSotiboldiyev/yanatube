// import { Link } from "react-router-dom"
import {useEffect, useState} from "react"
import {Box, Container, Stack, Typography } from "@mui/material"
import {colors} from "../constants/color"
import { Category, Videos } from "../"
import { ApiService } from "../../service/api.service"

const Main = () => {
  const [selectedCategory,setSelectedCategory] = useState("New")
  const[video,setVideo] = useState([])
  

  const selectedCategoryHandle = (category) => {
    setSelectedCategory(category)
  }

  useEffect(() =>{
    const getData = async () => {
    try {
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
        setVideo(data.items)
      } catch (error){
        console.log(error)

      }


    }
    getData(getData)
    // ApiService.fetching('search').then(data => setVideo(data.items))

  },[selectedCategory])

 

    return (
      
        <Stack>
          <Category selectedCategoryHandle={selectedCategoryHandle} selectedCategory={selectedCategory}  />
          <Box p={2} sx={{height : "90vh"}}>
            <Container maxWidth={"90%"}>
              <Typography variant={"h4"} fontWeight={"bold"} mb={2} textTransform={"capitalize"}>
                {selectedCategory} <span style={{color : colors.secondary}}>video</span>
              </Typography>

              <Videos videos = {video}/>
            </Container>

          </Box>
            
        </Stack>
        )
   
}

export default Main