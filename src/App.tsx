import { Component } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <ChakraProvider  >
        <>
          <Home />
        </>
      </ChakraProvider>
    );
  }
}

export default App;