import React from "react";
import {
  Text,
  Image,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";



interface WorkProps {
  title: string;
  desc: string;
  link: string | null;
  image: string | null;
  i: number;
}

export default function WorkItem(props: WorkProps) {

    function getTextAlign(){
      if (props.i % 2 == 0){
        return "left";
      } else {
        return "right";
      }
    };

    return (
    <LinkBox w="100%" 
        minH="10rem" 
        zIndex={3} 
        transition="all 0.2s ease-in-out"
        _hover={{ transform: 'scale(1.02)', shadow: '2xl' }}
        borderRadius={".5rem"}
      >
      <LinkOverlay href={props.link ? props.link : "#"}>
    
       <Grid
        scrollSnapType="y"
        templateAreas={props.i % 2 == 0 ? {
          md: `"main desc"`,
          base: `"main" 
                  "desc"`,
        } : {
            md: `"desc main"`,
           base: `"main" 
                  "desc"`,
        }}
        gridTemplateRows={{md: "1fr", base: "1fr auto" }}
        gridTemplateColumns={{md: "1fr 1fr", base: "1fr" }}
        w="100%"
        h="100%"
        bg="transparent"
        _hover={{ bg: "red.500" }} 
        transition="background 0.2s ease-in-out"
        gap={{base: "1rem", md: "2rem"}}
        
      >
    <GridItem area={"main"}>
        <Image
            objectFit="cover"
            src={props.image ? props.image : "/images/Cobblestone/header.jpg"}
            borderRadius={".5rem"}
            key={Date.now()}
            h="100%"
            w="100%"
        />
    </GridItem>
    <GridItem area={"desc"} display="flex" justifyContent={"center"} flexDir="column" gap={{base: "1rem"}}>
       
            <Text variant="h4" lineHeight={"80%"} textAlign={{base: "center", md: getTextAlign()}}>
            {props.title}
            </Text>
            <Text variant="type" color="lightyellow" textAlign={{base: "center", md: getTextAlign()}}>
            {props.desc}
            </Text>

      </GridItem>
      </Grid>
      </LinkOverlay>
    </LinkBox>
    );
}