import "@study/react-components-layout/style.css";
import { Grid as _Grid, GridItem } from "@study/react-components-layout";
import React from "react";

export default {
  title: "React Components/Layout/Grid",
  component: _Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const GridStory = {
  args: {
    as: "div",
    padding: "5",
    boxShadow: "xl",
    borderRadius: "md",
    // background: "pink",
    templateColumns: "repeat(2, 1fr)",
    gap: 5,
  },
  render: (args) => {
    return (
      <_Grid {...args}>
        <GridItem background="blue">테스트</GridItem>
        <GridItem background="blue">입니다.</GridItem>
        <GridItem background="blue">테스트</GridItem>
        <GridItem background="blue">입니다.</GridItem>
        <GridItem background="blue">테스트</GridItem>
        <GridItem background="blue">입니다.</GridItem>
      </_Grid>
    );
  },
};
