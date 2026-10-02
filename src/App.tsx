import { initialBooks } from "./data/books";
import BookList from "./components/BookList/BookList";
import StyledButtonDemo from "./demos/StyledButtonDemo";
import styled from "@emotion/styled";

const Page = styled.div`
  min-height: 100vh;
  padding: 20px 48px;
  background: linear-gradient(#fbfaf7, #f6f1ea);
  color: #24211d;
`;

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

function App() {
  return (
    <Page>
      <Container>
        <BookList books={initialBooks} />

        <StyledButtonDemo />
      </Container>
    </Page>
  );
}

export default App;