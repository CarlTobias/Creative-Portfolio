import { Box, Flex, Image } from "@chakra-ui/react";

const Wireframe = () => {
  return (
    <>
      <Flex
        minW={"100%"}
        minH={"100vh"}
        flexDirection={"column"}
        gap={10}
        px={12}
        py={10}
      >
        <Flex>
          <Flex flexDirection={"column"} align={"left"} pt={3}>
            <Box fontFamily={"Baskerville"} fontWeight={500} fontSize={20}>
              High-Fidelity Wireframe
            </Box>
            <Box fontFamily={"Inter"} fontWeight={700} fontSize={30}>
              Prototyping a Workout Application
            </Box>
          </Flex>
        </Flex>

        <Flex w={"100%"} justify={"space-between"} align={"center"}>
          <Flex
            flex={2}
            gap={20}
            flexDirection={"column"}
            justify={"space-between"}
          >
            <Flex
              direction={"column"}
              w={"100%"}
              h={"90vh"}
              gap={5}
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
              <Image src={"/images/wireframe/wireframe1.jpeg"} h={"100%"} />
              <Image src={"/images/wireframe/wireframe2.jpeg"} h={"100%"} />
              <Image src={"/images/wireframe/wireframe3.jpeg"} h={"100%"} />
              <Image src={"/images/wireframe/wireframe4.jpeg"} h={"100%"} />
              <Image src={"/images/wireframe/wireframe5.jpeg"} h={"100%"} />
              <Image src={"/images/wireframe/wireframe6.jpeg"} h={"100%"} />
              <Image src={"/images/wireframe/wireframe7.jpeg"} h={"100%"} />
              <Image src={"/images/wireframe/wireframe8.jpeg"} h={"100%"} />
              <Image src={"/images/wireframe/wireframe9.jpeg"} h={"100%"} />
              <Image src={"/images/wireframe/wireframe10.jpeg"} h={"100%"} />
            </Flex>
          </Flex>

          <Flex
            flex={2}
            gap={20}
            flexDirection={"column"}
            justify={"space-between"}
          >
            <Flex
              flexDirection={"column"}
              gap={3}
              justify={"start"}
              align={"left"}
              w={"100%"}
              fontFamily={"Inter"}
            >
              <Box fontWeight={800} fontSize={26}>
                What
              </Box>
              <Box textAlign={"justify"}>
                This high-fidelity wireframe is for a mobile workout app I
                designed that focused on user experience and engagement. The
                wireframe is a highly detailed layout of an app I thought would
                help make working out more pleasurable.
              </Box>
            </Flex>
            <Flex
              flexDirection={"column"}
              gap={3}
              justify={"start"}
              align={"left"}
              w={"100%"}
              fontFamily={"Inter"}
            >
              <Box fontWeight={800} fontSize={26}>
                Why
              </Box>
              <Box textAlign={"justify"}>
                I was tasked to create an intuitive and user-friendly design for
                an application. I decided to make a workout app because health
                and fitness is something that I am passionate about, and I
                wanted to make something that could help in that specific area.
                The app design I made included features like activity tracking,
                workout streaks, and a level system.
              </Box>
            </Flex>
            <Flex
              flexDirection={"column"}
              gap={3}
              justify={"start"}
              align={"left"}
              w={"100%"}
              fontFamily={"Inter"}
            >
              <Box fontWeight={800} fontSize={26}>
                How
              </Box>
              <Box textAlign={"justify"}>
                In the process of creating this wireframe, I first started by
                compiling the layouts of different workout apps to identify
                their strengths and weaknesses. To add to that, I also tried to
                think of something to encourage people to be consistent in
                working out (hence, the level system). Using Figma, I first
                created a low-fidelity prototype to focus on clear navigation
                and user-friendliness. I then moved on to finalize the wireframe
                by adding details like colors, fonts, and images to engage
                visual hierarchy.
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Wireframe;
