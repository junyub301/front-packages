import "@study/react-components-layout/style.css";
import React from "react";
import {
  OrderedList,
  ListItem,
  UnOrderedList,
  List,
} from "@study/react-components-layout";

export default {
  title: "React Components/Layout/List",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const OrderedListStory = {
  render: () => (
    <OrderedList spacing={3}>
      <ListItem fontSize="md">1번</ListItem>
      <ListItem fontSize="md">2번</ListItem>
      <ListItem fontSize="md">3번</ListItem>
    </OrderedList>
  ),
};

export const UnorderedListStory = {
  render: () => (
    <UnOrderedList spacing={3}>
      <ListItem fontSize="md">1번</ListItem>
      <ListItem fontSize="md">2번</ListItem>
      <ListItem fontSize="md">3번</ListItem>
    </UnOrderedList>
  ),
};

export const ListStory = {
  render: () => (
    <List variant="ordered" spacing={3}>
      <ListItem fontSize="md">1번</ListItem>
      <ListItem fontSize="md">2번</ListItem>
      <ListItem fontSize="md">3번</ListItem>
    </List>
  ),
};
