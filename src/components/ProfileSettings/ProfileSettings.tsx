import {
  type ChangeEvent,
  useState,
} from "react";

import styled from "@emotion/styled";

type ProfileTheme =
  | "light"
  | "dark";

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
  margin: 0 0 26px;

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

const Textarea = styled.textarea`
  min-height: 96px;
  padding: 14px 16px;

  color: #5f3447;
  background-color: #fff8fb;

  border: 1px solid #e3cbd5;
  border-radius: 12px;

  resize: vertical;

  &:focus {
    outline: none;

    border-color: #c96f91;

    box-shadow: 0 0 0 3px
      rgba(201, 111, 145, 0.15);
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;

  margin-top: 4px;
  margin-bottom: 24px;
`;

const Button = styled.button`
  padding: 10px 18px;

  font-size: 15px;
  font-weight: 600;

  color: #ffffff;

  background-color: #b85f81;

  border: none;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: #9f4f6f;
  }

  &:active {
    background-color: #8b405e;
  }

  &:focus-visible {
    outline: 2px solid #d88ba7;
    outline-offset: 2px;
  }
`;

const SecondaryButton = styled(Button)`
  color: #8a405d;

  background-color: #f7e5ec;

  border: 1px solid #e6cbd6;

  &:hover {
    background-color: #efd8e1;
  }

  &:active {
    background-color: #e6c8d4;
  }
`;

const Preview = styled.div`
  margin-top: 10px;
  padding: 22px;

  background: linear-gradient(
    135deg,
    #fff4f8,
    #f7e6ed
  );

  border: 1px solid #efd9e2;
  border-radius: 14px;
`;

const PreviewTitle = styled.h3`
  margin: 0 0 16px;

  font-size: 22px;

  color: #8a405d;
`;

const PreviewText = styled.p`
  margin: 8px 0;

  color: #6f4355;
`;

export function ProfileSettings() {
  const [
    displayName,
    setDisplayName,
  ] = useState<
    string | undefined
  >(undefined);

  const [
    theme,
    setTheme,
  ] = useState<ProfileTheme>(
    "light",
  );

  const [
    fontSize,
    setFontSize,
  ] = useState(16);

  const [
    description,
    setDescription,
  ] = useState("");

  const [
    isPreviewVisible,
    setIsPreviewVisible,
  ] = useState(true);

  const handleDescriptionChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(
      event.target.value,
    );
  };

  const togglePreview = () => {
    setIsPreviewVisible(
      (currentValue) =>
        !currentValue,
    );
  };

  const resetSettings = () => {
    setDisplayName(undefined);
    setTheme("light");
    setFontSize(16);
    setDescription("");
    setIsPreviewVisible(true);
  };

  return (
    <Section>
      <Title>
        Настройки профиля
      </Title>

      <Field>
        Имя пользователя

        <Input
          type="text"
          value={
            displayName ?? ""
          }
          onChange={(event) => {
            setDisplayName(
              event.target.value,
            );
          }}
        />
      </Field>

      <Field>
        Тема оформления

        <Select
          value={theme}
          onChange={(event) => {
            setTheme(
              event.target
                .value as ProfileTheme,
            );
          }}
        >
          <option value="light">
            Светлая
          </option>

          <option value="dark">
            Тёмная
          </option>
        </Select>
      </Field>

      <Field>
        Размер текста

        <Input
          type="number"
          min="12"
          max="30"
          value={fontSize}
          onChange={(event) => {
            setFontSize(
              Number(
                event.target.value,
              ),
            );
          }}
        />
      </Field>

      <Field>
        Описание профиля

        <Textarea
          value={description}
          onChange={
            handleDescriptionChange
          }
        />
      </Field>

      <Buttons>
        <Button
          type="button"
          onClick={togglePreview}
        >
          {isPreviewVisible
            ? "Скрыть просмотр"
            : "Показать просмотр"}
        </Button>

        <SecondaryButton
          type="button"
          onClick={resetSettings}
        >
          Сбросить настройки
        </SecondaryButton>
      </Buttons>

      {isPreviewVisible && (
        <Preview>
          <PreviewTitle>
            Предварительный просмотр
          </PreviewTitle>

          <PreviewText>
            Имя:{" "}
            {displayName &&
            displayName.trim() !== ""
              ? displayName
              : "Имя не указано"}
          </PreviewText>

          <PreviewText>
            Тема:{" "}
            {theme === "light"
              ? "Светлая"
              : "Тёмная"}
          </PreviewText>

          <PreviewText>
            Описание:
          </PreviewText>

          <PreviewText
            style={{
              fontSize: `${fontSize}px`,
            }}
          >
            {description ||
              "Описание не добавлено"}
          </PreviewText>
        </Preview>
      )}
    </Section>
  );
}