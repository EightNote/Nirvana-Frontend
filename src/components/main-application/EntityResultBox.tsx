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
        <Stack padding={""} maxWidth={"true"} display="flex" justifyContent={"center"} alignItems={"stretch"} direction="column" spacing = {5} border={"5px solid black"} borderRadius="10px" margin={"20px"}>
          <h1 style={{width: "fit-content", justifySelf:"start"}} >Trending {entityname}</h1>
          {list}
        </Stack>

  )
}

export default EntityResultBox