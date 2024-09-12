import { DesktopFirstSideNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/SideNav";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { Fragment } from "react";
import { Button } from "@study/react-components-button";
import { Divider } from "@study/react-components-layout";
type Preset = {
  name: string;
  onClick: () => void;
};

export const EditorNavFormSideNavBar = () => {
  const { append } = useViewSchemaFormSliceFieldArray();

  const presets: Preset[] = [
    {
      name: "SpacingSlice",
      onClick: () => {
        append({
          sliceName: "SpacingSlice",
          data: {},
        });
      },
    },
    {
      name: "TextSlice",
      onClick: () => {
        append({
          sliceName: "TextSlice",
          data: {
            text: "",
          },
        });
      },
    },
  ];
  return (
    <DesktopFirstSideNav>
      {presets.map(({ name, onClick }) => (
        <Fragment key={name}>
          <Button onClick={onClick} style={{ borderRadius: 0, width: "100%" }} variant="ghost">
            {name}
          </Button>
          <Divider />
        </Fragment>
      ))}
    </DesktopFirstSideNav>
  );
};
