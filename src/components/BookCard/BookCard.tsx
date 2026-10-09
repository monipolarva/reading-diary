import {
  type Book,
  type BookStatus,
} from "../../types/book";

import styled from "@emotion/styled";

interface BookCardProps {
  book: Book;
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
    #fdeef4
  );

  border: 1px solid #f3c9d9;
  border-radius: 16px;

  box-shadow: 0 8px 20px
    rgba(195, 124, 151, 0.12);
`;

const Cover = styled.div<StatusStyleProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 86px;
  height: 122px;

  padding: 10px;

  color: #fffafd;

  border-radius: 8px;

  box-shadow: 0 8px 18px
    rgba(133, 72, 98, 0.2);

  background: ${({ status }) => {
    if (status === "done") {
      return "linear-gradient(135deg, #f3b6cb, #b85f82)";
    }

    if (status === "reading") {
      return "linear-gradient(135deg, #f7d6e2, #c9829b)";
    }

    return "linear-gradient(135deg, #ecd5f5, #b678c9)";
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

const Title = styled.h3`
  margin: 8px 0;

  font-size: 24px;
  font-weight: 600;

  color: #5f3447;
`;

const Author = styled.p`
  margin: 0 0 12px;

  font-size: 18px;

  color: #b77f95;
`;

const Badge = styled.span<StatusStyleProps>`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  width: fit-content;

  padding: 5px 12px;

  font-size: 15px;

  border-radius: 999px;

  color: ${({ status }) => {
    if (status === "done") {
      return "#8a405d";
    }

    if (status === "reading") {
      return "#9a5570";
    }

    return "#7b4f89";
  }};

  background-color: ${({ status }) => {
    if (status === "done") {
      return "#f8dce6";
    }

    if (status === "reading") {
      return "#fce7ef";
    }

    return "#f0e2f7";
  }};

  &::before {
    content: "";

    width: 8px;
    height: 8px;

    border-radius: 50%;

    background-color: ${({ status }) => {
      if (status === "done") {
        return "#cf6f92";
      }

      if (status === "reading") {
        return "#e59ab4";
      }

      return "#b982c8";
    }};
  }
`;

const Info = styled.p`
  margin: 12px 0 0;

  font-size: 17px;

  color: #8f6f7c;
`;

const Stars = styled.span`
  color: #d98ca8;

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

  background-color: #fff5f8;

  border: 1px solid #efc5d4;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: #f9dce6;
  }

  &:active {
    background-color: #f3c9d9;
  }

  &:focus-visible {
    outline: 2px solid #d98ca8;
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

      <div>
        <Title>
          {book.title}
        </Title>

        <Author>
          {book.author}
        </Author>

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
            Оценка будет доступна
            после прочтения
          </Info>
        )}
      </div>

      <DeleteButton
        type="button"
        aria-label="Удалить книгу"
      >
        🗑️
      </DeleteButton>
    </Card>
  );
}