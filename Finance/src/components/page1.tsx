// page1.tsx
import { Box, Text, Heading } from "@chakra-ui/react";

const Page1 = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="2xl" mb={4}>
        हिंदी में स्वागत है
      </Heading>
      <Text fontSize="xl" mb={4}>
        यह एक उदाहरण पृष्ठ है जिसमें सब कुछ हिंदी में प्रदर्शित किया गया है।
      </Text>
      <Text fontSize="lg">
        यहाँ आप अपने होमपेज, नेवबार और फुटर सभी हिंदी में देख सकते हैं।
      </Text>
    </Box>
  );
};

export default Page1;
