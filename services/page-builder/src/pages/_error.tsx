import { Flex, Heading } from "@study/react-components-layout";
const ErrorPage = () => (
  <div className="w-screen h-screen flex justify-center">
    <Flex className="pt-[200px]" direction="column" align="center" gap={8}>
      <Heading fontSize="2xl">Error</Heading>
    </Flex>
  </div>
);

export default ErrorPage;
