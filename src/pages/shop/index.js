import classNames from "classnames/bind";
import styles from "./shop.module.scss";
import Product from "~/components/product";

const cx = classNames.bind(styles);

function Shop() {
  return (
    <div className={cx("wapper")}>
      <div className={cx('product')}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Shop;
