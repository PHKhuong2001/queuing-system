import { Button } from "antd";
import { PlusIcon } from "../icon";
import { CSSProperties, ComponentState } from "react";

interface IAddButtonCustom {
  nameAdd?: string;
  href: string;
  style?: CSSProperties;
  icon?: ComponentState;
}
function AddButtonCustom({ nameAdd, href, style, icon }: IAddButtonCustom) {
  if (icon) {
    return (
      <Button
        icon={icon}
        style={style}
        type="link"
        href={href}
        className="button-add"
      >
        {nameAdd}
      </Button>
    );
  }
  return (
    <Button
      icon={<PlusIcon />}
      style={style}
      type="link"
      href={href}
      className="button-add"
    >
      {nameAdd}
    </Button>
  );
}

export default AddButtonCustom;
