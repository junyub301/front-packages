import { Flex, FlexProps } from "@study/react-components-layout";
import { vars } from "@study/themes";
type Props = FlexProps;

export const DesktopFirstNav = (props: Props) => {
  const {
    children,
    padding = 2,
    boxShadow = "base",
    justify = "right",
    className,
    ...rest
  } = props;

  const currentClassName = ["w-full h-[56px] fixed top-0 z-50", className].join(
    "",
  );

  return (
    <Flex
      {...rest}
      padding={padding}
      boxShadow={boxShadow}
      justify={justify}
      className={currentClassName}
      style={{
        background: vars.colors.$static.light.color.white,
      }}
    >
      {children}
    </Flex>
  );
};
