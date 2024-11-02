import * as ImportedIcons from "./index";

const Icons = ImportedIcons as { [key: string]: React.ComponentType };

const DynamicIcon = ({ name }: { name: keyof typeof Icons }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent />;
};

export default DynamicIcon;
