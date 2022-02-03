import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { 
    Flex, Heading, Avatar, AvatarGroup, Text, Icon, IconButton, Table, Thead, Tbody, 
    Tr, Th, Td, Divider, Link, Box, Button, Input, InputGroup, InputLeftElement, Tab
    } from '@chakra-ui/react'; 

import { 
    FiHome, FiPieChart, FiDollarSign, FiBox, FiCalendar, FiChevronDown, FiChevronUp, 
    FiPlus, FiCreditCard, FiSearch, FiBell
    } from 'react-icons/fi'; 
import MyChart from '../myComponents/MyChart';

export default function Home() {

  const [display,setDisplay] = useState(false);
  const [value, changeValue] = useState(1);

  return (
    <div>
      <Head>
        <title>DeFi Dashboard</title>
        <meta name="description" content="This is a DeFi Dashboard UI built with the component level CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex h={[null,null,"100vh"]} overflow='hidden' flexDir={["column","column","row"]}>
        {/* First Column */}
        <Flex w={["100%","100%","10%","15%","15%"]} flexDir='column' alignItems='center' backgroundColor='#020202' color='#ffffff'>
          <Flex flexDir='column' justifyContent='space-between' h={[null,null,"100vh"]}>
            <Flex flexDir='column' as='nav'>
              <Heading
                mt={50} mb={100} fontSize='4xl' alignSelf='center' letterSpacing='tight'
              >
                DeFi.
              </Heading>
              {/* Icons */}
              <Flex 
              flexDir={['row','row','column','column','column']} 
              align={['center','center','center','flex-start','flex-start']} justifyContent='center'
              >
                {/* Home */}
                <Flex className={styles.leftContainerItem} mr={[2, 3, 0, 0, 0]}>
                  <Link display={["center","center","center","flex-start","flex-start"]}>
                    <Icon className={styles.leftContainerActiveIcon} as={FiHome} fontSize='2xl'></Icon>
                  </Link>
                  <Link _hover={{ textDecor: 'none' }} display={["flex","flex","none","flex","flex"]}>
                    <Text className={styles.leftContainerActiveText}>Home</Text>
                  </Link>
                </Flex>
                {/* Home Ends */}

                {/* Credit */}
                <Flex className={styles.leftContainerItem} mr={[2, 3, 0, 0, 0]}>
                  <Link display={["center","center","center","flex-start","flex-start"]}>
                    <Icon as={FiPieChart} fontSize='2xl'></Icon>
                  </Link>
                  <Link _hover={{ textDecor: 'none' }} display={["flex","flex","none","flex","flex"]}>
                    <Text>Credit</Text>
                  </Link>
                </Flex>
                {/* Credit Ends */}

                {/* Wallet */}
                <Flex className={styles.leftContainerItem} mr={[2, 3, 0, 0, 0]}>
                  <Link display={["center","center","center","flex-start","flex-start"]}>
                    <Icon as={FiDollarSign} fontSize='2xl'></Icon>
                  </Link>
                  <Link _hover={{ textDecor: 'none' }} display={["flex","flex","none","flex","flex"]}>
                    <Text>Wallet</Text>
                  </Link>
                </Flex>
                {/* Wallet Ends */}

                {/* Services */}
                <Flex className={styles.leftContainerItem}>
                  <Link display={["center","center","center","flex-start","flex-start"]}>
                    <Icon as={FiBox} fontSize='2xl'></Icon>
                  </Link>
                  <Link _hover={{ textDecor: 'none' }} display={["flex","flex","none","flex","flex"]}>
                    <Text>Services</Text>
                  </Link>
                </Flex>
                {/* Services Ends */}
              </Flex>
              {/* Icons Ends */}
            </Flex>
            <Flex mb={10} mt={5} flexDir='column' alignItems='center'>
              <Avatar my={2} src='manhoodie.png'></Avatar>
              <Text textAlign='center'>Mohit Kothari</Text>
            </Flex>
          </Flex>
        </Flex>
        {/* First Column Ends Here */}

        {/* Second Column */}
        <Flex w={["100%","100%","60%","60%","55%"]} p='3%' flexDir='column' overflow='auto' minHeight='100vh'>
          <Heading fontWeight='normal' mb={4} letterSpacing='tight'>Welcome back, <Flex fontWeight='bold' display='inline-flex'>Mohit</Flex></Heading>
          <Text color='gray' fontSize='sm'>My Balance</Text>
          <Text fontWeight='bold' fontSize='1xl'>$5,987.25</Text>
          <MyChart></MyChart>
          
          <Flex justifyContent='space-between' mt={8}>
            <Flex alignItems='flex-end'>
              <Heading as='h2' size='large' letterSpacing='tight'>Transactions</Heading>
              <Text fontSize='small' color='gray' ml={4}>Mar 2022</Text>
            </Flex>
            <IconButton icon={<FiCalendar></FiCalendar>}></IconButton>
          </Flex>

          <Flex flexDir='column'>
            <Flex overflow='auto'>
              <Table variant='unstyled' mt={4}>
                <Thead>
                  <Tr color='gray'>
                    <Th>Transaction</Th>
                    <Th>Category</Th>
                    <Th isNumeric>Cashback</Th>
                    <Th isNumeric>Amount</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Flex align='center'>
                        <Avatar size='sm' mr={2} src='amazon.jpeg'></Avatar>
                        <Flex flexDir='column'>
                          <Heading size='sm' letterSpacing='tight'>Amazon</Heading>
                          <Text fontSize='sm' color='gray'>Mar 25, 2022 at 1:04pm</Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Electronic Devices</Td>
                    <Td isNumeric>+5$</Td>
                    <Td isNumeric><Text fontWeight='bold' display='inline-table'>-$197</Text>.00</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align='center'>
                        <Avatar size='sm' mr={2} src='starbucks.png'></Avatar>
                        <Flex flexDir='column'>
                          <Heading size='sm' letterSpacing='tight'>Starbucks</Heading>
                          <Text fontSize='sm' color='gray'>Mar 21, 2022 at 9:00am</Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Electronic Devices</Td>
                    <Td isNumeric>+8$</Td>
                    <Td isNumeric><Text fontWeight='bold' display='inline-table'>-$250</Text>.00</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align='center'>
                        <Avatar size='sm' mr={2} src='youtube.png'></Avatar>
                        <Flex flexDir='column'>
                          <Heading size='sm' letterSpacing='tight'>YouTube</Heading>
                          <Text fontSize='sm' color='gray'>Mar 15, 2022 at 5:30pm</Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Electronic Devices</Td>
                    <Td isNumeric>+2$</Td>
                    <Td isNumeric><Text fontWeight='bold' display='inline-table'>-$100</Text>.00</Td>
                  </Tr>
                  {display === true && 
                  <>
                                    <Tr>
                    <Td>
                      <Flex align='center'>
                        <Avatar size='sm' mr={2} src='amazon.jpeg'></Avatar>
                        <Flex flexDir='column'>
                          <Heading size='sm' letterSpacing='tight'>Amazon</Heading>
                          <Text fontSize='sm' color='gray'>Mar 25, 2022 at 1:04pm</Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Electronic Devices</Td>
                    <Td isNumeric>+5$</Td>
                    <Td isNumeric><Text fontWeight='bold' display='inline-table'>-$197</Text>.00</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align='center'>
                        <Avatar size='sm' mr={2} src='starbucks.png'></Avatar>
                        <Flex flexDir='column'>
                          <Heading size='sm' letterSpacing='tight'>Starbucks</Heading>
                          <Text fontSize='sm' color='gray'>Mar 21, 2022 at 9:00am</Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Electronic Devices</Td>
                    <Td isNumeric>+8$</Td>
                    <Td isNumeric><Text fontWeight='bold' display='inline-table'>-$250</Text>.00</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align='center'>
                        <Avatar size='sm' mr={2} src='youtube.png'></Avatar>
                        <Flex flexDir='column'>
                          <Heading size='sm' letterSpacing='tight'>YouTube</Heading>
                          <Text fontSize='sm' color='gray'>Mar 15, 2022 at 5:30pm</Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Electronic Devices</Td>
                    <Td isNumeric>+2$</Td>
                    <Td isNumeric><Text fontWeight='bold' display='inline-table'>-$100</Text>.00</Td>
                  </Tr>
                  </>
                  }
                </Tbody>
              </Table>
            </Flex>
            <Flex align='center'>
              <Divider></Divider>
              <IconButton icon={display === true ? <FiChevronUp></FiChevronUp> : <FiChevronDown></FiChevronDown>} onClick={() => {
                if (display === true) {
                  setDisplay(false);
                } else {
                  setDisplay(true);
                }
              } }></IconButton>
              <Divider></Divider>
            </Flex>
          </Flex>
        </Flex>
        {/* Second Column Ends Here */}

        {/* Third Column */}
        <Flex w={["100%", "100%", "30%"]}
                bgColor="#F5F5F5" p="3%"
                flexDir="column"
                overflow="auto"
                minW={[null, null, "300px", "300px", "400px"]}
            >
                <Flex alignContent="center">
                    <InputGroup bgColor="#ffffff" mb={4} border="none" borderColor="#ffffff" borderRadius="10px" mr={2}>
                        <InputLeftElement pointerEvents="none" >
                          <FiSearch color="gray" />
                        </InputLeftElement>
                        <Input type="number" placeholder="Search" borderRadius="10px" />
                    </InputGroup>
                    <IconButton icon={<FiBell />} fontSize="sm" bgColor="#ffffff" borderRadius="50%" p="10px" />
                    <Flex
                        w={30} h={25} bgColor="tomato" borderRadius="50%" color="#ffffff" align="center" justify="center" ml="-3"
                        mt="-2" zIndex="100" fontSize="xs"
                    >
                        2
                    </Flex>
                </Flex>
                <Heading letterSpacing="tight">My Cards</Heading>
                {value == 1 &&
                    <Box
                        borderRadius="25px" mt={4} w="100%" h="200px"
                        bgGradient="linear(to-t, #B57295, #29259A)"
                    >
                        <Flex p="1em" color="#ffffff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Current Balance</Text>
                                    <Text fontWeight="bold" fontSize="xl">$9,780.20</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={FiCreditCard} />
                                    <Text>DeFi.</Text>
                                </Flex>
                            </Flex>
                            <Text mb={4}>**** **** **** 1289</Text>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                                        <Text fontSize="lg">12/23</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                        <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                                        <Text fontSize="lg">***</Text>
                                    </Flex>
                                </Flex>
                                <Icon as={FiCreditCard} />
                            </Flex>
                        </Flex>
                    </Box>
                }
                {value == 2 &&
                    <Box
                        borderRadius="25px"
                        mt={4}
                        w="100%"
                        h="200px"
                        bgGradient="linear(to-t, yellow.300, blue.500)"
                    >
                        <Flex p="1em" color="#ffffff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Current Balance</Text>
                                    <Text fontWeight="bold" fontSize="xl">$1,000.00</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={FiCreditCard} />
                                    <Text>DeFi.</Text>
                                </Flex>
                            </Flex>
                            <Text mb={4}>**** **** **** 8956</Text>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                                        <Text fontSize="lg">9/24</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                        <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                                        <Text fontSize="lg">***</Text>
                                    </Flex>
                                </Flex>
                                <Icon as={FiCreditCard} />
                            </Flex>
                        </Flex>
                    </Box>
                }
                {value == 3 &&
                    <Box
                        borderRadius="25px"
                        mt={4}
                        w="100%"
                        h="200px"
                        bgGradient="linear(to-t, orange.300, pink.600)"
                    >
                        <Flex p="1em" color="#ffffff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Current Balance</Text>
                                    <Text fontWeight="bold" fontSize="xl">$2,150.72</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={FiCreditCard} />
                                    <Text>DeFi.</Text>
                                </Flex>
                            </Flex>
                            <Text mb={4}>**** **** **** 8353</Text>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                                        <Text fontSize="lg">11/22</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                        <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                                        <Text fontSize="lg">***</Text>
                                    </Flex>
                                </Flex>
                                <Icon as={FiCreditCard} />
                            </Flex>
                        </Flex>
                    </Box>
                }
                <Flex justifyContent="center" mt={2}>
                    <Button bgColor={value == 1 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => changeValue(1)} />
                    <Button bgColor={value == 2 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => changeValue(2)} />
                    <Button bgColor={value == 3 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => changeValue(3)} />
                </Flex>
                <Flex flexDir="column" my={4}>
                    <Flex justify="space-between" mb={2}>
                        <Text>Balance</Text>
                        <Text fontWeight="bold">$140.42</Text>
                    </Flex>
                    <Flex justify="space-between">
                        <Text>Credit Limit</Text>
                        <Text fontWeight="bold">$150.00</Text>
                    </Flex>
                </Flex>
                <Heading letterSpacing="tight" size="md" my={4}>Send money to</Heading>
                <Flex>
                    <AvatarGroup size="md" max={3}>
                        <Avatar src="man.png" />
                        <Avatar src="womanhoodie.png" />
                        <Avatar src="woman.png" />
                        <Avatar src="woman.png" />
                        <Avatar src="woman.png" />
                    </AvatarGroup>
                    <Avatar icon={<FiPlus />} ml={2} color="#ffffff" bgColor="gray.300" />
                </Flex>
                <Text color="gray" mt={10} mb={2}>Card number</Text>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" >
                      <FiCreditCard color="gray.700" />
                    </InputLeftElement>
                    <Input type="number" placeholder="xxxx xxxx xxxx xxxx" />
                </InputGroup>
                <Text color="gray" mt={4} mb={2}>Sum</Text>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                    <FiDollarSign color="gray.700" />
                    </InputLeftElement>
                    <Input type="number" placeholder="130.00" />
                </InputGroup>
                <Button mt={4} bgColor="blackAlpha.900" color="#ffffff" p={7} borderRadius={15}>Send money</Button>
        </Flex>
        {/* Third Column Ends Here */}
      </Flex>
    </div>
  )
}
