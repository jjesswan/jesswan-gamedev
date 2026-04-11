import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Icon, Text, Tooltip, Link as ChakraLink} from "@chakra-ui/react";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
  TiMail,
  TiSocialInstagramCircular
} from "react-icons/ti";
import { GoMail } from "react-icons/go";
import BackgroundVid from "../styles/BackgroundVid";



export default function Contact() {
  return (
    <div id="contact">
         <Flex
         flexDir="column"
          justifyContent={"center"}
          alignItems={"center"}
          gap="1rem"
        >
          <Text variant={"h2"} color="white">
            Let's get in touch!
          </Text>
          <Flex justifyContent={"center"} gap="1rem">
          <Tooltip label="Email" placement="bottom" hasArrow shouldWrapChildren> 
            <ChakraLink href="mailto:jessica_wan@alumni.brown.edu" isExternal>
               <Icon
                as={GoMail as any}
                boxSize={12}
                fill={"blue"}
              ></Icon>
            </ChakraLink>
          </Tooltip>
          <Tooltip label="LinkedIn" placement="bottom" hasArrow shouldWrapChildren> 
            <ChakraLink href="https://www.linkedin.com/in/jessicawan02/" isExternal>
               <Icon
                as={TiSocialLinkedinCircular as any}
                boxSize={12}
                fill={"blue"}
              ></Icon>
            </ChakraLink>
          </Tooltip>
          <Tooltip label="GitHub" placement="bottom" hasArrow shouldWrapChildren> 
            <ChakraLink href="https://github.com/jjesswan" isExternal>
               <Icon
                as={TiSocialGithubCircular as any}
                boxSize={12}
                fill={"blue"}
              ></Icon>
            </ChakraLink>
          </Tooltip>
          <Tooltip label="Instagram" placement="bottom" hasArrow shouldWrapChildren> 
            <ChakraLink href="https://www.instagram.com/jjessiart/" isExternal>
               <Icon
                as={TiSocialInstagramCircular as any}
                boxSize={12}
                fill={"blue"}
              ></Icon>
            </ChakraLink>
          </Tooltip>
          </Flex>
          <Flex w={{base: "100%", lg: "50%"}} display={{lg: "flex", base: "none"}}>
                <video
              loop
              autoPlay
              muted
            >
              <source src="/images/stars.webm" type="video/webm" />
            </video>
          </Flex>
        
      </Flex>
    </div>
  );
}
