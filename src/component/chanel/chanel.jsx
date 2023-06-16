import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { useEffect,useState } from "react"
import { ApiService } from "../../service/api.service"
import ChannelCard from "../channelcard/channelcard"
import { Videos } from ".."

const  Chanel = () => {
  const[chanelDetail, setChanelDetail] = useState()
  const[chanelVideo, setChanelVideo] = useState([])

  const {id} = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`channels?part=snippet,statistics&id=${id}`)
        setChanelDetail(data.items[0])
        const chanelData = await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
        setChanelVideo(chanelData?.items)
        
      } catch (error) {
        console.log(error)
      }
      
    }
    getData()
  },[id])


  if(!chanelDetail) return null
  
  return (
      <Box minHeight={"95vh"} mt={"1vh"}>

        <Box 
        width= {"100%"}
        height ={"200px"}
        zIndex={10}
          sx={{
            backgroundImage : `url(${chanelDetail.brandingSettings.image.bannerExternalUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit : "cover",
            backgroundRepeat : "no-repeat",
            
            
            
            }}/>

          <ChannelCard video = {chanelDetail} marginTop = {"-100px"} />

        
        <Box mt={10} >
          
            <Videos videos = {chanelVideo}/>
          
          </Box>
      </Box>
      )

}

export default Chanel