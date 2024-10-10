import { ViewKeyData } from "@/src/api/worker/getViewList";
import { formatDate } from "@/src/utils/date/format";
import { Box, Text, Divider } from "@study/react-components-layout";
import { vars } from "@study/themes";
import { Button } from "@study/react-components-button";
import { deleteViewDetail } from "@/src/api/worker/deleteViewDetail";
import { usePage } from "@/src/hooks/usePage";
import { putViewDetail } from "@/src/api/worker/putViewDetail";
import { getViewDetail } from "@/src/api/worker/getViewDetail";
import { formatObjectToJson } from "@/src/utils/jsonEditor";
type Props = {
  viewList: ViewKeyData[];
};

const ViewList = ({ viewList }: Props) => {
  const { refresh } = usePage();
  const sortedLastedDateViewList = [...viewList].sort((curr, prev) => {
    const currentDate = new Date(curr.metadata.createAt);
    const prevDate = new Date(prev.metadata.createAt);

    return prevDate.getTime() - currentDate.getTime();
  });

  const handleItemPublish = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    viewId: string,
    isDraft?: boolean,
  ) => {
    e.preventDefault();
    const { value, metadata } = await getViewDetail({ viewId });
    const message = isDraft ? "정말 발행하시겠습니까?" : "정말 대기중으로 변경하시겠습니까?";
    const confirm = window.confirm(message);

    if (!confirm) return;

    await putViewDetail({
      viewId,
      data: {
        value: formatObjectToJson(value),
        metadata: {
          ...metadata,
          updatedAt: new Date().toISOString(),
          isDraft: !isDraft,
        },
      },
    });

    refresh();
  };
  const handleItemRemove = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, viewId: string) => {
    e.preventDefault();
    const confirm = window.confirm("정말 삭제하시겠습니까?");
    if (!confirm) return;
    await deleteViewDetail({ viewId });
    refresh();
  };

  return (
    <Box
      marginY={14}
      paddingX={8}
      paddingY={6}
      className="max-w-[600px] w-full"
      boxShadow="base"
      style={{ background: vars.colors.$static.light.color.white }}
    >
      <ul>
        {sortedLastedDateViewList.map(({ name: viewId, metadata }) => (
          <a
            href={metadata.isDraft ? `/preview/${viewId}` : `/view/${viewId}`}
            target="_blank"
            key={viewId}
            rel="noreferrer"
          >
            <li className="p-2 flex hover:bg-gray-100">
              <div className="w-full">
                <Text fontSize="sm" style={{ fontWeight: vars.typography.fontWeight[600] }}>
                  {metadata.title ?? viewId}
                </Text>
                <Text fontSize="xs" style={{ color: vars.colors.$static.light.gray[500] }}>
                  {metadata.updatedAt && `수정일자: ${formatDate(metadata.updatedAt)} | `}
                  {`생성일자: ${formatDate(metadata.createAt)}`}
                </Text>
              </div>
              <div className="min-w-fit flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="xs"
                  color={metadata.isDraft ? "gray" : "green"}
                  onClick={(e) => handleItemPublish(e, viewId, metadata.isDraft)}
                >
                  {metadata.isDraft ? "대기중" : "발행중"}
                </Button>
                <Button variant="ghost" size="xs" color="red" onClick={(e) => handleItemRemove(e, viewId)}>
                  삭제
                </Button>
              </div>
            </li>
            <Divider />
          </a>
        ))}
      </ul>
    </Box>
  );
};

export default ViewList;
