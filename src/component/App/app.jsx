import {  Box } from "@mui/material"
import { Routes,Route } from "react-router-dom"
import {Main,Chanel,VideoDetail,Search,Navbar} from "../"



const App = () => {
    return (
      <Box  width= {{xs : "31rem",md : "100%"}}>
        <Navbar/>
        <Routes>
          <Route path="/" element ={<Main/>} />
          <Route path="/chanel/:id" element ={<Chanel/>} />
          <Route path="/video-detail/:id" element ={<VideoDetail/>} />
          <Route path="/search/:id" element ={<Search/>} />


        </Routes>
      </Box>)
}

export default App 