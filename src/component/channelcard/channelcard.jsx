import { Link } from "react-router-dom"

import { CheckCircle } from "@mui/icons-material"
import { Box, CardContent, CardMedia,Typography } from "@mui/material"

const ChannelCard = ({video,marginTop}) => {
    
    

    return(
        <Box
        sx={{boxShadow : "none",
         borderRadius : "20px", 
         display : "flex", 
         alignItems: "center",
         justifyContent: "center" ,
         height : "326px", 
         margin : "auto",
        marginTop : marginTop
        }}
        
        >
            <CardContent  
                sx={{
                display : "flex",
                flexDirection : "column",
                alignItems: "center",
                justifyContent: "center" 
                }}>

                    <Link to={`/chanel/${video?.snippet?.channelId}`}>

                        <CardMedia 
                        image={video.snippet.thumbnails.high.url} 
                        alt={video.snippet.title}
                        sx={{
                            borderRadius : "50%",
                            height : "180px",
                            width : "180px",
                            mb :2,
                            border : "1px solid greey",

                        }}

                        />
                    </Link>

                 <Typography variant="h6" >
                        {video.snippet.title}
                        <CheckCircle sx={{fontSize : "14px", color: "green", ml: 1}}/>
                 </Typography>
                 {video?.statistics?.subscriberCount && (
                    <Typography sx={{fontSize : "14px", fontWeight: "900" , color :"grey"}}>
                        {parseInt(video.statistics.subscriberCount).toLocaleString('en-US')} Subcsribers
                    </Typography>
                 )} 


            </CardContent>
        

         
        </Box>
        )
}

export default ChannelCard