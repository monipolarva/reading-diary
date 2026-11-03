import {
  type FormEvent,
  useState,
} from "react";

import styled from "@emotion/styled";

import {
  type Book,
  type BookStatus,
} from "../../types/book";

import { InfoIcon } from "../../icons/icons";

interface BookFormProps {
  addBook: (
    book: Omit<Book, "id">,
  ) => void;
}

const Form = styled.form`
  padding: 28px;

  background: rgba(
    255,
    255,
    255,
    0.86
  );

  border: 1px solid #ead4dd;
  border-radius: 18px;

  box-shadow: 0 12px 32px
    rgba(138, 64, 93, 0.1);
`;

const Title = styled.h2`
  margin: 0 0 26px;

  font-size: 26px;
  font-weight: 600;

  color: #8a405d;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-bottom: 22px;

  font-size: 18px;

  color: #7d3b55;
`;

const Input = styled.input`
  height: 50px;
  padding: 0 16px;

  color: #5f3447;

  background: #fff8fb;

  border: 1px solid #e3cbd5;
  border-radius: 12px;
`;

const Select = styled.select`
  height: 50px;
  padding: 0 16px;

  color: #5f3447;

  background: #fff8fb;

  border: 1px solid #e3cbd5;
  border-radius: 12px;
`;

const Textarea = styled.textarea`
  min-height: 96px;

  padding: 14px 16px;

  color: #5f3447;

  background: #fff8fb;

  border: 1px solid #e3cbd5;
  border-radius: 12px;

  resize: vertical;
`;

const Error = styled.p`
  margin: 0 0 18px;

  padding: 12px 14px;

  color: #a1355f;

  background: #f9dbe7;

  border-radius: 10px;
`;

const Hint = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  margin: 4px 0 30px;

  padding: 18px;

  color: #87435e;

  background: #f6dfe8;

  border-radius: 12px;

  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;

  height: 56px;

  color: white;

  background: #b85f81;

  border: none;
  border-radius: 12px;

  font-size: 18px;

  cursor: pointer;

  &:hover {
    background: #9f4f6f;
  }
`;

export function BookForm({
  addBook,
}: BookFormProps) {
  const [title, setTitle] =
    useState("");

  const [author, setAuthor] =
    useState("");

  const [note, setNote] =
    useState("");

  const [error, setError] =
    useState("");

  const [status, setStatus] =
    useState<BookStatus>("want");

  const [rating, setRating] =
    useState(5);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (
      !title.trim() ||
      !author.trim()
    ) {
      setError(
        "Заполните название книги и автора.",
      );

      return;
    }

    addBook({
      title,
      author,
      status,

      rating:
        status === "done"
          ? rating
          : undefined,

      note:
        status === "done"
          ? note
          : undefined,
    });

    setTitle("");
    setAuthor("");
    setStatus("want");
    setRating(5);
    setNote("");
    setError("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>
        Добавить книгу
      </Title>

      {error && (
        <Error>{error}</Error>
      )}

      <Field>
        Название книги

        <Input
          value={title}
          onChange={(event) =>
            setTitle(
              event.target.value,
            )
          }
        />
      </Field>

      <Field>
        Автор

        <Input
          value={author}
          onChange={(event) =>
            setAuthor(
              event.target.value,
            )
          }
        />
      </Field>

      <Field>
        Статус

        <Select
          value={status}
          onChange={(event) =>
            setStatus(
              event.target
                .value as BookStatus,
            )
          }
        >
          <option value="want">
            Хочу прочитать
          </option>

          <option value="reading">
            Читаю
          </option>

          <option value="done">
            Прочитано
          </option>
        </Select>
      </Field>

      {status === "done" ? (
        <>
          <Field>
            Оценка

            <Select
              value={rating}
              onChange={(event) =>
                setRating(
                  Number(
                    event.target.value,
                  ),
                )
              }
            >
              <option value={1}>
                1
              </option>
              <option value={2}>
                2
              </option>
              <option value={3}>
                3
              </option>
              <option value={4}>
                4
              </option>
              <option value={5}>
                5
              </option>
            </Select>
          </Field>

          <Field>
            Заметка

            <Textarea
              value={note}
              onChange={(event) =>
                setNote(
                  event.target.value,
                )
              }
            />
          </Field>
        </>
      ) : (
        <Hint>
          <InfoIcon
            color="#b85f81"
          />

          <span>
            Поля оценки и заметки
            появятся, если вы
            выберете статус
            «Прочитано».
          </span>
        </Hint>
      )}

      <Button type="submit">
        Добавить книгу
      </Button>
    </Form>
  );
}