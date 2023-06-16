import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IconButton, Paper} from "@mui/material"
import {Search} from "@mui/icons-material"
import {colors} from "../constants/color" 
import "../../index.css"
const SearchBar = () => {

  const [value,setValue] =useState('')
  const navigate = useNavigate()

  
  const handleChange = (e) => {
    e.preventDefault()
    if(value){
      navigate(`/search/${value}`)
      setValue("")
    }
  }
    return (
      <Paper onSubmit={handleChange} component={"form"} elevation={9} sx={{border : `1px solid ${colors.secondary}`, pl : 2, boxShadow : "none"}}  >
        <input
         type="text"
          placeholder="Search..." 
          className="search_bar"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
            <IconButton type="submit" onClick={handleChange}>
                <Search/>
            </IconButton>    
       
      </Paper>
      )

}

export default SearchBar