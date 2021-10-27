import { useColorModeValue } from "@chakra-ui/color-mode"
import { useDisclosure } from "@chakra-ui/hooks"
import { Box,Flex } from "@chakra-ui/layout"

const Home = () => {
    const {isOpen,isToggle} = useDisclosure()
    return (
        <Box>
            <Flex
            bg={useColorModeValue("white","gray.800")}
            color={useColorModeValue('gray.800','white')}
            >
                Hello
            </Flex>
        </Box>
    )
}

export default Home;





// gitem vor navbary petq arandzin komponent lini es zut porcum em chakraic glux hanem