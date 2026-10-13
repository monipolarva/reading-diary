import { initialBooks } from "./data/books";
import BookList from "./components/BookList/BookList";
import { Stats } from "./components/Stats/Stats";
import StyledButtonDemo from "./demos/StyledButtonDemo";
import { TicketStatsDemo } from "./demos/TicketStatsDemo";
import { WarehouseStatsDemo } from "./demos/WarehouseStatsDemo";
import styled from "@emotion/styled";

const Page = styled.div`
  min-height: 100vh;
  padding: 32px 48px;

  background: linear-gradient(
    180deg,
    #fff8fb,
    #f8edf2
  );

  color: #5f3447;
`;

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0 0 24px;

  font-size: 38px;
  font-weight: 700;

  color: #8a405d;
`;

export default function App() {
  return (
    <Page>
      <Container>
        <Title>
          Читательский дневник
        </Title>

        <Stats books={initialBooks} />

        <BookList books={initialBooks} />

        <StyledButtonDemo />

        <TicketStatsDemo />

        <WarehouseStatsDemo />
      </Container>
    </Page>
  );
}