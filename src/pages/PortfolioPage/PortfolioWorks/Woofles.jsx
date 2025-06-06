import { Box, Flex, Image } from "@chakra-ui/react";
const Woofles = () => {
  return (
    <>
      <Flex
        minW={"100%"}
        minH={"100vh"}
        flexDirection={"column"}
        gap={10}
        px={12}
      >
        <Flex>
          <Flex flexDirection={"column"} align={"left"} pt={3}>
            <Box fontFamily={"Baskerville"} fontWeight={500} fontSize={20}>
              Woofles
            </Box>
            <Box fontFamily={"Inter"} fontWeight={700} fontSize={30}>
              Creating a Fully Functioning Website
            </Box>
          </Flex>
        </Flex>

        <Flex gap={20} w={"100%"} justify={"space-between"}>
          <Flex
            flexDirection={"column"}
            gap={3}
            justify={"start"}
            align={"left"}
            w={"40%"}
            fontFamily={"Inter"}
          >
            <Box fontWeight={800} fontSize={26}>
              What
            </Box>
            <Box textAlign={"justify"}>
              Imagine a social media app for your pets. This platform can be
              used by pet owners anywhere to post pictures and videos of their
              beloved animals. It can also be used to engage in pet communities
              that hold events like golden retriever conventions, pet festivals,
              etc.
            </Box>
          </Flex>
          <Flex
            flexDirection={"column"}
            gap={3}
            justify={"start"}
            align={"left"}
            w={"40%"}
            fontFamily={"Inter"}
          >
            <Box fontWeight={800} fontSize={26}>
              Why
            </Box>
            <Box textAlign={"justify"}>
              Now that I’m more confident with my web development skills, I
              decided to build a pet social media website because I was inspired
              by my love of animals (specifically my dogs). I wanted to create a
              space explicitly for pets where no one can complain about the
              amount of animal posts someone makes.
            </Box>
          </Flex>
          <Flex
            flexDirection={"column"}
            gap={3}
            justify={"start"}
            align={"left"}
            w={"40%"}
            fontFamily={"Inter"}
          >
            <Box fontWeight={800} fontSize={26}>
              How
            </Box>
            <Box textAlign={"justify"}>
              As of now, I’m in the process of creating the website. The project
              is under development until further notice. However, the
              brainstorming session has finished and the high fidelity wireframe
              is here. (Replace this when ready).
            </Box>
          </Flex>
        </Flex>

        <Flex flex={1} w={"100%"} justify={"center"} align={"center"}>
          <Flex
            direction={"row"}
            w={"100%"}
            h={"50vh"}
            gap={5}
            justify={"left"}
            align={"center"}
            wrap={"nowrap"}
            overflowX={"auto"}
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            }}
          >
            <Image src={"/images/woofles/wooflesLogin.png"} h={"100%"} />
            <Image src={"/images/woofles/wooflesHome.png"} h={"100%"} />
            <Image src={"/images/woofles/wooflesProfile.png"} h={"100%"} />
            <Image src={"/images/woofles/wooflesEditProfile.png"} h={"100%"} />
            <Image src={"/images/woofles/wooflesSettings.png"} h={"100%"} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Woofles;

{
  /* <Flex
  direction="row"
  w="70vw"
  overflowX="auto"
  wrap="nowrap"
  gap={4}
  p={4}
  border="1px solid #ccc"
>
  {Array.from({ length: 10 }).map((_, i) => (
    <Box
      key={i}
      minW="200px"
      height="100px"
      bg="teal.100"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
    >
      Item {i + 1}
    </Box>
  ))}
</Flex>; */
}
