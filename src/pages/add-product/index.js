import classNames from "classnames/bind";
import styles from './add-product.module.scss'

const cx = classNames.bind(styles)

function AddProduct() {
    return ( 
        <div className={cx('wapper')}></div>
     );
}

export default AddProduct;