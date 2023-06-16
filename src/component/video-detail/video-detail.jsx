import ReactPlayer from "react-player"
import { Link, useParams } from "react-router-dom"
import "../../index.css"
import { useEffect, useState } from "react"
import { ApiService } from "../../service/api.service"
import {Box, Chip,Stack,Typography,Avatar} from "@mui/material"
import {Loader, Videos} from "../"
import { FavoriteOutlined, MarkChatRead, Tag, Visibility } from "@mui/icons-material"
import moment from "moment"

// const { Box, Chip } = require("@mui/material")

const VideoDetail = ()  => {
    const [videoDetail,setVideoDetail] = useState(null)
    const [suggestedVideos,setSuggestedVideos] = useState([])

    
    const {id} = useParams()
   
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
                setVideoDetail(data.items[0])
                const dataSuggested = await ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
                setSuggestedVideos(dataSuggested.items)
            } catch (error) {
                console.error(error)
            }
        }
        getData() 
    },[id])
    if(!videoDetail?.snippet) return <Loader/>
   
    return (
        <Box minHeight={"90vh"} mb={10} mt={2} ml={{md:10}} mr={{xs : 2}}>
            <Box display={"flex"} sx={{flexDirection : {xs : "column", md : "row"}}}>
                <Box width={{xs : "100%", md : "75%"}}>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}  className="react_player" controls/>
                    {videoDetail?.snippet.tags.map((item, idx) => (
                        <Chip
                            label= {item}
                            key={idx}
                            sx={{marginTop : "10px", cursor : "pointer", ml : "10px",fontSize : "10px"}}
                            deleteIcon={<Tag/>}
                            onDelete={() => {}}
                            variant="outlined"
                        />
                    ))}

                    <Typography variant="h5" fontWeight={"bold"} p={2}>
                        {videoDetail.snippet.title}
                    </Typography>
                    <Typography>
                        {videoDetail.snippet.description.slice(0,200)}...
                    </Typography>

                    <Stack direction={"row"} gap={"20px"} alignItems={"center"} py={1} px={2} justifyContent={"space-between"}>
                        <Stack direction={"row"} alignItems={"center"} gap={"3px"} justifyContent={"start"} sx={{cursor :"pointer"}}>
                              <Link to={`/chanel/${videoDetail.snippet.channelId}`}>
                            <Avatar src={videoDetail.snippet.thumbnails.medium.url}   />

                            </Link>
                            <Typography variant={"subtitle2"} color={"grey"}>
                                {videoDetail.snippet.channelTitle}
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} justifyContent={"start"}>
                            <Stack direction={"row"} alignItems={"center"} gap={"3px"} mr={"20px"}>
                            <Visibility/>
                            {parseInt(videoDetail.statistics.viewCount).toLocaleString()} view
                        </Stack>
                        <Stack direction={"row"} alignItems={"center"} gap={"3px"} mr={"20px"}>
                            <FavoriteOutlined />
                            {parseInt(videoDetail.statistics.likeCount).toLocaleString()}
                        </Stack>
                        <Stack direction={"row"} alignItems={"center"} gap={"3px"} mr={"20px"}>
                            <MarkChatRead/>
                            {parseInt(videoDetail.statistics.commentCount).toLocaleString()}
                        </Stack>
                        <Stack direction={"row"} alignItems={"center"} gap={"3px"} mr={"20px"}>
                            {moment(videoDetail.snippet.publishedAt).fromNow()}
                        </Stack>
                        </Stack>

                    </Stack>
                </Box>
                 <Box width={{xs : "100%", md : "25%"}} ml={{xs: "0", md :"2rem"}} overflow={"scroll"} maxHeight={"120vh"} pl={{md : 10}}>
                    <Typography variant={"h6"} mt={"20px"} ml={{xs: "0", md :"4rem"}}>Related Videos </Typography>
                    <Videos videos={suggestedVideos}  />
                </Box>
            </Box>
            
        </Box>
      
      
        )
    
}
   
export default VideoDetail