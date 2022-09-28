import React from 'react';
import {Center, Circle, Flex, Heading} from "@chakra-ui/react";

export default function NotFound(){
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{base: "auto", xl: "100%" }}
      m="0 auto"
    >
        <Center>
          <Circle bg={'salmon'} maxW={'100%'}>
            <Heading padding={'2rem'} textAlign={'center'} >
              Maaf halaman tidak ditemukan.
            </Heading>
          </Circle>
        </Center>
    </Flex>
  );
};
