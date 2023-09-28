import React, { Component, MouseEvent, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  Checkbox,
  Stack,
  Button,
  Box,
  Flex,
  Heading,
  Input,
  Divider,
  Text,
  Image,
  Grid,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { fetchData } from "./api/cakeApi";

interface HomeProps {} // Tambahkan props jika diperlukan

interface HomeState {
  selectedCheckboxes: string[];
  foodsCheckboxVisibility: boolean; // Properti untuk checkbox di bawah "Foods"
  tagsCheckboxVisibility: boolean; // Properti untuk checkbox di bawah "Tags"
  menuData: {
    name: string;
    imageUrl: string;
    categories: string;
    description: string;
    badge: string;
  }[];
}

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      selectedCheckboxes: [],
      foodsCheckboxVisibility: true,
      tagsCheckboxVisibility: true,
      menuData: [],
    };
  }

  componentDidMount() {
    fetchData() // Mengambil data dari API menggunakan fungsi fetchData yang telah diimpor
      .then((data) => {
        this.setState({ menuData: data });
      });
  }

  toggleCheckboxVisibility = (section: keyof HomeState) => {
    this.setState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("dipilih: " + this.state.selectedCheckboxes.join(", "));
  };

  handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name;
    const isChecked = e.target.checked;

    this.setState((prevstate) => {
      if (isChecked) {
        return {
          selectedCheckboxes: [...prevstate.selectedCheckboxes, value],
        };
      } else {
        return {
          selectedCheckboxes: prevstate.selectedCheckboxes.filter(
            (checkbox) => checkbox !== value
          ),
        };
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Flex flexDir={{ base: 'column', md: 'row' }}>
          <Box
            w={{ base: '100%', md: '30%' }}
            position={{ base: 'relative', md: 'fixed' }}
            top="0"
            left="0"
            height={{ base: 'auto', md: '100%' }}
            borderRight={{ base: 'none', md: '1px' }}
          >
            <Heading mt="50px" mb="10px" ml="10px" textAlign="center">
              Warmindo
            </Heading>
            <Divider width="90%" />
            <Stack direction="column" p="20px 50px 50px 50px" >
              <Flex>
                <Input placeholder="Cari menu makanan?" mb="10px" />
                <Button
                  colorScheme="brand"
                  variant="outline"
                  marginLeft="10px"
                  _hover={{
                    backgroundColor: "teal.500", // Change the background color on hover
                    color: "white",             // Change the text color on hover
                  }}
                  onClick={(e) => this.handleSubmit(e)}
                >
                  search
                </Button>
              </Flex>
              <Heading fontSize="20px">
                Category
                <Button
                  size="xs"
                  onClick={() => this.toggleCheckboxVisibility("foodsCheckboxVisibility")}
                  ml={2}
                  mb="10px"
                >
                  {this.state.foodsCheckboxVisibility ? (
                    <FontAwesomeIcon icon={faArrowUp} />
                  ) : (
                    <FontAwesomeIcon icon={faArrowDown} />
                  )}
                </Button>
              </Heading>
              {this.state.foodsCheckboxVisibility && (
                <>
                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="green"
                    type="checkbox"
                    name="Borgir"
                    onChange={this.handleCheckboxChange}
                  >
                    <Box color="black" p={1} w="180px" borderRadius="5px" _hover={{
                    backgroundColor: "teal.500", boxShadow:'dark-lg'
                  }}>
                    Borgir
                    </Box>
                  </Checkbox>

                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="green"
                    type="checkbox"
                    name="Bread"
                    onChange={this.handleCheckboxChange}
                  >
                   <Box color="black" p={1} w="180px" borderRadius="5px" _hover={{
                    backgroundColor: "teal.500",boxShadow:'dark-lg'
                  }}>
                    Bread
                    </Box>
                  </Checkbox>

                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="green"
                    type="checkbox"
                    name="Breakfast"
                    onChange={this.handleCheckboxChange}
                  >
                    <Box color="black" p={1} w="180px" borderRadius="5px" _hover={{
                    backgroundColor: "teal.500",boxShadow:'dark-lg'
                  }}>
                    BreakFast
                    </Box>
                  </Checkbox>

                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="green"
                    type="checkbox"
                    name="Cake"
                    onChange={this.handleCheckboxChange}
                  >
                    <Box color="black" p={1} w="180px" borderRadius="5px" _hover={{
                    backgroundColor: "teal.500",boxShadow:'dark-lg'
                  }}>
                    Cake
                    </Box>
                  </Checkbox>

                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="green"
                    type="checkbox"
                    name="Chocolate"
                    onChange={this.handleCheckboxChange}
                  >
                    <Box color="black" p={1} w="180px" borderRadius="5px" _hover={{
                    backgroundColor: "teal.500",boxShadow:'dark-lg'
                  }}>
                    Chocolate
                    </Box>
                  </Checkbox>

                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="green"
                    type="checkbox"
                    name="Desert"
                    onChange={this.handleCheckboxChange}
                  >
                   <Box color="black" p={1} w="180px" borderRadius="5px" _hover={{
                    backgroundColor: "teal.500",boxShadow:'dark-lg'
                  }}>
                    Desert
                    </Box>
                  </Checkbox>
                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="green"
                    type="checkbox"
                    name="Fries"
                    onChange={this.handleCheckboxChange}
                  >
                   <Box color="black" p={1} w="180px" borderRadius="5px" _hover={{
                    backgroundColor: "teal.500",boxShadow:'dark-lg'
                  }}>
                    Fries
                    </Box>
                  </Checkbox>
                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="green"
                    type="checkbox"
                    name="Noodles"
                    onChange={this.handleCheckboxChange}
                  >
                   <Box color="black" p={1} w="180px" borderRadius="5px" _hover={{
                    backgroundColor: "teal.500",boxShadow:'dark-lg'
                  }}>
                    Noodles
                    </Box>
                  </Checkbox>
                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="green"
                    type="checkbox"
                    name="Sausage"
                    onChange={this.handleCheckboxChange}
                  >
                   <Box color="black" p={1} w="180px" borderRadius="5px" _hover={{
                    backgroundColor: "teal.500",boxShadow:'dark-lg'
                  }}>
                    Sausage
                    </Box>
                  </Checkbox>
                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="green"
                    type="checkbox"
                    name="Spicy"
                    onChange={this.handleCheckboxChange}
                  >
                   <Box color="black" p={1} w="180px" borderRadius="5px" _hover={{
                    backgroundColor: "teal.500",boxShadow:'dark-lg'
                  }}>
                    Spicy
                    </Box>
                  </Checkbox>
                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="green"
                    type="checkbox"
                    name="Sweet"
                    onChange={this.handleCheckboxChange}
                  >
                   <Box color="black" p={1} w="180px" borderRadius="5px" _hover={{
                    backgroundColor: "teal.500",boxShadow:'dark-lg'
                  }}>
                    Sweet
                    </Box>
                  </Checkbox>
                </>
              )}
              <Divider mt="10px" />
              <Heading fontSize="20px" mt="20px">
                Tags
                <Button
                  size="xs"
                  onClick={() => this.toggleCheckboxVisibility("tagsCheckboxVisibility")}
                  ml={2}
                  mb="10px"
                >
                  {this.state.tagsCheckboxVisibility ? (
                    <FontAwesomeIcon icon={faArrowUp} />
                  ) : (
                    <FontAwesomeIcon icon={faArrowDown} />
                  )}
                </Button>
              </Heading>
              {this.state.tagsCheckboxVisibility && (
                <>
                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="green"
                    type="checkbox"
                    name="Hot"
                    color={"red"}
                    onChange={this.handleCheckboxChange}
                  >
                   <Box color="black" p={1} w="180px" borderRadius="5px" _hover={{
                    backgroundColor: "red.500",boxShadow:'dark-lg'
                  }}>
                    Hot
                    </Box>
                  </Checkbox>
                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="green"
                    type="checkbox"
                    color={"blue"}
                    name="New"
                    onChange={this.handleCheckboxChange}
                  >
                   <Box color="black" p={1} w="180px" borderRadius="5px" _hover={{
                    backgroundColor: "green.500",boxShadow:'dark-lg'
                  }}>
                    New
                    </Box>
                  </Checkbox>
                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="green"
                    color={"green"}
                    type="checkbox"
                    name="Promo"
                    onChange={this.handleCheckboxChange}
                  >
                    <Box color="black" p={1} w="180px" borderRadius="5px" _hover={{
                    backgroundColor: "blue.500",boxShadow:'dark-lg'
                  }}>
                    Promo
                    </Box>
                  </Checkbox>
                </>
              )}
            </Stack>
          </Box>

          <Box w="100%" p="50px" ml={{ base: '0', md: '30%' }} bg="lightblue">
          <Heading mb="10px" ml="10px">
              Favorite
            </Heading>
            <Divider w={{ base: '100%', md: 'none' }} mb={{ base: '20px', md: 'none' }}/>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
              {this.state.menuData.map((item, index) => (
                <Card key={index} maxW="sm">
                  <CardBody boxShadow='dark-lg'>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          padding: "0px 10px",
                          marginTop: "-10px",
                          position: "absolute",
                          backgroundColor: "#186F65",
                          borderRadius: "5px",
                          color:"white",
                          fontWeight: "bold"
                        }}
                      >
                        {item.badge}
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                      }}
                    >
                      <Image
                        src={item.imageUrl}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                        w="100%"
                        h="100%"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{item.name}</Heading>
                      <Text color="blue.600" fontSize="sm">
                        {item.categories}
                      </Text>
                      <div>
                        <Text fontSize="sm">{item.description}</Text>
                      </div>
                    </Stack>
                  </CardBody>
                </Card>
              ))}
            </Grid>
          </Box>
        </Flex>
      </React.Fragment>
    );
  }
}

export default Home;
