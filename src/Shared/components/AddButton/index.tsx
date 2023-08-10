import { Button } from "antd";
import { PlusIcon } from "../icon";

interface IAddButtonCustom {
  nameAdd?: string;
  href: string;
}
function AddButtonCustom({ nameAdd, href }: IAddButtonCustom) {
  return (
    <Button icon={<PlusIcon />} type="link" href={href} className="button-add">
      {nameAdd}
    </Button>
  );
}

export default AddButtonCustom;
