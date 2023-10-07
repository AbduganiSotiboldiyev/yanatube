import { Box, Stack} from "@mui/material"
import {VideoCard,Loader,ChannelCard} from "../"
const Videos = ({videos }) => {
    if (!videos?.length) return <Loader/>
    
    
    return (
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} alignContent={"center"} gap={2} ml={{ md : 12, xl : 8}}>
            {videos.map((item,idx) => (
                <Box key={idx}>
                  {item.id.videoId && <VideoCard video={item} />}
                  {item.id.channelId && <ChannelCard video={item} />}

                  
                </Box>
            ))}
           
        </Stack>
    )
}

export default Videos