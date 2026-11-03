import styled from "@emotion/styled";

import { type Book } from "../../types/book";

import booksIcon from "../../assets/img/books.png";
import checkIcon from "../../assets/img/check.png";
import bookOpenIcon from "../../assets/img/book-open.png";
import bookmarkIcon from "../../assets/img/bookmark.png";
import headerBooksImage from "../../assets/img/header-books.png";

interface StatsProps {
  books: Book[];
}

const StatsSection = styled.section`
  position: relative;

  margin-bottom: 28px;
`;

const HeaderImage = styled.img`
  position: absolute;

  right: -60px;
  bottom: 50px;

  z-index: 2;

  width: 400px;
  height: auto;

  object-fit: contain;

  pointer-events: none;
`;

const StatsWrapper = styled.div`
  display: flex;

  padding: 28px 36px;

  background: rgba(
    255,
    255,
    255,
    0.84
  );

  border: 1px solid #ead4dd;
  border-radius: 18px;

  box-shadow: 0 12px 32px
    rgba(138, 64, 93, 0.1);

  backdrop-filter: blur(10px);
`;

const StatCard = styled.div`
  display: flex;
  flex: 1 1 0;

  align-items: center;
  gap: 18px;

  min-width: 0;

  padding: 0 28px;

  border-right: 1px solid #ead4dd;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
    border-right: none;
  }
`;

const IconBox = styled.div<{
  variant:
    | "total"
    | "done"
    | "reading"
    | "want";
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 58px;
  height: 58px;

  border-radius: 16px;

  background: ${({ variant }) => {
    if (variant === "done") {
      return "#f1d8e3";
    }

    if (variant === "reading") {
      return "#f5e0e8";
    }

    if (variant === "want") {
      return "#f8eaf0";
    }

    return "#efd5df";
  }};
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;

  object-fit: contain;
`;

const Label = styled.div`
  margin-bottom: 6px;

  font-size: 18px;

  color: #9a5c74;
`;

const Value = styled.div`
  font-size: 32px;
  font-weight: 600;

  color: #8a405d;
`;

export function Stats({
  books,
}: StatsProps) {
  const total = books.length;

  const done = books.filter(
    (book) =>
      book.status === "done",
  ).length;

  const reading = books.filter(
    (book) =>
      book.status === "reading",
  ).length;

  const want = books.filter(
    (book) =>
      book.status === "want",
  ).length;

  return (
    <StatsSection>
      <HeaderImage
        src={headerBooksImage}
        alt=""
      />

      <StatsWrapper>
        <StatCard>
          <IconBox variant="total">
            <Icon
              src={booksIcon}
              alt=""
            />
          </IconBox>

          <div>
            <Label>
              Всего книг
            </Label>

            <Value>{total}</Value>
          </div>
        </StatCard>

        <StatCard>
          <IconBox variant="done">
            <Icon
              src={checkIcon}
              alt=""
            />
          </IconBox>

          <div>
            <Label>
              Прочитано
            </Label>

            <Value>{done}</Value>
          </div>
        </StatCard>

        <StatCard>
          <IconBox variant="reading">
            <Icon
              src={bookOpenIcon}
              alt=""
            />
          </IconBox>

          <div>
            <Label>
              Читаю
            </Label>

            <Value>
              {reading}
            </Value>
          </div>
        </StatCard>

        <StatCard>
          <IconBox variant="want">
            <Icon
              src={bookmarkIcon}
              alt=""
            />
          </IconBox>

          <div>
            <Label>
              Хочу прочитать
            </Label>

            <Value>{want}</Value>
          </div>
        </StatCard>
      </StatsWrapper>
    </StatsSection>
  );
}