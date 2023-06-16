import moment from "moment/moment"

import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import {colors} from "../constants/color"
import { Link, useParams } from "react-router-dom"

const VideoCard = ({video, id}) => {

    const {name} = useParams()
    
    return(

       
                <Card sx={{width : {xs : "100%", sm : "250px", md: "380px", lg: "320px"} ,boxShadow :"none", borderRadius : 0,}} id={id}>
                    
                    <Link to={name ?  `${name}/video-detail/${video.id.videoId} ` :`/video-detail/${video.id.videoId}` }>
                        <CardMedia 
                        image={video?.snippet?.thumbnails?.high?.url}
                        alt={video?.snippet?.title}
                        
                        sx={{width : {xs : "100%", sm : "100%", md: "380px",lg: "320px"}, height : "180px", filter : "brightness(70%)"}}
                        />

                    </Link>
                    <CardContent sx={{background : colors.primary, height : "200px", position: "relative"}}> 
                        <>
                            <Typography variant={"subtitle2"}>
                            {moment(video?.snippet?.publishedAt).fromNow()}
                            </Typography>

                             <Link to={name ?  `${name}/video-detail/${video.id.videoId} ` :`/video-detail/${video.id.videoId}` }>

                                <Typography variant={"subtitle1"} fontWeight={"bold"}>
                                    {video?.snippet?.title.slice(0, 50)}
                                </Typography>
                                <Typography variant={"subtitle2"} color={colors.secondary} mt={2}>
                                    {video?.snippet?.description.slice(0,100)}
                                </Typography>

                             </Link>
                        </>
                        <>
                            <Stack 
                                direction={"row"}
                                position={"absolute"}
                                bottom={"10px"}
                                alignItems={"center"}
                                gap={"5px"}
                            >
                                <Link to={`/chanel/${video.snippet.channelId}`}>
                                 <Avatar src={video?.snippet?.thumbnails?.medium?.url}/>


                                </Link>
                                <Typography variant={"subtitle2"} color={"grey"}>
                                    {video?.snippet?.channelTitle}
                                </Typography>
                            </Stack>

                        </>
                    
                        

                    </CardContent>
                </Card>


       
        )
}

export default VideoCard