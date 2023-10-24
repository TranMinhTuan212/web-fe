import classNames from "classnames/bind";
import styles from "./order.module.scss";
import Select from "react-dropdown-select";
import Input from "~/components/input";
import Table from "~/components/table";

const cx = classNames.bind(styles);

function Order() {
  const titleTable = [
    "Mã đơn hàng",
    "Tình trạng",
    "Thời gian",
    "Cửa hàng"
  ];

  return (
    <div className={cx("wapper")}>
        <h1 className={cx("topic")}>Quản Lí Đơn Hàng</h1>
        <div className={cx("navbar")}>
          <Input small type="text" />
          <Select
            onChange={(e) => {}}
            values={[{ _id: 1, label: "" }]}
            color="#6a6474"
            className={cx("my-dropdown")}
            options={[{ value: "1", label: "Danh mục" }]}
          />
        </div>
        <div className={cx("table")}>
          <Table titleTable={titleTable} />
        </div>
    </div>
  );
}

export default Order;
