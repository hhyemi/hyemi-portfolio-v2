import React, { ReactChild } from "react";

import { Card, CardProps } from "@components/atoms/card";
import { Flex, FlexProps } from "@components/atoms/flex";
import { Text, TextProps } from "@components/atoms/text";

export type CardListProps = CardProps & {
  items: {title: string; value: string | ReactChild}[];
};

const CardTitle = (props: TextProps) => <Text
  variant={["p1", "s2", "s1"]}
  appearance={"gray"}
  sx={{
    width: "120px",
    minWidth: "120px",
    mt: "5px",
  }}
  {...props}
/>;

const CardFlex = (props: FlexProps) => <Flex
  sx={{
    flexDirection: ["column", null, "row", null],
    mt: 2,
  }}
  {...props}
/>;

const CardValue = (props: TextProps) => <Text
  variant={["p1", "s2", "s1"]}
  sx={{ lineHeight: 2 }}
  {...props}
/>;

export const CardList: React.FunctionComponent<CardListProps> = ({
  items,
}) => {
  return (
    <Card sx={{
      pt: [0, 3], pb: [3, 5], px: [2, 3], mb: 6,
    }}>
      {items.map((item) => {
        return (
          <CardFlex key={item.title}>
            <CardTitle>{item.title}</CardTitle>
            <CardValue>{item.value}</CardValue>
          </CardFlex>
        );
      })}
    </Card>
  );
};
