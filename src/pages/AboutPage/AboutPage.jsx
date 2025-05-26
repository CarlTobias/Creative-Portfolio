import { Box, Flex, VStack } from "@chakra-ui/react";
import { MotionImage } from "../../components/ui/motionImage";
import { MotionBox } from "../../components/ui/motionBox";

const AboutPage = () => {
  return (
    <>
      <Flex minH={"100%"} justify={"center"} align={"start"}>
        <VStack spacing={10} pb={10} h="auto" minH="100vh">
          <Flex
            w={"100%"}
            h={"100vh"}
            justify={"space-between"}
            align={"center"}
            pl={20}
          >
            <Flex
              flexDirection={"column"}
              w={"50%"}
              minH={"100%"}
              justify={"center"}
              mb={10}
            >
              <MotionBox
                fontFamily="Inter"
                fontWeight={900}
                fontSize={{ base: 32, md: 48 }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Carl Tobias
              </MotionBox>

              <MotionBox
                fontFamily="Inter"
                fontWeight={400}
                fontSize={{ base: 14, md: 20 }}
                textAlign="justify"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Graduating Bath Spa University student for B.S. in Creative
                Computing. I’m fervid about creating applications and websites
                that are both pleasant-looking and makes life easier for people.
                Currently residing in Dubai, UAE, studying in Ras Al Khaimah,
                UAE.
              </MotionBox>
            </Flex>

            <MotionImage
              src="/images/me/me.png"
              alt="Me"
              maxHeight="100%"
              display={{ base: "none", md: "block" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </Flex>

          <Flex
            flexDirection={"row-reverse"}
            w={"100%"}
            h={"100vh"}
            justify={"center"}
            align={"center"}
            gap={60}
          >
            <Flex
              flexDirection={"column"}
              w={"30%"}
              minH={"100%"}
              justify={"center"}
              mb={10}
            >
              <MotionBox
                fontFamily="Inter"
                fontWeight={900}
                fontSize={{ base: 32, md: 48 }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Capabilites
              </MotionBox>

              <MotionBox
                fontFamily="Inter"
                fontWeight={400}
                fontSize={{ base: 14, md: 20 }}
                textAlign="justify"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                - 2D Game Development
                <br />
                - Website Development
                <br />
                - UX / UI Design (Web and Mobile)
                <br />
                - Wireframing and Prototyping
                <br />
              </MotionBox>
            </Flex>

            <MotionImage
              src="/images/me/me2.jpeg"
              alt="Me"
              maxHeight="90%"
              borderRadius={10}
              display={{ base: "none", md: "block" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </Flex>

          <Flex
            w={"100%"}
            h={"100vh"}
            justify={"center"}
            align={"center"}
            gap={40}
          >
            <Flex
              flexDirection={"column"}
              w={"40%"}
              minH={"100%"}
              justify={"center"}
              mb={10}
            >
              <MotionBox
                fontFamily="Inter"
                fontWeight={900}
                fontSize={{ base: 32, md: 48 }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Drive
              </MotionBox>

              <MotionBox
                fontFamily="Inter"
                fontWeight={400}
                fontSize={{ base: 14, md: 20 }}
                textAlign="justify"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm a person driven by curiosity, creativity, and passion. I see
                every project as an opportunity to learn and as a challenge to
                better my self and grow. While I'm confident working
                idenpendently, I also thrive in collaborative environments,
                iterating on feedback and working as a team.
              </MotionBox>
            </Flex>

            <MotionImage
              src="/images/me/me3.jpeg"
              alt="Me"
              maxHeight="90%"
              borderRadius={10}
              display={{ base: "none", md: "block" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export default AboutPage;
