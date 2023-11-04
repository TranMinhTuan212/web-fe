import classNames from "classnames/bind";
import styles from "./user.module.scss";
import { Link } from "react-router-dom";
import { pages } from "~/config";

const cx = classNames.bind(styles);

function User({ topic = false }) {
  if (topic) {
    return (
      <div className={cx("topic")}>
        <div className={cx("photo")}>
          <div className={cx("image", "text")}></div>
        </div>
        <div className={cx("text", "name")}>Mã KH</div>
        <div className={cx("text", "price")}>Tên KH</div>
        <div className={cx("text", "origin")}>Email</div>
        <div className={cx("text", "unit")}>Số ĐT</div>
        <div className={cx("text", "quantity")}>Đơn hàng</div>
        <div className={cx("text", "discount")}>Hạng</div>
      </div>
    );
  } else {
    return (
      <Link to={pages.profile} className={cx("wapper")}>
        <div className={cx("photo")}>
          <img
            className={cx("image")}
            src={process.env.PUBLIC_URL + "/images/phong.jpg"}
            alt="thỏ"
          />
        </div>
        <div className={cx("text", "name")}>KH001</div>
        <div className={cx("text", "price")}>Võ Văn Duy</div>
        <div className={cx("text", "origin")}>duypro@gmail.com</div>
        <div className={cx("text", "unit")}>0987654121</div>
        <div className={cx("text", "quantity")}>100</div>
        <div className={cx("text", "discount")}>VIP</div>
      </Link>
    );
  }
}

export default User;
