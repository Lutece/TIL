import * as React from "react";
import styled from "@emotion/styled";
import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "../hooks/useRaisedShadow";
import FeedIcon from "./icons/FeedIcon";

const FeedItem = styled.span`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  height: 72px;
  display: flex;
  padding-left: 18px;
  align-items: center;
  font-size: 16px;
  margin: 0 auto;
  background-color: #f7f7f7;
  border-radius: 14px;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 24px;
    margin-top: -5px;
    vertical-align: middle;
  }
`;

interface Props {
  item: string;
}

export const OrderingItem = ({ item }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item value={item} id={item} style={{ boxShadow, y }}>
      <FeedItem>
        <FeedIcon />
        {item}
      </FeedItem>
    </Reorder.Item>
  );
};
