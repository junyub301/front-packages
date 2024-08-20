import { Flex, Heading, Text } from "@study/react-components-layout";
const Error404Page = () => (
  <div className="w-screen h-screen flex justify-center">
    <Flex className="pt-[200px]" direction="column" align="center" gap={8}>
      <Heading fontSize="2xl">Not Found</Heading>
      <Text fontSize="lg">잘못들어왔다...</Text>
    </Flex>
  </div>
);

export default Error404Page;
