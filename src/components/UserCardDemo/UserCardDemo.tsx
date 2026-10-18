import { useState } from "react";
import styled from "@emotion/styled";

type UserRole =
  | "student"
  | "teacher";

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
  font-weight: 600;

  color: #8a405d;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-bottom: 20px;

  font-size: 18px;
  color: #7d3b55;
`;

const Input = styled.input`
  height: 48px;
  padding: 0 16px;

  color: #5f3447;

  background-color: #fff8fb;

  border: 1px solid #e3cbd5;
  border-radius: 12px;

  &:focus {
    outline: none;

    border-color: #c96f91;

    box-shadow: 0 0 0 3px
      rgba(201, 111, 145, 0.15);
  }
`;

const Select = styled.select`
  height: 48px;
  padding: 0 16px;

  color: #5f3447;

  background-color: #fff8fb;

  border: 1px solid #e3cbd5;
  border-radius: 12px;

  &:focus {
    outline: none;

    border-color: #c96f91;

    box-shadow: 0 0 0 3px
      rgba(201, 111, 145, 0.15);
  }
`;

const Card = styled.div`
  margin-top: 24px;
  padding: 20px;

  background: linear-gradient(
    135deg,
    #fff4f8,
    #f7e6ed
  );

  border: 1px solid #efd9e2;
  border-radius: 14px;
`;

const CardTitle = styled.h3`
  margin: 0 0 14px;

  font-size: 22px;

  color: #8a405d;
`;

const Info = styled.p`
  margin: 8px 0;

  font-size: 17px;

  color: #6f4355;
`;

export function UserCardDemo() {
  const [name, setName] =
    useState<string | undefined>(
      undefined,
    );

  const [role, setRole] =
    useState<UserRole>("student");

  return (
    <Section>
      <Title>
        Данные пользователя
      </Title>

      <Field>
        Имя

        <Input
          type="text"
          value={name ?? ""}
          onChange={(event) => {
            setName(
              event.target.value,
            );
          }}
        />
      </Field>

      <Field>
        Роль

        <Select
          value={role}
          onChange={(event) => {
            setRole(
              event.target.value as UserRole,
            );
          }}
        >
          <option value="student">
            Студент
          </option>

          <option value="teacher">
            Преподаватель
          </option>
        </Select>
      </Field>

      <Card>
        <CardTitle>
          Карточка пользователя
        </CardTitle>

        <Info>
          Имя:{" "}
          {name && name.trim() !== ""
            ? name
            : "Не указано"}
        </Info>

        <Info>
          Роль:{" "}
          {role === "student"
            ? "Студент"
            : "Преподаватель"}
        </Info>
      </Card>
    </Section>
  );
}