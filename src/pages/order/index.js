import classNames from "classnames/bind";
import styles from "./order.module.scss";
import Input from "~/components/input";
import Table from "~/components/table";
import { pages } from "~/config";
import { useState } from "react";
import Select from "~/components/select";
import { OrderStatusList } from "~/enum";

const cx = classNames.bind(styles);

function Order() {

  const [keyword, setKeyword] = useState('')
  const [status, setStatus] = useState(OrderStatusList[0]?.value)

  const titleTable = [
    "Mã đơn hàng",
    "Tình trạng",
    "Ngày đặt hàng",
    "Tổng đơn thanh toán"
  ];

  return (
    <div className={cx("wapper")}>
        <h1 className={cx("topic")}>Quản Lí Đơn Hàng</h1>
        <div className={cx("navbar")}>
          <Input right search state={keyword} setState={setKeyword} placeHolder="Tìm kiếm đơn hàng" small type="text" />
          <Select data={OrderStatusList} value={OrderStatusList[0]} onChange={e=>setStatus(e)}/>
        </div>
        <div className={cx("table")}>
          <Table to={pages.orderDetail} titleTable={titleTable}/>
        </div>
    </div>
  );
}

export default Order;
