import classNames from "classnames/bind";
import styles from "./order.module.scss";
import Select from "react-dropdown-select";
import Input from "~/components/input";
import Table from "~/components/table";
import { pages } from "~/config";

const cx = classNames.bind(styles);

function Order() {
  const titleTable = [
    "Mã đơn hàng",
    "Tình trạng",
    "Thời gian",
    "Tổng đơn giá"
  ];

  return (
    <div className={cx("wapper")}>
        <h1 className={cx("topic")}>Quản Lí Đơn Hàng</h1>
        <div className={cx("navbar")}>
          <Input small type="text" />
        </div>
        <div className={cx("table")}>
          <Table to={pages.orderDetail} titleTable={titleTable} />
        </div>
    </div>
  );
}

export default Order;
