import { Button, ButtonGroup, Flex, Stack, Text, Icon, Image, Grid, GridItem, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import WorkPageItem from "../WorkPageItem";
import CornerBrackets from "../../../styles/CornerBrackets";
import info from "../../../content/bear_content";
import { GoStack } from "react-icons/go";
import BlobBg from "../../../styles/BlobBg";
import React from 'react'
import ReactPlayer from 'react-player'

export default function WorkPage_Bear() {
  const colors = ["#FFF8DE", "#9ECB96", "#B8B2FF"];
  const title= "Bear Necessiteas";
  const desc = "a student-directed 3d animated short. my role: creative director, artistic lead, and animator";
  const links: any[]=[];
  const header_img = "/images/Bear/header.png";
  const product_img = "https://player.vimeo.com/video/1048135105";
 
  
  return (
    <div id="top">
        <BlobBg color="linear-gradient(222deg,rgba(63, 136, 197, 1) 0%, rgba(211, 180, 219, 1) 51%, rgba(255, 196, 197, 1) 100%)" 
              w={800} 
              h={800}
              shift33={[60,30,40,90]} 
              shift66={[20,50,10,20]} 
              translate33={[20,10]} 
              translate66={[-20,-10]} 
              mt="150%"
              ml="25%"/>
        <Flex
          flexDir={"column"}
          minH="100vh"
          px={{xl: "15rem", lg: "20rem", base: "1rem"}}
          overflow={"hidden"}
        >
          
          <Flex w="100%" py="2rem" flexDir={"column"} alignItems={"flex-start"}>
            <Image
              objectFit="contain"
              src={header_img}
              borderRadius={".5rem"}
              key={Date.now()}
              w={{lg: "60%", base: "80%"}}
            />
            <Text
              variant={"h3"}
              color="white"
              align={"left"}
              lineHeight={"80%"}
              mt="1rem"
            >
              {title}
            </Text>
            <Flex w={{lg: "40%", base: "80%"}}>
             <Text
              variant={"type"}
              color="red"
            >
              {desc}              
            </Text>
            </Flex>
            <Flex gap=".5rem" mt={"1rem"}>
              {colors.map((c) => (
                <Flex
                  w="3rem"
                  h="3rem"
                  bg={c}
                  borderRadius={".5rem"}
                />
              ))}

            </Flex>
          </Flex>
          {/*///////////////////////////// DETAILED SUMMARY AREA ////////////////////////*/}
          <Grid
            templateAreas={{
              lg: `"main"`,
              base: `"main"`,
            }}
            gridTemplateRows="1fr"
            gridTemplateColumns={{ lg: "1fr", base: "1fr" }}
          >
            {/* <GridItem area={"left"} display="flex" flexDir="column">
              <Flex bg="blue" h="100%" borderRadius={"20px"}></Flex>
            </GridItem> */}
            <GridItem area={"main"} display="flex" flexDir="column" gap="4rem">
              {info.map((i) => (
                <WorkPageItem
                  desc={i.desc}
                  header={i.header}
                  image={i.image}
                />
              ))
                }
              
             
            </GridItem>
          </Grid>

          {/*///////////////////////////// SHOWCASE AREA ////////////////////////*/}
          <Flex w="100%" mt="10rem" px={{lg: "5rem", base: "rem"}} flexDir={"column"}>
            <Text variant="h2" color="white" textAlign={"left"}>
              Product
            </Text>
            <CornerBrackets color="#eb5c68" size={30} thickness="6px" child={
            <ReactPlayer src={product_img} controls={true} width="100%"
    height="500px" style={{padding: "1rem", borderRadius: ".5rem"}} />

            }/>

            {/* ///// LINKS AREA ///// */}
            <Flex w="100%" justifyContent={"center"} gap="1rem">
              {links.map((l) => (
                <ChakraLink href={l.href} isExternal>
                <Button variant={"solid"} bg="black" mt="1rem" color="red"  
                _hover={{ transform: 'scale(1.02)', shadow: '2xl', bg:"transparent" }}
                borderRadius={".5rem"}
                 transition="all 0.2s ease-in-out"
                 >
                  {l.label}
                </Button>
                </ChakraLink>
              ))}
            </Flex>

            
          </Flex>
          <Flex my="5rem" alignItems={"center"} justifyContent={"center"} gap="1rem" zIndex={2} _hover={{ transform: 'scale(1.02)'}}  transition="all 0.2s ease-in-out">  
           
             <HashLink smooth to="/#work" style={{ display: "flex" , gap: ".5rem", alignItems: "center"}} >
                <Icon
                  as={GoStack as any}
                  boxSize={4}
                  fill={"white"}
                />
                <Text variant={"type"} color="white">back to projects</Text>
            </HashLink>
            
          </Flex>
        </Flex>
    </div>
  );
}

