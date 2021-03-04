import React, { useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Heart, Star } from "./";

const Profile = () => {
  const [heartClicked, setHeartClicked] = useState(false);

  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="root.bgCol"
      justifyContent="center"
      alignItems="center"
    >
      <Box p="20px" bg="item.bgCol" w="500px" h="500px">
        <Box
          border="2px"
          borderRadius="20px"
          borderColor="item.borderLight"
          w="100%"
          h="100%"
        >
          <Flex
            bg="item.gray"
            w="100%"
            h="90px"
            alignItems="center"
            borderRadius="20px 20px 0 0"
            borderBottom="2px"
            borderBottomColor="item.borderLight"
            justifyContent="space-between"
            p="0 30px"
          >
            <Text fontSize="2xl" color="item.borderHeavy">
              Developer Profile
            </Text>
            <Text fontSize="2xl" color="item.borderHeavy">
              <Heart clicked={heartClicked} handleClick={setHeartClicked} />
            </Text>
          </Flex>
          <Flex
            bg="white"
            w="100%"
            h="270px"
            borderBottom="2px"
            borderBottomColor="item.borderLight"
            justifyContent="space-between"
            p="30px 0"
            flexDirection="column"
          >
            <Box
              w="120px"
              h="120px"
              borderRadius="60px"
              overflow="hidden"
              margin="0 auto"
            >
              <img src={require("../assets/img/Royal.jpg").default} />
            </Box>
            <Box w="100%">
              <Text fontSize="20px" color="item.borderHeavy" textAlign="center">
                Royal Rzaxanov
              </Text>
              <Text fontSize="16px" color="item.borderHeavy" textAlign="center">
                Full-Stack Engineer
              </Text>
              <Text fontSize="16px" color="item.borderHeavy" textAlign="center">
                Baku, Azerbaijan
              </Text>
            </Box>
          </Flex>
          <Flex
            bg="white"
            w="100%"
            h="95px"
            borderRadius="0 0 20px 20px"
            justifyContent="space-between"
            alignItems="center"
            p="0 30px"
          >
            <Flex flexDirection="column" justifyContent="center">
              <Text fontSize="20px" color="item.borderHeavy" textAlign="center">
                1,234
              </Text>
              <Text fontSize="16px" color="item.borderLight" textAlign="center">
                Profile View
              </Text>
            </Flex>
            <Flex flexDirection="column" justifyContent="center">
              <Text fontSize="20px" color="item.borderHeavy" textAlign="center">
                5,678
              </Text>
              <Text fontSize="16px" color="item.borderLight" textAlign="center">
                Website Views
              </Text>
            </Flex>
            <Flex flexDirection="column" justifyContent="center">
              <Flex>
                {[true, true, true, true, false].map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Star fillStatus={item} />
                    </React.Fragment>
                  );
                })}
              </Flex>
              <Text fontSize="16px" color="item.borderLight" textAlign="center">
                Avg. Rating
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Profile;
