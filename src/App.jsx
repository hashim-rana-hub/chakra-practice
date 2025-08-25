import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, HStack } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <HStack>
  
      <Box fontSize={{ base: "10px", tablet: "20px", desktop: "30px" }}>Hello</Box>

    </HStack>
    </>
  )
}

export default App
