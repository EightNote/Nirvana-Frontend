import SimpleBar from 'simplebar-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../helpers'
import Cover from '../user_components/Cover'
import Main from '../user_components/Main'

export default function User() {
    return (
        <SimpleBar style={{ maxHeight: '100vh', backgroundColor:"#042c59" }}>
            <ChakraProvider theme={theme} style={{backgroundColor:"black"}}>
                <Cover />
                <Main />
            </ChakraProvider>
        </SimpleBar>
    )
}