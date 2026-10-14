import {
  type Book,
  type BookStatus,
} from "../../types/book";

import styled from "@emotion/styled";

interface BookCardProps {
  book: Book;
  deleteBook: (id: number) => void;
}

interface StatusStyleProps {
  status: BookStatus;
}

interface CoverTitleStyleProps {
  length: number;
}

const Card = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 22px;
  padding: 16px;

  background: linear-gradient(
    135deg,
    #fff8fb,
    #f9edf2
  );

  border: 1px solid #ead4dd;
  border-radius: 16px;

  box-shadow: 0 8px 20px
    rgba(138, 64, 93, 0.1);
`;

const Cover = styled.div<StatusStyleProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 86px;
  height: 122px;

  padding: 10px;

  color: #ffffff;

  border-radius: 8px;

  box-shadow: 0 8px 18px
    rgba(138, 64, 93, 0.18);

  background: ${({ status }) => {
    if (status === "done") {
      return "linear-gradient(135deg, #e29ab5, #a9496c)";
    }

    if (status === "reading") {
      return "linear-gradient(135deg, #efb9ca, #c96f91)";
    }

    return "linear-gradient(135deg, #f2c9d7, #d693aa)";
  }};
`;

const CoverTitle =
  styled.span<CoverTitleStyleProps>`
    font-weight: 600;
    line-height: 1.15;
    text-align: center;
    word-break: break-word;

    font-size: ${({ length }) => {
      if (length > 40) {
        return "8px";
      }

      if (length > 28) {
        return "10px";
      }

      if (length > 16) {
        return "12px";
      }

      return "16px";
    }};
  `;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  text-align: left;
`;

const Title = styled.h3`
  margin: 8px 0;

  font-size: 24px;
  font-weight: 600;

  color: #7d3b55;
`;

const Author = styled.p`
  margin: 0 0 12px;

  font-size: 18px;

  color: #a06179;
`;

const Badge = styled.span<StatusStyleProps>`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  width: fit-content;

  padding: 5px 12px;

  font-size: 15px;

  border-radius: 999px;

  color: #87435e;

  background-color: #f6dfe8;

  &::before {
    content: "";

    width: 8px;
    height: 8px;

    border-radius: 50%;

    background-color: ${({ status }) => {
      if (status === "done") {
        return "#b94e75";
      }

      if (status === "reading") {
        return "#d16d91";
      }

      return "#db91ab";
    }};
  }
`;

const Info = styled.p`
  margin: 12px 0 0;

  font-size: 17px;

  color: #745b65;
`;

const Stars = styled.span`
  color: #cf6f91;

  letter-spacing: 1px;
`;

const DeleteButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  margin-left: auto;

  padding: 0;

  font-size: 18px;

  background-color: #fff8fb;

  border: 1px solid #ead4dd;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: #f7e5ec;
  }

  &:active {
    background-color: #efd4df;
  }

  &:focus-visible {
    outline: 2px solid #c96f91;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const statusText = {
  want: "Хочу прочитать",
  reading: "Читаю",
  done: "Прочитано",
};

export default function BookCard({
  book,
  deleteBook,
}: BookCardProps) {
  const rating = book.rating || 0;
  const stars = "★".repeat(rating);

  return (
    <Card>
      <Cover status={book.status}>
        <CoverTitle
          length={book.title.length}
        >
          {book.title}
        </CoverTitle>
      </Cover>

      <Content>
        <Title>{book.title}</Title>

        <Author>{book.author}</Author>

        <Badge status={book.status}>
          {statusText[book.status]}
        </Badge>

        {book.status === "done" ? (
          <>
            <Info>
              Оценка:{" "}
              <Stars>{stars}</Stars>{" "}
              {rating}/5
            </Info>

            {book.note && (
              <Info>
                Заметка: {book.note}
              </Info>
            )}
          </>
        ) : (
          <Info>
            Оценка будет доступна после прочтения
          </Info>
        )}
      </Content>

      <DeleteButton
        type="button"
        onClick={() =>
          deleteBook(book.id)
        }
        aria-label="Удалить книгу"
      >
        🗑️
      </DeleteButton>
    </Card>
  );

}