import styled from "@emotion/styled";

const AddButton = styled.button`
  padding: 10px 18px;
  color: #ffffff;
  background-color: #c9829b;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #7f3f5a;
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 3px solid #f2b7cb;
    outline-offset: 3px;
  }
`;

export default function StyledButtonDemo() {
  return (
    <>
      <h2>Демонстрация styled-компонента</h2>

      <AddButton type="button">
        Добавить книгу
      </AddButton>
    </>
  );
}