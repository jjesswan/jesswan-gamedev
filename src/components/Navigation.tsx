import { Box, Flex, Icon } from "@chakra-ui/react";
import { Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { RiHome2Line, RiStackLine, RiFileListLine, RiMailOpenLine } from "react-icons/ri";

import ResumePDF from "../documents/Jessica_Wan_Resume.pdf";

export default function Navbar() {
  const size = 4;
  return (
    <Box
      position={"fixed"}
      zIndex={"sticky"}
      right={{ base: "1rem", lg: "2rem" }}
      mx='0'
      p="0"
      display={"flex"}
      flexDir={"column"}
      top={"10%"}
    >
      <Flex
      flexDir={"column"}
      justifyContent={"space-between"}
      >

          <HashLink smooth to="/#top">
            
              <Icon
                as={RiHome2Line as any}
                boxSize={size}
                fill={"white"}
                mb=".5rem"
              ></Icon>
          </HashLink>
     
          <HashLink smooth to="/#work">
              <Icon
                as={RiStackLine as any}
                boxSize={size}
                fill={"white"}
                mb=".5rem"
              ></Icon>
          </HashLink>
          <Link href={ResumePDF} target="_blank">
              <Icon
              as={RiFileListLine as any}
              boxSize={size}
              fill={"white"}
              mb=".5rem"
            ></Icon>
          </Link>
          <HashLink smooth to="/#contact">
              <Icon
                as={RiMailOpenLine as any}
                boxSize={size}
                fill={"white"}
                mb=".5rem"
              ></Icon>
          </HashLink>
         
       
      </Flex>
    </Box>
  );
}
