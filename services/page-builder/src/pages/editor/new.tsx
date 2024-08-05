import { DesktopFirstLayout } from "@/src/components/layout/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/layout/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/layout/DesktopFirstLayout/Nav";
import { Button } from "@study/react-components-button";
import React from "react";

export default function EditorNewPage() {
  return (
    <DesktopFirstLayout>
      <DesktopFirstNav gap={8}>
        <Button size="md" color="red" variant="outline">
          초기화
        </Button>
        <Button size="md" color="gray" variant="outline">
          미리보기
        </Button>
        <Button size="md" color="green">
          배포하기
        </Button>
      </DesktopFirstNav>
      <DesktopFirstBody>Body</DesktopFirstBody>
    </DesktopFirstLayout>
  );
}
