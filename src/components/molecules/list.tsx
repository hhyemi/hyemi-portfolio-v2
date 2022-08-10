import React, { Fragment } from "react";

import { Box } from "@components/atoms/box";
import { Divider, DividerProps } from "@components/atoms/divider";
import { Flex, FlexProps } from "@components/atoms/flex";
import { Text, TextProps } from "@components/atoms/text";

export type ListProps = FlexProps & {
  list: {title: string; items: string[]};
};

const Title = (props: TextProps) => <Text
  variant={["p1", "s1", "h3"]}
  sx={{ mt: [0, 3]}}
  {...props}
/>;

const Subtitle = (props: TextProps) => <Text
  variant={["p2", "s2", "s1"]}
  {...props}
/>;

const ListDivider = (props: DividerProps) => <Divider
  sx={{ my: ["11px", "17px"]}}
  {...props}
/>;

export const List: React.FunctionComponent<ListProps> = ({
  list,
  ...props
}) => {
  return (
    <Flex sx={{ flexDirection: "column", justifyContent: "space-between", alignItems: "center" }} {...props}>
      <Title sx={{ mb: 1 }}>{list.title}</Title>
      <Box>
        {list.items.map((item) => {
          return (
            <Fragment key={item}>
              <ListDivider/>
              <Subtitle>
                {item}
              </Subtitle>
            </Fragment>
          );
        })}
        <ListDivider/>
      </Box>
    </Flex>
  );
};
