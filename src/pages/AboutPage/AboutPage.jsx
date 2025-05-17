import { Box, Flex, VStack } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <>
      <Flex minH={"100%"} justify={"center"} align={"start"} my={10}>
        <Flex w={"50%"} h={"100vh"}>
          <VStack spacing={10} py={10}>
            <Flex
              flexDirection={"column"}
              minW={"100%"}
              minH={"100%"}
              justify={"center"}
              mb={10}
            >
              <Box
                fontFamily={"Inter"}
                fontWeight={900}
                fontSize={{ base: 32, md: 48 }}
              >
                Carl Tobias
              </Box>

              <Box
                fontFamily={"Inter"}
                fontWeight={400}
                fontSize={{ base: 14, md: 20 }}
                textAlign={"justify"}
              >
                Graduating Bath Spa University student for B.S. in Creative
                Computing. I’m fervid about creating applications and websites
                that are both pleasant-looking and makes life easier for people.
                Currently residing in Dubai, UAE, studying in Ras Al Khaimah,
                UAE.
              </Box>
            </Flex>

            <Flex flexDirection={"column"} minH={"100%"} justify={"center"}>
              <Box fontFamily={"Inter"} fontWeight={700} fontSize={{base: 24, md: 40}}>
                Capabilites
              </Box>

              <Box
                fontFamily={"Inter"}
                fontWeight={400}
                fontSize={{ base: 14, md: 20 }}
                textAlign={"justify"}
              >
                {`2D Game Development\n`}
                {`Website Development\n`}
                {`UX/UI Design (Web and Mobile)\n`}
                {`Wireframing and Prototyping\n`}
              </Box>
            </Flex>

            <Flex flexDirection={"column"} minH={"100%"} justify={"center"}>
              <Box fontFamily={"Inter"} fontWeight={700} fontSize={{base: 24, md: 40}}>
                Drive
              </Box>

              <Box
                fontFamily={"Inter"}
                fontWeight={400}
                fontSize={{ base: 14, md: 20 }}
                justifyContent={"justify"}
              >
                I'm a person driven by curiosity, creativity, and passion. I see
                every project as an opportunity to learn and as a challenge to
                better my self and grow. While I'm confident working
                idenpendently, I also thrive in collaborative environments,
                iterating on feedback and working as a team.
              </Box>
            </Flex>

            <Flex
              flexDirection={"column"}
              minH={"100%"}
              justify={"center"}
              pb={20}
            >
              <Box fontFamily={"Inter"} fontWeight={700} fontSize={{base: 24, md: 40}}>
                Passions
              </Box>

              <Box
                fontFamily={"Inter"}
                fontWeight={400}
                fontSize={{ base: 14, md: 20 }}
                justifyContent={"justify"}
              >
                Aside from coding, I have a passion for photography and
                vlogging. There’s something about capturing moments and
                documenting life that gives me a serotonin boost. I also have a
                deep love for music and theatre — I’ve dreamed of singing on
                Broadway ever since I discovered what it was.
              </Box>
            </Flex>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

export default AboutPage;
