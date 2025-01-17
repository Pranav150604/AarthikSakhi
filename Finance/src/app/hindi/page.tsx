'use client'

import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage, resetChat, getChatHistory } from '@/store/chatSlice';
import { useToast } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import LandingPage from '../../components/LandingPage';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Textarea,
  Button,
  Flex,
  Spinner,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { AppDispatch, RootState } from '@/store';
import OptionButtons from '../../components/OptionButtons';
import TypewriterText from '../../components/Typewriter';

const MotionBox = motion(Box as any);
const MotionFlex = motion(Flex as any);
const MotionIconButton = motion(IconButton as any);

export default function Page1() {
  const dispatch = useDispatch<AppDispatch>();
  const chatState = useSelector((state: RootState) => state.chat);
  const { loading } = chatState;  // Removed 'error' here
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentTopic, setCurrentTopic] = useState<string | null>(null);
  const [localMessages, setLocalMessages] = useState<Array<{ role: string; content: string }>>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);

  const toast = useToast();

  const bgColor = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const accentColor = useColorModeValue('blue.500', 'blue.300');
  const optionsBgColor = useColorModeValue('gray.50', 'gray.800');
  const userBgColor = 'white';
  const userTextColor = 'black';
  const assistantBgColor = 'gray.100';
  const assistantTextColor = 'black';

  useEffect(() => {
    if (user) {
      const isFreshLogin = sessionStorage.getItem('isFreshLogin') === 'true';
      if (isFreshLogin) {
        setLocalMessages([]);
        dispatch(resetChat());
      } else {
        const fetchChatHistory = async () => {
          try {
            const history = await dispatch(getChatHistory()).unwrap();
            setLocalMessages(history);
          } catch (error) {
            console.error('Failed to fetch chat history:', error);
            toast({
              title: "Error Loading Chat History",
              description: "Could not load your chat history. Starting fresh chat.",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        };
        fetchChatHistory();
      }
    }
  }, [dispatch, user]);

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(!isAtBottom);
    }
  };

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.addEventListener('scroll', handleScroll);
      return () => chatContainer.removeEventListener('scroll', handleScroll);  
    }
  }, []);

  useEffect(() => {
    if (chatContainerRef.current && !showScrollButton) {
      scrollToBottom();
    }
  }, [localMessages, isTyping]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({  
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'  
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (newMessage.trim()) {
      const userMessage = { role: 'user', content: newMessage };
      setLocalMessages(prev => [...prev, userMessage]);
      setNewMessage('');
      setIsTyping(true);
      sessionStorage.removeItem('isFreshLogin'); // Clear the flag
      try {
        const response = await dispatch(sendMessage({ message: userMessage.content, area: currentTopic || 'general' })).unwrap();
        setIsTyping(false);
        setLocalMessages(prev => [...prev, { role: 'assistant', content: response }]);
      } catch (error) {
        console.error('Error sending message:', error);
        setIsTyping(false);
        toast({
          title: "Message Not Sent",
          description: "We couldn't send your message. Please try again later or refresh the page.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();  
    }
  };

  const handleSelectOption = (option: string) => {
    setCurrentTopic(option);
    setNewMessage(`आइए हम ${option} पर चर्चा करें`);
  };

  const handleNewChat = () => {
    dispatch(resetChat());
    setLocalMessages([]);
    setCurrentTopic(null);
    setNewMessage('');
  };

  if (!user) {
    return <LandingPage />;
  }

  return (
    <Box 
      bg={bgColor} 
      color={textColor} 
      height="calc(100vh - 150px - 120px)"
      position="fixed"
      top="70px"
      left="0"
      right="0"
      overflow="hidden"
      zIndex={1}
    >
      <Container maxW="800px" h="100%" position="relative">
        {localMessages.length === 0 ? (
          <Flex direction="column" align="center" justify="center" h="100%" py={8}>
            <VStack spacing={6} mb={8}>
              <Heading size="lg"  mt={10} textAlign="center">आर्थिकसखी में आपका स्वागत है</Heading>
              <TypewriterText
                text="मैं आपका डिजिटल ट्विन हूँ। मैं आपकी कैसे मदद कर सकता हूँ?"
                fontSize="xl"
                fontWeight="medium"
                textAlign="center"
              />
            </VStack>

            <Box w="full" maxW="700px">
              <form onSubmit={handleSendMessage}>
                <Flex mb={6}>
                  <Textarea
                    value={newMessage}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="यहां अपना संदेश टाइप करें..."
                    mr={2}
                    rows={1}
                    resize="none"
                    borderRadius="2xl"
                    border="none"
                    boxShadow="1px 1px 1px 2px rgba(0,0,0,0.1)"
                    py={3}
                    _focus={{
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      outline: "none",
                      border: "none"
                    }}
                    _hover={{
                      boxShadow: "0 3px 6px rgba(0,0,0,0.1)"
                    }}
                  />
                  <Button
                    type="submit"
                    colorScheme="blue"
                    bg={accentColor}
                    color="white"
                    isLoading={loading}
                    borderRadius="2xl"
                    px={6}
                  >
                    भेजें
                  </Button>
                </Flex>
              </form>

              <Box 
                bg={"white"} 
                p={6} 
                borderRadius="2xl" 
              >
                <OptionButtons onSelectOption={handleSelectOption} />
              </Box>
            </Box>
          </Flex>
        ) : (
          <Flex direction="column" h="100%" position="relative">
                {/* Chat Messages Display in Hindi goes here */}
            </Flex>
        )}
      </Container>
    </Box>
  );
}
