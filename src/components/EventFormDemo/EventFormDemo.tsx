import { useState } from "react";
import styled from "@emotion/styled";

type EventFormat =
  | "online"
  | "offline";

const Section = styled.section`
  margin-top: 28px;
  padding: 28px;

  background: rgba(255, 255, 255, 0.82);

  border: 1px solid #ead4dd;
  border-radius: 18px;

  box-shadow: 0 12px 32px
    rgba(138, 64, 93, 0.1);
`;

const Title = styled.h2`
  margin: 0 0 24px;

  font-size: 26px;

  color: #8a405d;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 18px;

  font-size: 17px;
  color: #7d3b55;
`;

const Input = styled.input`
  height: 46px;
  padding: 0 14px;

  border: 1px solid #e3cbd5;
  border-radius: 10px;
`;

const Select = styled.select`
  height: 46px;
  padding: 0 14px;

  border: 1px solid #e3cbd5;
  border-radius: 10px;
`;

const Textarea = styled.textarea`
  min-height: 90px;
  padding: 12px 14px;

  border: 1px solid #e3cbd5;
  border-radius: 10px;

  resize: vertical;
`;

const CurrentData = styled.div`
  margin-top: 22px;
  padding: 18px;

  background-color: #fff4f8;

  border: 1px solid #efd9e2;
  border-radius: 12px;

  color: #6f4355;
`;

export function EventFormDemo() {
  const [title, setTitle] =
    useState<string | undefined>(
      undefined,
    );

  const [format, setFormat] =
    useState<EventFormat>("online");

  const [
    participants,
    setParticipants,
  ] = useState(10);

  const [
    description,
    setDescription,
  ] = useState("");

  return (
    <Section>
      <Title>
        Новое мероприятие
      </Title>

      <Field>
        Название

        <Input
          type="text"
          value={title ?? ""}
          onChange={(event) => {
            setTitle(
              event.target.value,
            );
          }}
        />
      </Field>

      <Field>
        Формат

        <Select
          value={format}
          onChange={(event) => {
            setFormat(
              event.target
                .value as EventFormat,
            );
          }}
        >
          <option value="online">
            Онлайн
          </option>

          <option value="offline">
            Очно
          </option>
        </Select>
      </Field>

      <Field>
        Количество участников

        <Input
          type="number"
          min="1"
          value={participants}
          onChange={(event) => {
            setParticipants(
              Number(
                event.target.value,
              ),
            );
          }}
        />
      </Field>

      <Field>
        Описание

        <Textarea
          value={description}
          onChange={(event) => {
            setDescription(
              event.target.value,
            );
          }}
        />
      </Field>

      <CurrentData>
        <h3>Текущие данные</h3>

        <p>
          Название:{" "}
          {title ?? "не указано"}
        </p>

        <p>
          Формат: {format}
        </p>

        <p>
          Участников:{" "}
          {participants}
        </p>

        <p>
          Описание:{" "}
          {description ||
            "не добавлено"}
        </p>
      </CurrentData>
    </Section>
  );
}