import styled from "@emotion/styled";

interface Product {
  id: number;
  name: string;
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Клавиатура",
    quantity: 12,
  },
  {
    id: 2,
    name: "Мышь",
    quantity: 4,
  },
  {
    id: 3,
    name: "Монитор",
    quantity: 0,
  },
  {
    id: 4,
    name: "Наушники",
    quantity: 2,
  },
  {
    id: 5,
    name: "Веб-камера",
    quantity: 8,
  },
];

const DemoSection = styled.section`
  margin-top: 28px;
  padding: 24px;

  background-color: #fff7fb;

  border: 1px solid #f3c9d9;
  border-radius: 18px;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 12px;
`;

const StatCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;

  padding: 16px;

  background-color: #fdeef4;

  border-radius: 10px;
`;

interface WarehouseStatsProps {
  total: number;
  available: number;
  outOfStock: number;
  lowStock: number;
}

function WarehouseStats({
  total,
  available,
  outOfStock,
  lowStock,
}: WarehouseStatsProps) {
  return (
    <StatsRow>
      <StatCard>
        <span>Всего товаров</span>
        <strong>{total}</strong>
      </StatCard>

      <StatCard>
        <span>В наличии</span>
        <strong>{available}</strong>
      </StatCard>

      <StatCard>
        <span>Закончились</span>
        <strong>{outOfStock}</strong>
      </StatCard>

      <StatCard>
        <span>Осталось мало</span>
        <strong>{lowStock}</strong>
      </StatCard>
    </StatsRow>
  );
}

export function WarehouseStatsDemo() {
  const total = products.length;

  const available = products.filter(
    (product) => product.quantity > 0,
  ).length;

  const outOfStock = products.filter(
    (product) => product.quantity === 0,
  ).length;

  const lowStock = products.filter(
    (product) =>
      product.quantity > 0 &&
      product.quantity <= 5,
  ).length;

  return (
    <DemoSection>
      <h2>Статистика склада</h2>

      <WarehouseStats
        total={total}
        available={available}
        outOfStock={outOfStock}
        lowStock={lowStock}
      />
    </DemoSection>
  );
}
