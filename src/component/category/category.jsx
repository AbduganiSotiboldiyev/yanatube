import { Stack } from "@mui/material"
import {categories} from "../constants"
import {colors} from "../constants/color"
import "../../index.css"
const Category = ({selectedCategoryHandle,selectedCategory}) => {
    return (
      <Stack direction={"row"} sx={{overflowX : "scroll"}}>
            {categories.map(item => (
                <button 
                key={item.name} 
                className="category_btn" 
                style={{
                    borderRadius : "0",
                    backgroundColor : item.name === selectedCategory && colors.secondary,
                    }} 
                    onClick={() => selectedCategoryHandle(item.name)}
                 >
                    <span style={{color : item.name === selectedCategory ? "#fff" : colors.secondary, marginRight : "15px"}} >{item.icon}</span>
                    <span style={{color : item.name === selectedCategory ? "#fff" : colors.secondary ,fontWeight: "bold"}}>{item.name}</span>

                </button>
            ))}
      </Stack>
        )
}

export default Category