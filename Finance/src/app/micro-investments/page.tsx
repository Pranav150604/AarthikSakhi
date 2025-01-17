"use client";
import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
  VStack,
  SimpleGrid,
  Link,
  Image,
  Stack,
  Divider,
} from "@chakra-ui/react";

const LearningResources = () => {
  const [search, setSearch] = useState("");

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      minH="100vh"
      py={8}
      px={{ base: 4, md: 8 }}
    >
      {/* Hero Section */}
      <Box textAlign="center" mb={10}>
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          color={useColorModeValue("teal.600", "teal.300")}
        >
          Explore Investment Opportunities in India
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          mt={2}
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Learn more about micro-investments, stocks, and mutual funds in India. Start your investment journey today!
        </Text>
      </Box>

      {/* Search Bar */}
      <Box textAlign="center" mb={8}>
        <input
          type="text"
          placeholder="Search for a topic..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            maxWidth: "500px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            margin: "0 auto",
            display: "block",
          }}
        />
      </Box>

      {/* Tabs for Categories */}
      <Tabs variant="enclosed" colorScheme="teal">
        <TabList justifyContent="center">
          <Tab>Micro Investments</Tab>
          <Tab>Stocks</Tab>
          <Tab>Mutual Funds</Tab>
        </TabList>

        <TabPanels>
          {/* Micro Investments Section */}
          <TabPanel>
            <VStack spacing={8} align="stretch">
              <Heading fontSize="xl" color="teal.600">
                What are Micro Investments?
              </Heading>
              <Text color="gray.600" fontSize="lg">
                Micro-investing in India allows you to start investing with small amounts, typically through platforms that round off your purchases to the nearest rupee and invest the spare change in diversified assets such as stocks, bonds, or ETFs.
              </Text>

             

              <Box>
                <Heading fontSize="lg" color="teal.600" mb={4}>
                  Benefits of Micro Investments
                </Heading>
                <Text color="gray.600">- Start investing with minimal amounts of money.</Text>
                <Text color="gray.600">- Diversify your portfolio with fractional investments.</Text>
                <Text color="gray.600">- Flexible and accessible for beginners.</Text>
                <Text color="gray.600">- Helps develop good investment habits early.</Text>
              </Box>

              {/* Box for Investment Tips */}
              <Box
                p={5}
                bg={useColorModeValue("teal.50", "teal.700")}
                borderRadius="md"
                boxShadow="md"
              >
                <Heading fontSize="lg" color="teal.600" mb={4}>
                  Investment Tips
                </Heading>
                <Text color="gray.600">
                  - Start small, and gradually increase your investment as you gain confidence.
                </Text>
                <Text color="gray.600">
                  - Always research before investing. Use tools to track and optimize your portfolio.
                </Text>
                <Text color="gray.600">
                  - Avoid high-risk investments when you are just starting out.
                </Text>
              </Box>

              <Box mt={6}>
                <Heading fontSize="lg" color="teal.600" mb={4}>
                  Popular Micro Investment Platforms in India
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  <Box>
                    <Heading fontSize="md" color="teal.600">
                      Groww
                    </Heading>
                    <Text color="gray.600">
                      Groww allows you to start investing with as little as ₹100. It offers both mutual funds and stocks for investors and allows you to track your investments easily.
                    </Text>
                    <Link href="https://groww.in/" isExternal color="teal.400">
                      Learn more
                    </Link>
                  </Box>

                  <Box>
                    <Heading fontSize="md" color="teal.600">
                      Upstox
                    </Heading>
                    <Text color="gray.600">
                      Upstox is a popular stockbroker platform in India offering micro-investing features. You can start with small amounts and invest in equity and mutual funds.
                    </Text>
                    <Link href="https://www.upstox.com/" isExternal color="teal.400">
                      Learn more
                    </Link>
                  </Box>
                </SimpleGrid>
              </Box>
            </VStack>
          </TabPanel>

          {/* Stocks Section */}
          <TabPanel>
            <VStack spacing={8} align="stretch">
              <Heading fontSize="xl" color="teal.600">
                All About Stocks in India
              </Heading>
              <Text color="gray.600" fontSize="lg">
                Stocks represent ownership in a company. In India, you can buy stocks through various stock exchanges like the Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE).
              </Text>

              {/* Image for Stocks */}
              <Box textAlign="center">
                <Image
                  src="images/4.png"
                  alt="Stock Market"
                  borderRadius="md"
                  boxSize="100%"
                  maxWidth="400px"
                />
              </Box>

              <Box>
                <Heading fontSize="lg" color="teal.600" mb={4}>
                  How to Buy Stocks in India
                </Heading>
                <Text color="gray.600">- Open a Demat and Trading account with brokers like Zerodha, Angel One, or Upstox.</Text>
                <Text color="gray.600">- Research stocks using resources like Moneycontrol, NSE India, and BSE India.</Text>
                <Text color="gray.600">- Place buy orders for the stocks you are interested in through your brokerage platform.</Text>
              </Box>

              {/* Box for Stock Tips */}
              <Box
                p={5}
                bg={useColorModeValue("teal.50", "teal.700")}
                borderRadius="md"
                boxShadow="md"
              >
                <Heading fontSize="lg" color="teal.600" mb={4}>
                  Stock Market Tips
                </Heading>
                <Text color="gray.600">
                  - Diversify your portfolio by investing in multiple sectors.
                </Text>
                <Text color="gray.600">
                  - Monitor your investments regularly, but avoid panic selling.
                </Text>
                <Text color="gray.600">
                  - Stick to long-term investing to benefit from compounding.
                </Text>
              </Box>

              <Box mt={6}>
                <Heading fontSize="lg" color="teal.600" mb={4}>
                  Popular Stock Market Websites in India
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  <Box>
                    <Heading fontSize="md" color="teal.600">
                      Moneycontrol
                    </Heading>
                    <Text color="gray.600">
                      Moneycontrol provides up-to-date stock market news, prices, and analysis, focusing on Indian stocks.
                    </Text>
                    <Link href="https://www.moneycontrol.com/" isExternal color="teal.400">
                      Visit Moneycontrol
                    </Link>
                  </Box>

                  <Box>
                    <Heading fontSize="md" color="teal.600">
                      NSE India
                    </Heading>
                    <Text color="gray.600">
                      NSE India is the official website of the National Stock Exchange of India, offering detailed data on stocks, indices, and corporate actions.
                    </Text>
                    <Link href="https://www.nseindia.com/" isExternal color="teal.400">
                      Visit NSE India
                    </Link>
                  </Box>
                </SimpleGrid>
              </Box>
            </VStack>
          </TabPanel>

          {/* Mutual Funds Section */}
          <TabPanel>
            <VStack spacing={8} align="stretch">
              <Heading fontSize="xl" color="teal.600">
                Mutual Funds in India
              </Heading>
              <Text color="gray.600" fontSize="lg">
                Mutual funds pool money from multiple investors and invest in a diversified portfolio of stocks, bonds, and other securities. In India, mutual funds can be bought via platforms like Groww, Zerodha Coin, and others.
              </Text>

              {/* Image for Mutual Funds */}
              <Box textAlign="center">
                <Image
                  src="images/5.png"
                  alt="Mutual Funds"
                  borderRadius="md"
                  boxSize="100%"
                  maxWidth="400px"
                />
              </Box>

              <Box>
                <Heading fontSize="lg" color="teal.600" mb={4}>
                  How Mutual Funds Work in India
                </Heading>
                <Text color="gray.600">
                  Mutual funds in India allow investors to pool money into a fund managed by professionals who invest in a variety of assets.
                </Text>
                <Text color="gray.600">
                  Popular options include equity funds, debt funds, hybrid funds, and sector-specific funds.
                </Text>
              </Box>

              {/* Box for Fund Tips */}
              <Box
                p={5}
                bg={useColorModeValue("teal.50", "teal.700")}
                borderRadius="md"
                boxShadow="md"
              >
                <Heading fontSize="lg" color="teal.600" mb={4}>
                  Mutual Fund Tips
                </Heading>
                <Text color="gray.600">
                  - Consider index funds for low-cost investing.
                </Text>
                <Text color="gray.600">
                  - Keep an eye on the expense ratio, as higher fees can impact long-term returns.
                </Text>
                <Text color="gray.600">
                  - Invest in mutual funds based on your risk appetite and financial goals.
                </Text>
              </Box>

              <Box mt={6}>
                <Heading fontSize="lg" color="teal.600" mb={4}>
                  Resources for Learning More
                </Heading>
                <ul>
                  <li>
                    <Link href="https://www.moneycontrol.com/mutual-funds/" isExternal color="teal.400">
                      Mutual Funds Guide on Moneycontrol
                    </Link>
                  </li>
                  <li>
                    <Link href="https://groww.in/mutual-funds" isExternal color="teal.400">
                      Groww - Learn about Mutual Funds
                    </Link>
                  </li>
                </ul>
              </Box>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default LearningResources;
