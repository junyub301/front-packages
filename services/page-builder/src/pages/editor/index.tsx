import {
  ViewListResponseData,
  getViewList,
} from "@/src/api/worker/getViewList";
import ViewList from "@/src/components/EditorPage/ViewList";
import { DesktopFirstLayout } from "@/src/components/layout/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/layout/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/layout/DesktopFirstLayout/Nav";
import { Button } from "@study/react-components-button";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

export default function EditorPage({
  keys,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <DesktopFirstLayout>
      <DesktopFirstNav>
        <Link href="/editor/new">
          <Button size="md" color="green">
            페이지 만들기
          </Button>
        </Link>
      </DesktopFirstNav>
      <DesktopFirstBody justify="center" background="gray">
        <ViewList viewList={keys} />
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
}

export const getServerSideProps: GetServerSideProps<
  ViewListResponseData
> = async () => {
  const response = await getViewList();
  return { props: response };
};
