import { Box, Flex, Image } from "@chakra-ui/react";

const Spigs = () => {
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
              Spig's Time Continuum
            </Box>
            <Box fontFamily={"Inter"} fontWeight={700} fontSize={30}>
              Developing a 2D-Game with Unity
            </Box>
          </Flex>
        </Flex>

        <Flex w={"100%"} justify={"space-between"} align={"center"} gap={20}>
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
                I created a 2D video game from scratch using Unity. The game is
                a never-ending casual game that features a missile-launching pig
                in space with the goal of avoiding asteroids. This project gave
                me the opportunity to use my skills in game development and
                design. Link to the game.
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
                I longed to create a fun and addictive game like the ones I see
                in the App Store on my phone. Other than that, I also wanted to
                develop my skills in game development like C# scripting, UI
                design, level design, graphic design, and game physics
                encouraging me to think critically about user engagement and
                flow.
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
                I started the process by looking back at games I found addicting
                and the ones that went viral. I then brainstormed some ideas and
                started researching about designing levels and characters,
                finding music, and thinking of mechanics. I then started
                implementing all of those ideas into Unity little by little.
                While doing so, I held regular playtesting to help me find bugs
                and refine it for the final product. Once completed, I posted
                the game to itch.io and got positive feedback from my peers and
                tutor.
              </Box>
            </Flex>
          </Flex>

          <Flex flex={3} w={"100%"} justify={"center"} align={"center"}>
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
              <Image src={"/images/spigs/spigs1.png"} h={"100%"} />
              <Image src={"/images/spigs/spigs2.png"} h={"100%"} />
              <Image src={"/images/spigs/spigs3.png"} h={"100%"} />
              <Image src={"/images/spigs/spigs4.png"} h={"100%"} />
              <Image src={"/images/spigs/spigs5.png"} h={"100%"} />
              <Image src={"/images/spigs/spigs6.png"} h={"100%"} />
              <Image src={"/images/spigs/spigs7.png"} h={"100%"} />
              <Image src={"/images/spigs/spigs8.png"} h={"100%"} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Spigs;
