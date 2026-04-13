import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonGroup, Flex, Stack, Text, Icon, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import BackgroundVid from "../styles/BackgroundVid";
import BlobBg from "../styles/BlobBg";



export default function Home() {
  const texts = ["game developer.", "software engineer.", "artist.", "world builder."];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 1000); // 1s

    return () => {
      // cleanup on dismount
      clearInterval(intervalId);
    };
  }, []); 

  const isLargeDevice = useBreakpointValue({ base: false, lg: true });

  
  return (
    <div id="top">
        <BackgroundVid src="/images/header_transparent.webm"/>
        <Flex w="100vw" h="100vh" flexDir={"column"} justifyContent="flex-end" alignItems="center" overflow={"hidden"}>
          <Flex
            justifyContent={"space-between"}
            w="50rem"
            flexDir={"column"}
            mb="20rem"
          >
            {/* <Flex w="100%" color="white">｢</Flex> */}
            <Text
              variant="bigType"
              color="white"
              textAlign="center"
              zIndex={"2"}
            >
              {texts[currentIndex]}
            </Text>
            {/* <Flex w="100%" justifyContent={"flex-end"} color="white">｣</Flex> */}
          
          </Flex>
          
          <Flex w="100vw" h="20vh" justifyContent={"flex-end"} alignItems={"flex-end"} > 
        
            <Text
              variant={"h1"}
              color="light"
              mr={{ lg: "6rem", base: "2rem" }}
              zIndex={"2"}
              lineHeight={"1"}
              my=".2rem"
            >
              jess wan
            </Text>
          </Flex>  
      </Flex>
    </div>
  );
}



          

