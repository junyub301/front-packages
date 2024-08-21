import { ViewKeyData } from "@/src/api/worker/getViewList";
import { Box, Text, Divider } from "@study/react-components-layout";
import { vars } from "@study/themes";
type Props = {
  viewList: ViewKeyData[];
};

const ViewList = ({ viewList }: Props) => {
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
        {viewList.map(({ name, metadata }) => (
          <a href={`/view/${name}`} target="_blank" key={name} rel="noreferrer">
            <li className="py-2">
              <Text
                fontSize="sm"
                style={{ fontWeight: vars.typography.fontWeight[600] }}
              >
                {name}
              </Text>
              <Text
                fontSize="xs"
                style={{ color: vars.colors.$static.light.gray[500] }}
              >
                {metadata.createAt}
              </Text>
              <Divider />
            </li>
          </a>
        ))}
      </ul>
    </Box>
  );
};

export default ViewList;
