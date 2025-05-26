import { Box, Flex, Image } from "@chakra-ui/react";

const PinoyTravels = () => {
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
              Pinoy Travels & Tourism
            </Box>
            <Box fontFamily={"Inter"} fontWeight={700} fontSize={30}>
              Redesigning the Website for a Travel Agency
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
            <Image src={"/images/pinoyTnT/pinoyTnT1.png"} h={"100%"} />
            <Image src={"/images/pinoyTnT/pinoyTnT2.png"} h={"100%"} />
            <Image src={"/images/pinoyTnT/pinoyTnT3.png"} h={"100%"} />
            <Image src={"/images/pinoyTnT/pinoyTnT4.png"} h={"100%"} />
            <Image src={"/images/pinoyTnT/pinoyTnT5.png"} h={"100%"} />
            <Image src={"/images/pinoyTnT/pinoyTnT6.png"} h={"100%"} />
            <Image src={"/images/pinoyTnT/pinoyTnT7.png"} h={"100%"} />
            <Image src={"/images/pinoyTnT/pinoyTnT8.png"} h={"100%"} />
            <Image src={"/images/pinoyTnT/pinoyTnT9.png"} h={"100%"} />
            <Image src={"/images/pinoyTnT/pinoyTnT10.png"} h={"100%"} />
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
              My team and I redesigned the website for Pinoy Travels & Tourism,
              a travel agency. We reached out to the company and offered a
              complete website remodel to practice the theory lessons we’ve
              learned to improve its design, user experience, and functionality.
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
              We saw the agency’s current website and wanted to enhance the
              visual appeal, usability, and overall performance of it to ensure
              that their users can have a smoother and more user-friendly
              experience.
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
              During this project, the team and I maintained constant
              communication with the company so that the redesign can match
              their needs while maintaining their brand identity. We also looked
              for their feedback to ensure that the final product was up to
              their standards. And we split the work evenly to streamline
              efficiency and ensure a balanced workload.
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default PinoyTravels;
