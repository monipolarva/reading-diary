import { useState } from "react";
import styled from "@emotion/styled";

type IdeaCategory =
  | "walk"
  | "culture"
  | "food";

interface WeekendIdea {
  id: number;
  title: string;
  category: IdeaCategory;
  note: string;
}

type NewWeekendIdea =
  Omit<WeekendIdea, "id">;

interface IdeaFormProps {
  addIdea: (
    idea: NewWeekendIdea,
  ) => void;
}

const Section = styled.section`
  margin-top: 28px;

  padding: 28px;

  background: rgba(
    255,
    255,
    255,
    0.84
  );

  border: 1px solid #ead4dd;
  border-radius: 18px;
`;

const Title = styled.h2`
  color: #8a405d;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  min-height: 80px;
  padding: 12px;

  border: 1px solid #e3cbd5;
  border-radius: 10px;
`;

const Button = styled.button`
  height: 48px;

  color: white;
  background: #b85f81;

  border: none;
  border-radius: 10px;
`;

function IdeaForm({
  addIdea,
}: IdeaFormProps) {
  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState<IdeaCategory>("walk");

  const [note, setNote] =
    useState("");

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();

        addIdea({
          title,
          category,
          note,
        });

        setTitle("");
        setCategory("walk");
        setNote("");
      }}
    >
      <Input
        value={title}
        placeholder="Идея"
        required
        onChange={(event) =>
          setTitle(
            event.target.value,
          )
        }
      />

      <Select
        value={category}
        onChange={(event) =>
          setCategory(
            event.target
              .value as IdeaCategory,
          )
        }
      >
        <option value="walk">
          Прогулка
        </option>

        <option value="culture">
          Культура
        </option>

        <option value="food">
          Еда
        </option>
      </Select>

      <Textarea
        value={note}
        placeholder="Заметка"
        onChange={(event) =>
          setNote(
            event.target.value,
          )
        }
      />

      <Button type="submit">
        Добавить идею
      </Button>
    </Form>
  );
}

export function WeekendIdeasDemo() {
  const [ideas, setIdeas] =
    useState<WeekendIdea[]>([]);

  const addIdea = (
    idea: NewWeekendIdea,
  ) => {
    const newIdea: WeekendIdea = {
      id: Date.now(),
      ...idea,
    };

    setIdeas((currentIdeas) => [
      ...currentIdeas,
      newIdea,
    ]);
  };

  return (
    <Section>
      <Title>
        Идеи на выходные
      </Title>

      <IdeaForm addIdea={addIdea} />

      {ideas.length === 0 ? (
        <p>Идей пока нет.</p>
      ) : (
        <ul>
          {ideas.map((idea) => (
            <li key={idea.id}>
              <h3>{idea.title}</h3>

              <p>
                Категория:{" "}
                {idea.category}
              </p>

              {idea.note && (
                <p>{idea.note}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}