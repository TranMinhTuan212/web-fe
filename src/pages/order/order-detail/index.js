import classNames from "classnames/bind";
import styles from "./order-detail.module.scss";
import { Link } from "react-router-dom";
import { pages } from "~/config";
import ProductRow from "~/components/product-row";

const cx = classNames.bind(styles);

function OrderDetail() {

    const to = pages.productDetail

    const data = [
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
        {
          code: "0001",
          category: "Áo quần",
          store: "STORE 1",
          price: 100000,
        },
      ];

  return (
    <div className={cx("wapper")}>
      <h1 className={cx("topic")}>Chi tiết đơn hàng</h1>

      <div className={cx("information")}>
        <div className={cx("user")}>
          <div className={cx("info")}>Tên khách hàng: Đinh Ngọc Phong</div>
          <div className={cx("info")}>Địa chỉ giao hàng: Phước Long B</div>
          <div className={cx("info")}>Tổng tiền: 100.000$</div>
          <div className={cx("info")}>Trạng thái: đang giao</div>
        </div>

        <div className="admin">
          <div className={cx("info")}>Cửa hàng: Shoppe Fake G Group</div>
          <div className={cx("info")}>Địa chỉ shop: Phước Long C</div>
          <div className={cx("info")}>Giấy phép kinh doanh: có</div>
          <div className={cx("info")}>Số tax: 0123456789</div>
        </div>
      </div>
        <hr className={cx('hr')}/>
      <div className={cx('content')}>
            <h1 className={cx("sub-topic")}>Danh sách sản phẩm</h1>
            <div className={cx('products')}>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
                <ProductRow/>
            </div>
      </div>
    </div>
  );
}

export default OrderDetail;
