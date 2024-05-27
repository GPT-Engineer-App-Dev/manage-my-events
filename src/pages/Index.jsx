import { Box, Button, Container, Flex, Heading, HStack, IconButton, Text, VStack, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.700" color="white" p={4} justify="space-between" align="center">
        <Heading size="md">Event Management</Heading>
        <HStack spacing={8}>
          <Link href="#home" _hover={{ textDecoration: "none", color: "blue.300" }}>Home</Link>
          <Link href="#events" _hover={{ textDecoration: "none", color: "blue.300" }}>Events</Link>
          <Link href="#about" _hover={{ textDecoration: "none", color: "blue.300" }}>About</Link>
          <Link href="#contact" _hover={{ textDecoration: "none", color: "blue.300" }}>Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box id="home" bg="blue.500" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Create and Manage Your Events</Heading>
        <Button size="lg" colorScheme="teal">Create an Event</Button>
      </Box>

      {/* Upcoming Events Section */}
      <Box id="events" py={20} textAlign="center">
        <Heading size="xl" mb={8}>Upcoming Events</Heading>
        <VStack spacing={4}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Event 1</Heading>
            <Text mt={4}>Details about Event 1</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Event 2</Heading>
            <Text mt={4}>Details about Event 2</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Event 3</Heading>
            <Text mt={4}>Details about Event 3</Text>
          </Box>
        </VStack>
      </Box>

      {/* Features Section */}
      <Box id="about" bg="gray.100" py={20} textAlign="center">
        <Heading size="xl" mb={8}>Why Choose Our Platform</Heading>
        <VStack spacing={4}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Feature 1</Heading>
            <Text mt={4}>Description of Feature 1</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Feature 2</Heading>
            <Text mt={4}>Description of Feature 2</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Feature 3</Heading>
            <Text mt={4}>Description of Feature 3</Text>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box id="contact" bg="blue.700" color="white" py={10} textAlign="center">
        <Heading size="md" mb={4}>Contact Us</Heading>
        <Text mb={4}>Email: contact@eventmanagement.com</Text>
        <HStack spacing={4} justify="center">
          <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
          <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;