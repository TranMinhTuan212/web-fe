import classNames from "classnames/bind";
import styles from "./product.module.scss";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { pages } from "~/config";
import { apiLink } from "~/key";

const cx = classNames.bind(styles);

function Product({ onClick = () => {}, product = {} }) {
  return (
    <Link to={`${pages.productDetail}?id=${product._id}&pageType=view`} className={cx("wapper")}>
      <div className={cx("image")}>
        <img
          className={cx("image-item")}
          src={apiLink + product.image}
          alt=""
        />
      </div>
      <div className={cx("content")}>
        <div className={cx("name")}>{product.name}</div>
        <div className={cx("price")}>{product.price}$</div>
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
