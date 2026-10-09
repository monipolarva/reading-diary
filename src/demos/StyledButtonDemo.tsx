import styled from "@emotion/styled";
import { type ReactNode } from "react";

interface ButtonProps {
  size: "small" | "large";
  children: ReactNode;
}

const DemoBlock = styled.section`
  margin-top: 24px;
  padding: 20px;
  background: linear-gradient(
    135deg,
    #f8dff0,
    #e8c8e9
  );
  border: 1px solid #d8a9ca;
  border-radius: 18px;
  box-shadow: 0 10px 24px
    rgba(130, 75, 110, 0.16);
`;

const DemoTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 22px;
  font-weight: 700;
  color: #7d3f63;
`;

const StyledButton = styled.button<ButtonProps>`
  color: #ffffff;
  background-color: #c9829b;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;

  padding: ${({ size }) =>
    size === "small"
      ? "7px 14px"
      : "12px 24px"};

  font-size: ${({ size }) =>
    size === "small"
      ? "14px"
      : "18px"};

  &:hover {
    background-color: #a95f7b;
  }

  &:active {
    transform: scale(0.97);
    background-color: #8f4c67;
  }

  &:focus-visible {
    outline: 3px solid #efb6cf;
    outline-offset: 3px;
  }
`;

function Button({
  size,
  children,
}: ButtonProps) {
  return (
    <StyledButton size={size}>
      {children}
    </StyledButton>
  );
}

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export default function StyledButtonDemo() {
  return (
    <DemoBlock>
      <DemoTitle>
        Демонстрация styled-компонента
      </DemoTitle>

      <Buttons>
        <Button size="small">
          Маленькая кнопка
        </Button>

        <Button size="large">
          Добавить книгу
        </Button>
      </Buttons>
    </DemoBlock>
  );
}