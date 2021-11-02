// import { Button, IconButton } from "@chakra-ui/button";
// import { useColorModeValue } from "@chakra-ui/color-mode"
// // import { useDisclosure } from "@chakra-ui/hooks"
// import { Box,Flex } from "@chakra-ui/layout"
// import { Menu, MenuButton } from "@chakra-ui/menu";
// import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

// const Home = () => {
//     // const {isOpen,isToggle} = useDisclosure()
//     return (
//         <Menu display='flex' justifyContent='flex-end' w='100%'>
//   <MenuButton  as={Button} colorScheme="pink">
//     Profile
//   </MenuButton>
// </Menu>
//     )
// }



const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>Logo</Box>
          <HStack spacing={8} alignItems={'center'}>
            
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <Button> Hello </Button>
          </HStack>

          
        </Flex>
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}



// export default Home;





// gitem vor navbary petq arandzin komponent lini es zut porcum em chakraic glux hanem