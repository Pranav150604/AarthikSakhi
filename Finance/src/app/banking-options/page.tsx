import React from 'react';
import { Box, Flex, Button, Text, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Image, Grid, FormControl, Input, Select, Stack } from '@chakra-ui/react';

// Header Section
function Header() {
  return (
    <Box bg="white" p={4}>
      <Flex justify="space-between" align="center">
        <Text color="black" fontSize="xl" fontWeight="bold">Banking-Options</Text>
        <Flex>
          <Button mr={4}>Overview</Button>
          <Button mr={4}>Banking Essentials</Button>
          <Button mr={4}>Business Empowerment</Button>
          <Button mr={4}>Success Stories</Button>
          <Button>Get Started</Button>
        </Flex>
      </Flex>
    </Box>
  );
}

// Hero Section
function HeroSection() {
  return (
    <Box bg="gray.100" p={10} textAlign="center">
      {/* <Image src="/hero-image.jpg" alt="Rural Women Banking" boxSize="100%" objectFit="cover" /> */}
      <Text fontSize="3xl" fontWeight="bold" mt={4}>
        Empowering Rural Women: Unlock the Power of Banking for Your Business Growth
      </Text>
      <Button colorScheme="teal" size="lg" mt={6}>Start Your Journey</Button>
    </Box>
  );
}

// Banking Essentials for Rural Women
function BankingEssentials() {
  return (
    <Box p={8}>
      <Text fontSize="2xl" fontWeight="bold">Understanding Banking: Your First Step Towards Empowerment</Text>
      
      <SimpleGrid columns={3} spacing={10} mt={8}>
        <Box border="1px" borderRadius="md" p={4}>
          <Text fontSize="xl" fontWeight="bold">Jan Dhan Yojana</Text>
          <Text>Basic banking services for rural women with no minimum balance requirement.</Text>
        </Box>
        <Box border="1px" borderRadius="md" p={4}>
          <Text fontSize="xl" fontWeight="bold">How to Open a Bank Account</Text>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Step-by-Step Guide</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Instructions on documents required and account selection.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box border="1px" borderRadius="md" p={4}>
          <Text fontSize="xl" fontWeight="bold">Mobile Banking & Digital Payments</Text>
          <Text>Learn how mobile banking and digital payments can transform access to finance in rural areas.</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

// Banking Tools for Business Empowerment
function BusinessEmpowerment() {
  return (
    <Box p={8}>
      <Text fontSize="2xl" fontWeight="bold">How Banking Fuels Your Business: Step by Step</Text>

      <SimpleGrid columns={2} spacing={10} mt={8}>
        <Box border="1px" borderRadius="md" p={4}>
          <Text fontSize="xl" fontWeight="bold">Microloans & Credit</Text>
          <Text>Explore microloan schemes like Mudra Yojana that support small-scale businesses.</Text>
          <Button colorScheme="teal" mt={4}>Learn More</Button>
        </Box>

        <Box border="1px" borderRadius="md" p={4}>
          <Text fontSize="xl" fontWeight="bold">Financial Literacy & Guidance</Text>
          <Text>Gain knowledge through banking programs designed for women entrepreneurs.</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

// Real-Life Impact: Success Stories of Rural Women
// function SuccessStories() {
//   return (
//     <Box p={8} bg="teal.50">
//       <Text fontSize="2xl" fontWeight="bold" textAlign="center">From Banking to Business Success</Text>
//       <Grid templateColumns="repeat(3, 1fr)" gap={10} mt={8}>
//         <Box>
//           <Image src="/success-story-1.jpg" alt="Woman Dairy Farmer" />
//           <Text fontWeight="bold">Woman Dairy Farmer</Text>
//           <Text>A success story of a rural woman using a bank loan to start a dairy farm.</Text>
//         </Box>
//         <Box>
//           <Image src="/success-story-2.jpg" alt="Tailor Entrepreneur" />
//           <Text fontWeight="bold">Tailor Entrepreneur</Text>
//           <Text>Using microloans to set up a successful tailoring business.</Text>
//         </Box>
//         <Box>
//           <Image src="/success-story-3.jpg" alt="Handicrafts Entrepreneur" />
//           <Text fontWeight="bold">Handicrafts Entrepreneur</Text>
//           <Text>How banking support enabled a woman to grow her handicraft business.</Text>
//         </Box>
//       </Grid>
//     </Box>
//   );
// }

// Video Tutorials Section


const videoData = [
  {
    title: "Step-by-Step Guide: How to Open a Bank Account",
    url: "https://www.youtube.com/embed/METIVJMPfC4?si=xijpmCrqdSaruTZk", // Example video link
  },
  {
    title: "Using Mobile Banking Apps in Rural Areas",
    url: "https://www.youtube.com/embed/r222Z8_LXYM?si=7wbHOmLJQeMKNREq", // Example video link
  },
  {
    title: "How to Apply for Microloans and Start a Small Business",
    url: "https://www.youtube.com/embed/6B5gV_dWTrg?si=cmiczhox5Mdohvwk", // Example video link
  }
];

const VideoTutorials = () => {
  return (
    <Box p={8} bg="gray.100">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        Video Tutorials: Empowering Women with Banking Knowledge
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={10} mt={8}>
        {videoData.map((video, index) => (
          <Box key={index}>
            <iframe
              width="100%"
              height="315"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <Text mt={2} textAlign="center">{video.title}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};




// Footer Section
// function Footer() {
//   return (
//     <Box bg="teal.500" p={6} color="white">
//       <Stack direction="column" spacing={4} textAlign="center">
//         <Text>&copy; 2025 EmpowerBank. All rights reserved.</Text>
//         <Stack direction="row" spacing={4} justify="center">
//           <Button colorScheme="teal" variant="link">Facebook</Button>
//           <Button colorScheme="teal" variant="link">Instagram</Button>
//           <Button colorScheme="teal" variant="link">Twitter</Button>
//           <Button colorScheme="teal" variant="link">YouTube</Button>
//         </Stack>
//       </Stack>
//     </Box>
//   );
// }

// Main Page Component
function EmpowerBankPage() {
  return (
    <Box>
      <Header />
      <HeroSection />
      <BankingEssentials />
      <BusinessEmpowerment />
      {/* <SuccessStories /> */}
      <VideoTutorials />
      {/* <Footer /> */}
    </Box>
  );
}

export default EmpowerBankPage;
