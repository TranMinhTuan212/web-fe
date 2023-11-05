import classNames from "classnames/bind";
import styles from "./product.module.scss";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { pages } from "~/config";

const cx = classNames.bind(styles);

function Product({ onClick = () => {} }) {
  return (
    <Link to={pages.productDetail} className={cx("wapper")}>
      <div className={cx("image")}>
        <img
          className={cx("image-item")}
          src={process.env.PUBLIC_URL + "/images/tho.jpg"}
          alt=""
        />
      </div>
      <div className={cx("content")}>
        <div className={cx("name")}>Thỏ con cute</div>
        <div className={cx("price")}>100.000đ</div>
        <div className={cx("star")}>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className={cx("button")}
      >
        <Button onSubmit={onClick} text="Thêm vào giỏ hàng" />
      </div>
    </Link>
  );
}

export default Product;
