import React from 'react'
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
interface EntityListProps {
    list: any[],
    mapper: Function
  }
  
  
  
  export const EntityList = (props: EntityListProps) => {
    let list = props.list
    let mapper = props.mapper
    return (
      <div style={{display:"flex", overflowY:"scroll" , flexDirection:"column",maxHeight:"80%", width:"100%"}}>
          {list.map((listItem) => mapper(listItem)) }
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
      <Box borderRadius={"20px"} padding={"10px 40px"} border={"2px solid black"} margin="5% 1% 0px 1%"  display="flex" >
          <Stack width={"100%"} margin="0.5px" display="flex" direction="column" justifyContent={"flex-start"} alignItems={"stretch"} color="black" spacing = {2} >
            <h1 style={{width: "fit-content", justifySelf:"start"}} > {entityname}</h1>
            {list}
          </Stack>
        </Box>
    )
  }

  export default EntityResultBox