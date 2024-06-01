import React, { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Select, Box, IconButton, useToast } from "@chakra-ui/react";
import { FaTrain } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [destination, setDestination] = useState("");
  const [tickets, setTickets] = useState([]);
  const toast = useToast();

  const handleBooking = () => {
    if (!name || !age || !gender || !destination) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newTicket = { name, age, gender, destination };
    setTickets([...tickets, newTicket]);
    setName("");
    setAge("");
    setGender("");
    setDestination("");

    toast({
      title: "Success",
      description: "Ticket booked successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack spacing={2}>
          <FaTrain size="2em" />
          <Text fontSize="2xl">Train Ticket Booking System</Text>
        </HStack>
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        <Select placeholder="Select Gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
        <Input placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
        <Button colorScheme="teal" onClick={handleBooking}>
          Book Ticket
        </Button>
        <Box width="100%" mt={4}>
          <Text fontSize="xl" mb={2}>
            Booked Tickets
          </Text>
          {tickets.map((ticket, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" mb={2}>
              <Text>
                <strong>Name:</strong> {ticket.name}
              </Text>
              <Text>
                <strong>Age:</strong> {ticket.age}
              </Text>
              <Text>
                <strong>Gender:</strong> {ticket.gender}
              </Text>
              <Text>
                <strong>Destination:</strong> {ticket.destination}
              </Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
