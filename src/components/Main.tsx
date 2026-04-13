import { Flex } from "@chakra-ui/react";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./WorkPages/Work";
import BlobBg from "../styles/BlobBg";

export default function Main() {
  return (
    <div role="main" style={{ scrollSnapType: "y mandatory" }}>
      <Flex
        scrollSnapType={"y"}
        flexDir={"column"}
        bgAttachment="fixed"
        bgSize="cover"
        overflowX={"hidden"}
        position="relative"
      >
        <Home />
        <Work />
        <Contact/>
        <BlobBg color="linear-gradient(222deg,rgba(63, 136, 197, 1) 0%, rgba(211, 180, 219, 1) 51%, rgba(255, 196, 197, 1) 100%)" 
                      w={650} 
                      h={750}
                      shift33={[60,30,40,90]} 
                      shift66={[20,50,10,20]} 
                      translate33={[20,10]} 
                      translate66={[-20,-10]} 
                      mt="50vh"
                      ml="60vw"/>
        <BlobBg color="linear-gradient(223deg,rgba(63, 119, 197, 1) 0%, rgba(255, 206, 174, 1) 61%)" 
                  w={800} 
                  h={850}
                  shift33={[50,40,40,90]} 
                  shift66={[30,60,10,20]} 
                  translate33={[25,10]} 
                  translate66={[-20,-10]} 
                  mt="120%"
                  ml="-10%"/>
      </Flex>
    </div>
  );
}
