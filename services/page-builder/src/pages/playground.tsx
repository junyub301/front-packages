import { vars } from "@study/themes";
import { Box } from "@study/react-components-layout";
import { CDN_BASE_URL } from "../constants";

const PlaygroundPage = () => {
  return (
    <Box padding={3}>
      <h1>{vars.colors.$scale.gray[100]}</h1>
      <img src={`${CDN_BASE_URL}/test/hero_mobile.webp`} />
    </Box>
  );
};

export default PlaygroundPage;
