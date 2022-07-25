import React, { Fragment } from "react";

import {
  Box, Divider, DividerProps, Flex, FlexProps, Text, TextProps,
} from "@components/atoms";

export type ListProps = FlexProps & {
  list: {title: string; items: string[]};
};

const Title = (props: TextProps) => <Text
  variant={["s1", "h3"]}
  sx={{ flex: 1, mt: [0, 3]}}
  {...props}
/>;

const Subtitle = (props: TextProps) => <Text
  variant={["s2", "s1"]}
  {...props}
/>;

const ListDivider = (props: DividerProps) => <Divider
  sx={{ my: "13px" }}
  {...props}
/>;

export const List: React.FunctionComponent<ListProps> = ({ list, ...props }) => {
  return (
    <Flex sx={{ flexDirection: ["column", null, "row"], justifyContent: "space-between" }} {...props}>
      <Title>{list.title}</Title>
      <Box sx={{ flex: 2 }}>
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
        <Subtitle>
          {"•   React.js, Next.js"}
        </Subtitle>
        <ListDivider/>
        <Subtitle>
          {"•   MobX, Redux, Redux-saga, Apollo"}
        </Subtitle>
        <ListDivider/>
        <Subtitle>
          {"•   Css, Styled-component, Theme ui"}
        </Subtitle>
        <ListDivider/>
      </Box>
    </Flex>
  );
};
