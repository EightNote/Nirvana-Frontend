import React from 'react'
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
interface EntityListProps {
    list: any[],
    mapper:Function
  }
  
  
  
  export const EntityList = (props: EntityListProps) => {
    let list = props.list
    let mapper = props.mapper
    return (
      <div style={{display:"flex", overflowX:"scroll", width:"100%"}}>
          {list.map((listItem) => mapper(listItem))}
      </div>
    )
  }
  
  interface EntityResultBoxProps {
    entityname:string,
    list: JSX.Element
  }
  
 const EntityResultBox = (props: EntityResultBoxProps) => {
    let entityname = props.entityname
    let list = props.list
    return (
      <Box borderRadius={"20px"} padding={"10px 40px"} border={"2px solid white"} margin={"50px 100px"}  display="flex" >
          <Stack width={"100%"} display="flex" justifyContent={"center"} alignItems={"stretch"} color="white" direction="column" spacing = {5} >
            <h1 style={{width: "fit-content", justifySelf:"start"}} >Trending {entityname}</h1>
            {list}
          </Stack>
        </Box>
    )
  }

  export default EntityResultBox