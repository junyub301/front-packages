import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "../../test/test-utils";

import { composeStories } from "@storybook/react";
import * as stories from "./Accordion.stories";

const { AccordionTestStory } = composeStories(stories);

/* 
 1. Accordion 버튼 클릭 시 AccordionPanel이 펼쳐지는가?
 2. 두번쨰 Accordion 버튼 클릭 시 두번째 AccordionPanel이 펼쳐지는가?
 3. 활성화 되있는 Accordion 버튼 클릭 시 AccordionPanel이 접히는가?
 4. defaultActiveItem에 itemName이 있을 경우, 초기 렌더링 시 AccordionPanel이 펼져져 있는가?
*/

describe("Accordion 컴포넌트 기능 테스트", () => {
  it("Accordion 버튼 클릭 시 AccordionPanel이 펼쳐지는가?", async () => {
    //given
    const args = {
      items: [
        {
          name: "목록1",
          content: "목록 1 내용입니다.",
        },
      ],
      defaultActiveItems: [],
    };
    render(<AccordionTestStory {...args} />);

    //then
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );

    await screen.getByTestId("button-0").click();
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "true",
    );
  });
  it("두번쨰 Accordion 버튼 클릭 시 두번째 AccordionPanel이 펼쳐지는가?", async () => {
    //given
    const args = {
      items: [
        {
          name: "목록1",
          content: "목록 1 내용입니다.",
        },
        {
          name: "목록2",
          content: "목록2 내용입니다.",
        },
      ],
      defaultActiveItems: [],
    };
    render(<AccordionTestStory {...args} />);

    //then
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );
    expect(screen.getByTestId("panel-1")).toHaveAttribute(
      "data-action-item",
      "false",
    );

    await screen.getByTestId("button-1").click();
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );
    expect(screen.getByTestId("panel-1")).toHaveAttribute(
      "data-action-item",
      "true",
    );
  });
  it("활성화 되있는 Accordion 버튼 클릭 시 AccordionPanel이 접히는가?", async () => {
    //given
    const args = {
      items: [
        {
          name: "목록1",
          content: "목록 1 내용입니다.",
        },
      ],
      defaultActiveItems: [],
    };
    //when
    render(<AccordionTestStory {...args} />);
    await screen.getByTestId("button-0").click();

    //then
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "true",
    );

    await screen.getByTestId("button-0").click();
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );
  });
  it("defaultActiveItem에 itemName이 있을 경우, 초기 렌더링 시 AccordionPanel이 펼져져 있는가?", async () => {
    //given
    const args = {
      items: [
        {
          name: "목록1",
          content: "목록 1 내용입니다.",
        },
      ],
      defaultActiveItems: ["목록1"],
    };
    //when
    render(<AccordionTestStory {...args} />);

    //then
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "true",
    );
  });
});
