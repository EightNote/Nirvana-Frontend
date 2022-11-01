import React from 'react'
import Stack from '@mui/material/Stack';
interface SuggestionListProps {
    list: any[],
    mapper:Function
  }
  
export const SuggestionList = (props: SuggestionListProps) => {
  let list = props.list
  let mapper = props.mapper
  return (
    <div style={{display:"flex", flexDirection:"column", overflowY:"scroll", width:"100%"}}>
        {list.map((listItem) => mapper(listItem))}
    </div>
  )
}

interface SuggestionResultBoxProps {
  entityname:string,
  list: JSX.Element
}
  
const SuggestionResultBox = (props: SuggestionResultBoxProps) => {
  let entityname = props.entityname
  let list = props.list
  return (
        <Stack padding={"10px"} maxHeight={"60%"} display="flex" justifyContent={"center"} alignItems={"stretch"} direction="column" spacing = {5} border={"5px solid black"} borderRadius="10px" margin={"20px"}>
          <h1 style={{width: "fit-content", justifySelf:"start"}} >Suggested {entityname}</h1>
          {list}
        </Stack>

  )
}

export default SuggestionResultBox