import { Container, Divider, Stack, Center } from "@chakra-ui/react";
import { NewTodo, TodoViewer } from "./components";

function App() {
  return (
    <Container>
      <Center h="100vh">
        <Stack spacing={4}>
          <NewTodo />
          <TodoViewer />
          <Divider />
        </Stack>
      </Center>
    </Container>
  );
}

export default App;
