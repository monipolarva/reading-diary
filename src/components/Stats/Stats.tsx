import styled from "@emotion/styled";
import { type Book } from "../../types/book";

interface StatsProps {
  books: Book[];
}

const StatsSection = styled.section`
  margin-bottom: 28px;
`;

const StatsWrapper = styled.div`
  display: flex;
  padding: 28px 36px;
  background-color: rgba(255, 245, 249, 0.9);
  border: 1px solid #f3c9d9;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(195, 124, 151, 0.12);
  backdrop-filter: blur(10px);
`;

const StatCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;
  padding: 0 28px;
  border-right: 1px solid #efc5d4;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
    border-right: none;
  }
`;

const Label = styled.div`
  font-size: 18px;
  color: #8f6f7c;
`;

const Value = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #8a405d;
`;

export function Stats({ books }: StatsProps) {
  const total = books.length;

  const done = books.filter(
    (book) => book.status === "done",
  ).length;

  const reading = books.filter(
    (book) => book.status === "reading",
  ).length;

  const want = books.filter(
    (book) => book.status === "want",
  ).length;

  return (
    <StatsSection>
      <StatsWrapper>
        <StatCard>
          <Label>Всего книг</Label>
          <Value>{total}</Value>
        </StatCard>

        <StatCard>
          <Label>Прочитано</Label>
          <Value>{done}</Value>
        </StatCard>

        <StatCard>
          <Label>Читаю</Label>
          <Value>{reading}</Value>
        </StatCard>

        <StatCard>
          <Label>Хочу прочитать</Label>
          <Value>{want}</Value>
        </StatCard>
      </StatsWrapper>
    </StatsSection>
  );
}