import React from 'react';
import {Box, Flex, Heading, HStack, Icon, Text, VStack} from "@chakra-ui/react";
import { FaChevronRight} from "react-icons/all";

const SideMenu = ({sideMenu_list, sideContent, active_menu, nowActive}) => {
    return (
        <HStack spacing={8}>
            <Box
                w={'25%'}
                h={'100vh'}
                id='side_menu'
                borderRightWidth='6px'
                borderColor={'teal.500'}
            >
                <Flex id="Header" pb={'2.5rem'} flexDir={'row'} justifyContent={'space-between'}>
                    <Heading p={'2rem'}>Manajemen</Heading>
                </Flex>
                <VStack spacing={0}>
                    {sideMenu_list.map((item, index) =>
                        <Box
                            minWidth={'100%'}
                            p={7}
                            backgroundColor={nowActive === item.active ? "blackAlpha.200" : ""}
                            onClick={() => active_menu(item.active)}
                            key={index}
                        >
                            <Flex dir={'row'} justifyContent={'space-between'}>
                                <Box>
                                    <Heading fontSize='xl'>{item.title}</Heading>
                                    <Text mt={4}>{item.desc}</Text>
                                </Box>
                                <Flex H={'100%'} alignItems={'center'}>
                                    <Icon><FaChevronRight fontWeight={'800'} size={'24px'}/></Icon>
                                </Flex>
                            </Flex>
                        </Box>
                    )}
                </VStack>
            </Box>
            <Box h={'100vh'} w={'75%'} id='side_menu_content'>
                {sideContent}
            </Box>
        </HStack>
    );
};

export default SideMenu;
