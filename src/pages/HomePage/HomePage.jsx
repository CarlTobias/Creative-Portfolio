import { Box, Flex, Link, Text } from "@chakra-ui/react";

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
            className={"homeHeader"}
            fontWeight={600}
            fontSize={32}
            h={"100%"}
          >
            Game Developer and UX Designer
          </Text>
          <Text fontSize={24}>Creative Computing Student</Text>
        </Flex>

        <Flex justify={"space-between"} align={"center"} px={5} pb={5}>
          <Box w={"45%"} fontSize={20}>
            Hi! I’m Carl. I am a Bath Spa University student on my last year on
            their Creative Computing course. Currently based in Dubai, UAE.
          </Box>

          <Flex gap={5} justify={"space-between"} align={"center"}>
            <Box fontSize={20}>Reach Out:</Box>

            <Flex gap={5} align={"center"}>
              <Box color={"#000"} fontSize={30}>
                <Link href="https://www.facebook.com/CarlT.16" isExternal>
                  <GrFacebookOption />
                </Link>
              </Box>
              <Box color={"#000"} fontSize={30}>
                <Link
                  href="https://www.instagram.com/tobleronewithfriedchicken/"
                  isExternal
                >
                  <GrInstagram />
                </Link>
              </Box>
              <Box color={"#000"} fontSize={30}>
                <Link
                  href="https://www.linkedin.com/in/carl-amir-tobias-4a73b32b1/"
                  isExternal
                >
                  <GrLinkedinOption />
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HomePage;
