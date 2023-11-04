import classNames from "classnames/bind";
import styles from "./select.module.scss";
import { Select as Selects } from "react-dropdown-select";

const cx = classNames.bind(styles);

function Select({ 
    onChange = ()=>{},
    value = {},
    data = []
 }) {
  return (
    <Selects
      onChange={onChange}
      values={[value || { _id: 1, label: "" }]}
      color="#6a6474"
      className={cx("my-dropdown")}
      options={data}
    />
  );
}

export default Select;
