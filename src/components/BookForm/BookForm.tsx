import styled from "@emotion/styled";
import { useState } from "react";
import { type BookStatus } from "../../types/book";

const Form = styled.form`
  margin-top: 28px;
  padding: 28px;

  background: rgba(255, 255, 255, 0.82);

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
  background: rgba(255, 255, 255, 0.76);

  border: 1px solid #e3cbd5;
  border-radius: 12px;

  &::placeholder {
    color: #b692a1;
  }

  &:focus {
    outline: none;

    border-color: #c96f91;

    box-shadow: 0 0 0 3px
      rgba(201, 111, 145, 0.15);
  }
`;

const Select = styled.select`
  height: 50px;
  padding: 0 16px;

  color: #5f3447;
  background: rgba(255, 255, 255, 0.76);

  border: 1px solid #e3cbd5;
  border-radius: 12px;

  &:focus {
    outline: none;

    border-color: #c96f91;

    box-shadow: 0 0 0 3px
      rgba(201, 111, 145, 0.15);
  }
`;

const Textarea = styled.textarea`
  min-height: 96px;
  padding: 14px 16px;

  color: #5f3447;
  background: rgba(255, 255, 255, 0.76);

  border: 1px solid #e3cbd5;
  border-radius: 12px;

  resize: vertical;

  &::placeholder {
    color: #b692a1;
  }

  &:focus {
    outline: none;

    border-color: #c96f91;

    box-shadow: 0 0 0 3px
      rgba(201, 111, 145, 0.15);
  }
`;

export function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [note, setNote] = useState("");

  const [status, setStatus] =
    useState<BookStatus>("want");

  const [rating, setRating] = useState(5);

  return (
    <Form>
      <Title>Добавить книгу</Title>

      <Field>
        Название книги

        <Input
          type="text"
          value={title}
          placeholder="Введите название книги"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </Field>

      <Field>
        Автор

        <Input
          type="text"
          value={author}
          placeholder="Введите автора"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
      </Field>

      <Field>
        Статус

        <Select
          value={status}
          onChange={(event) => {
            setStatus(
              event.target.value as BookStatus,
            );
          }}
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

      <Field>
        Оценка

        <Select
          value={rating}
          onChange={(event) => {
            setRating(
              Number(event.target.value),
            );
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Select>
      </Field>

      <Field>
        Заметка

        <Textarea
          value={note}
          placeholder="Добавьте короткую заметку"
          onChange={(event) => {
            setNote(event.target.value);
          }}
        />
      </Field>
    </Form>
  );
}