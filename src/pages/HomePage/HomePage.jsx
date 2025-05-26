import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { ColourfulText } from "../../components/ui/colorfulText";

import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";

const HomePage = () => {
  return (
    <>
      <Flex flexDirection={"column"} minH={"100%"} justify={"space-between"}>
        <Flex
          flexDirection={"column"}
          justify={"center"}
          align={"center"}
          flex={2}
        >
          <Text
            h={"100%"}
            fontFamily={"Baskerville"}
            fontWeight={600}
            fontSize={{ base: 28, md: 32, xl: 42 }}
            textAlign={"center"}
          >
            <ColourfulText text="Game Developer and UX Designer" />
          </Text>
          <Text fontSize={{ base: 20, md: 24, xl: 28 }} textAlign={"center"}>
            Creative Computing Student
          </Text>
        </Flex>

        <Flex
          justify={{ base: "right", md: "space-between" }}
          align={"end"}
          px={5}
          pb={5}
        >
          <Box
            w={"45%"}
            fontSize={{ base: 20, xl: 22 }}
            textAlign={"justify"}
            display={{ base: "none", md: "block" }}
          >
            Hi! I’m Carl. I am a Bath Spa University student on my last year on
            their Creative Computing course. Currently based in Dubai, UAE.
          </Box>

          <Flex
            flexDirection={{ base: "column", md: "row" }}
            align={"center"}
            gap={5}
          >
            <Box fontSize={30}>
              <Link
                href="https://www.facebook.com/CarlT.16"
                isExternal
                _hover={{ color: "#1877F2" }}
              >
                <GrFacebookOption />
              </Link>
            </Box>
            <Box fontSize={30}>
              <Link
                href="https://www.instagram.com/tobleronewithfriedchicken/"
                isExternal
                _hover={{ color: "#E1306C" }}
              >
                <GrInstagram />
              </Link>
            </Box>
            <Box fontSize={30}>
              <Link
                href="https://www.linkedin.com/in/carl-amir-tobias-4a73b32b1/"
                isExternal
                _hover={{ color: "#0072B1" }}
              >
                <GrLinkedinOption />
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HomePage;
