import React, { Fragment } from "react";

import {
  Box, Divider, DividerProps, Flex, FlexProps, Text, TextProps,
} from "@components/atoms";

export type ListProps = FlexProps & {
  list: {title: string; items: string[]};
};

const Title = (props: TextProps) => <Text
  variant={["s1", "h3"]}
  sx={{ mt: [0, 3]}}
  {...props}
/>;

const Subtitle = (props: TextProps) => <Text
  variant={["s2", "s1"]}
  {...props}
/>;

const ListDivider = (props: DividerProps) => <Divider
  sx={{ my: "17px" }}
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
