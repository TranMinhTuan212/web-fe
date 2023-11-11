import classNames from "classnames/bind";
import styles from "./user.module.scss";
import { Link } from "react-router-dom";
import { pages } from "~/config";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function User({ topic = false, user = {}, callBack = ()=>{} }) {
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
        <div className={cx("text", "discount")}>Xóa</div>
      </div>
    );
  } else {
    return (
      <Link to={`${pages.profile}?id=${user._id}`} className={cx("wapper")}>
        <div className={cx("photo")}>
          <img
            className={cx("image")}
            src={process.env.PUBLIC_URL + "/images/phong.jpg"}
            // src={`${apiLink}/imageMedias/` + user.photo}
            alt="thỏ"
          />
        </div>
        <div className={cx("text", "name")}>{user.code}</div>
        <div className={cx("text", "price")}>{user.name}</div>
        <div className={cx("text", "origin")}>{user.email}</div>
        <div className={cx("text", "unit")}>{user.phone}</div>
        <div className={cx("text", "quantity")}>100</div>
        <div onClick={()=>callBack(user._id)} className={cx("text", "discount", "remove")}><FontAwesomeIcon icon={faTrashCan} /></div>
      </Link>
    );
  }
}

export default User;
