


// "use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "@/store/authSlice";
// import {
//   Box,
//   Flex,
//   Heading,
//   Button,
//   HStack,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   IconButton,
//   Input,
//   VStack,
//   Text,
//   useColorModeValue,
//   useToast,
// } from "@chakra-ui/react";
// import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
// import { RootState, AppDispatch } from "@/store";
// import { useState } from "react";

// const indianLanguages = [
//   "English",
//   "Hindi",
//   "Bengali",
//   "Telugu",
//   "Marathi",
//   "Tamil",
//   "Gujarati",
//   "Urdu",
//   "Kannada",
//   "Odia",
//   "Malayalam",
//   "Punjabi",
//   "Assamese",
// ];

// export default function NavBar() {
//   const dispatch = useDispatch<AppDispatch>();
//   const router = useRouter();
//   const { user } = useSelector((state: RootState) => state.auth);
//   const toast = useToast();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedLanguage, setSelectedLanguage] = useState("English");

//   const handleLogout = async () => {
//     await dispatch(logout());
//     router.push("/");
//     toast({
//       title: "Logged Out",
//       description: "You have been successfully logged out.",
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//   const handleLanguageSelect = (language: string) => {
//     setSelectedLanguage(language);
//     toast({
//       title: `Language Changed`,
//       description: `You have selected ${language}`,
//       status: "info",
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//   const filteredLanguages = indianLanguages.filter((lang) =>
//     lang.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <Box w="100%">
//       <Flex
//         bg={useColorModeValue("white", "gray.800")}
//         color={useColorModeValue("gray.600", "white")}
//         minH={"60px"}
//         py={{ base: 2 }}
//         px={{ base: 4, md: 60 }}
//         borderBottom={1}
//         borderStyle={"solid"}
//         borderColor={useColorModeValue("gray.200", "gray.900")}
//         align={"center"}
//         justify={"space-between"}
//         w="100%"
//       >
//         {/* Logo */}
//         <Heading
//           as={Link}
//           href={"/"}
//           fontSize={"3xl"}
//           fontFamily={"heading"}
//           color={useColorModeValue("gray.800", "white")}
//           fontWeight={"bold"}
//         >
//           AarthikSakhi
//         </Heading>

//         {/* Navigation Links */}
//         <HStack spacing={4}>
//           {user && (
//             <>
//               <Button
//                 onClick={() => router.push("/financial-snapshot")}
//                 fontSize={"sm"}
//                 fontWeight={400}
//                 variant={"ghost"}
//               >
//                 Snapshot
//               </Button>
//               <Button
//                 onClick={() => router.push("/goals")}
//                 fontSize={"sm"}
//                 fontWeight={400}
//                 variant={"ghost"}
//               >
//                 Goals
//               </Button>
//               <Button
//                 onClick={() => router.push("/profile")}
//                 fontSize={"sm"}
//                 fontWeight={400}
//                 variant={"ghost"}
//               >
//                 Profile
//               </Button>

//               {/* Language Dropdown */}
//               <Menu>
//                 <MenuButton
//                   as={Button}
//                   rightIcon={<ChevronDownIcon />}
//                   fontSize={"sm"}
//                   fontWeight={400}
//                   variant={"ghost"}
//                 >
//                   Language
//                 </MenuButton>
//                 <MenuList p={4}>
//                   {/* Search Field */}
//                   <Input
//                     placeholder="Search Languages"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     size="sm"
//                     mb={2}
//                     focusBorderColor="teal.400"
//                   />
//                   <VStack align="start" spacing={2}>
//                     {filteredLanguages.map((lang) => (
//                       <MenuItem
//                         key={lang}
//                         onClick={() => handleLanguageSelect(lang)}
//                       >
//                         {lang}
//                       </MenuItem>
//                     ))}
//                     {filteredLanguages.length === 0 && (
//                       <Text fontSize="sm" color="gray.500">
//                         No languages found
//                       </Text>
//                     )}
//                   </VStack>
//                 </MenuList>
//               </Menu>

//               <Button
//                 onClick={handleLogout}
//                 fontSize={"sm"}
//                 fontWeight={400}
//                 variant={"ghost"}
//               >
//                 Logout
//               </Button>
//             </>
//           )}
//           {!user && (
//             <>
//               <Button
//                 as={Link}
//                 href="/login"
//                 fontSize={"sm"}
//                 fontWeight={400}
//                 variant={"ghost"}
//               >
//                 Sign In
//               </Button>
//               <Button
//                 as={Link}
//                 href="/register"
//                 fontSize={"sm"}
//                 fontWeight={600}
//                 color={"white"}
//                 bg={"black"}
//                 _hover={{
//                   bg: "gray.700",
//                 }}
//               >
//                 Sign Up
//               </Button>
//             </>
//           )}
//         </HStack>
//       </Flex>
//     </Box>
//   );
// }

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/authSlice";
import {
  Box,
  Flex,
  Heading,
  Button,
  HStack,
  useColorModeValue,
  useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  VStack,
  Text, // <-- Make sure to import Text from Chakra UI
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { RootState, AppDispatch } from "@/store";
import { useState } from "react";

const indianLanguages = [
  "English",
  "Hindi",
  "Bengali",
  "Telugu",
  "Marathi",
  "Tamil",
  "Gujarati",
  "Urdu",
  "Kannada",
  "Odia",
  "Malayalam",
  "Punjabi",
  "Assamese",
];

export default function NavBar() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.auth);
  const toast = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = async () => {
    await dispatch(logout());
    router.push("/");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleNavigation = (path: string) => {
    if (user && !user.onboardingCompleted) {
      toast({
        title: "Onboarding Required",
        description:
          "Please complete your onboarding before accessing this feature.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      router.push("/onboarding");
    } else {
      router.push(path);
    }
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    toast({
      title: `Language Changed`,
      description: `You have selected ${language}`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    if (language === "Hindi") {
      // Navigate to the Hindi page
      router.push("/hindi");
    }
  };

  const filteredLanguages = indianLanguages.filter((lang) =>
    lang.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box w="100%">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4, md: 60 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify={"space-between"}
        w="100%"
      >
        {/* Language Dropdown - Placed first */}
        

        {/* Logo */}
        <Heading
          as={Link}
          href={"/"}
          fontSize={"3xl"}
          fontFamily={"heading"}
          color={useColorModeValue("gray.800", "white")}
          fontWeight={"bold"}
        >
          AarthikSakhi
        </Heading>

        {/* Navigation Links */}
        <HStack spacing={4}>
          {user && (
            <>
              <Button
                onClick={() => handleNavigation("/financial-snapshot")}
                fontSize={"sm"}
                fontWeight={400}
                variant={"ghost"}
              >
                Snapshot
              </Button>
              <Button
                onClick={() => handleNavigation("/goals")}
                fontSize={"sm"}
                fontWeight={400}
                variant={"ghost"}
              >
                Goals
              </Button>
              <Button
                onClick={() => handleNavigation("/profile")}
                fontSize={"sm"}
                fontWeight={400}
                variant={"ghost"}
              >
                Profile
              </Button>

              {/* Dropdown Menu */}
              <Menu>
  <MenuButton
    as={Button}
    rightIcon={<ChevronDownIcon />}
    fontSize={"sm"}
    fontWeight={400}
    variant={"ghost"}
  >
    More
  </MenuButton>
  <MenuList>
    <MenuItem onClick={() => handleNavigation("/Community-Section")}>
      Community & Mentors
    </MenuItem>
    <MenuItem onClick={() => handleNavigation("/Financial-Schemes")}>
      Financial Schemes
    </MenuItem>
    <MenuItem onClick={() => handleNavigation("/learning-resources")}>
      Learning Resources
    </MenuItem>
    <MenuItem onClick={() => handleNavigation("/Tax-Planning")}>
      Tax Planning
    </MenuItem>
    <MenuItem onClick={() => handleNavigation("/voice-chat")}>
      Voice Chat
    </MenuItem>
    
    {/* Add the new options here */}
    <MenuItem onClick={() => handleNavigation("/banking-options")}>
      Banking Options
    </MenuItem>
    <MenuItem onClick={() => handleNavigation("/micro-investments")}>
      Micro Investments
    </MenuItem>
  </MenuList>
</Menu>


              <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            fontSize={"sm"}
            fontWeight={400}
            variant={"ghost"}
          >
            Language
          </MenuButton>
          <MenuList p={4}>
            <Input
              placeholder="Search Languages"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="sm"
              mb={2}
              focusBorderColor="teal.400"
            />
            <VStack align="start" spacing={2}>
              {filteredLanguages.map((lang) => (
                <MenuItem key={lang} onClick={() => handleLanguageSelect(lang)}>
                  {lang}
                </MenuItem>
              ))}
              {filteredLanguages.length === 0 && (
                <Text fontSize="sm" color="gray.500">
                  No languages found
                </Text>
              )}
            </VStack>
          </MenuList>
        </Menu>
              <Button
                onClick={handleLogout}
                fontSize={"sm"}
                fontWeight={400}
                variant={"ghost"}
              >
                Logout
              </Button>
            </>
          )}
          {!user && (
            <>
              <Button
                as={Link}
                href="/login"
                fontSize={"sm"}
                fontWeight={400}
                variant={"ghost"}
              >
                Sign In
              </Button>
              <Button
                as={Link}
                href="/register"
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"black"}
                _hover={{
                  bg: "gray.700",
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </HStack>
      </Flex>
    </Box>
  );
}
