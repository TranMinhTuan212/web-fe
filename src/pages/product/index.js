import classNames from "classnames/bind";
import styles from "./product.module.scss";
import Input from "~/components/input";
import ProductRow from "~/components/product-row";

const cx = classNames.bind(styles);

function Product() {
  return (
    <div className={cx("wapper")}>
      <h1 className={cx("topic")}>Quản lí sản phẩm</h1>
      <div className={cx("navbar")}>
        <Input small right />
        <Input small right />
        <Input small />
      </div>
      <div className={cx("list")}>
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
        <ProductRow/>
        <ProductRow/>
        <ProductRow/>
        <ProductRow/>
        <ProductRow/>
        <ProductRow/>
      </div>
    </div>
  );
}

export default Product;
