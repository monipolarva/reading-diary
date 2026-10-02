import { type Book } from "../../types/book";
import styled from "@emotion/styled";

interface BookCardProps {
  book: Book;
}

const Card = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 22px;
  padding: 16px;
  background-color: rgba(255, 245, 249, 0.9);
  border: 1px solid #f2cbd8;
  border-radius: 14px;
`;

const Cover = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 122px;
  padding: 10px;
  color: #fff7fa;
  background: linear-gradient(135deg, #f7d6e2, #c9829b);
  border-radius: 6px;
  box-shadow: 0 8px 18px rgba(47, 39, 31, 0.2);
`;

const CoverTitle = styled.span`
  font-weight: 600;
  line-height: 1.15;
  text-align: center;
`;

const Title = styled.h3`
  margin: 8px 0;
  font-size: 24px;
  font-weight: 600;
`;

const Author = styled.p`
  margin: 0 0 12px;
  font-size: 18px;
  color: #b77f95;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  width: fit-content;
  padding: 5px 12px;
  font-size: 15px;
  color: #8a5d6d;
  background-color: #f9dce6;
  border-radius: 50%;
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

const statusText = {
  want: "Хочу прочитать",
  reading: "Читаю",
  done: "Прочитано",
};

export default function BookCard({ book }: BookCardProps) {
  const rating = book.rating || 0;
  const stars = "★".repeat(rating);

  return (
    <Card>
      <Cover>
        <CoverTitle>
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

        <Badge>
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
      </div>
    </Card>
  );
}