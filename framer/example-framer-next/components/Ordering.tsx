import * as React from "react";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { OrderingItem } from "./OrderingItem";
import styled from "@emotion/styled";

const ListStyle = styled.div`
  li {
    margin-bottom: 10px;
    border-radius: 14px;
  }
`;
const initialItems = ["첫 번째", "두 번째", "세 번째"];

export default function Ordering() {
  const [items, setItems] = useState(initialItems);

  return (
    <ListStyle>
      <Reorder.Group axis="y" onReorder={setItems} values={items}>
        {items.map((item) => (
          <OrderingItem key={item} item={item} />
        ))}
      </Reorder.Group>
    </ListStyle>
  );
}
