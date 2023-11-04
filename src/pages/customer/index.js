import classNames from "classnames/bind";
import styles from './customer.module.scss'
import Input from "~/components/input";
import User from "~/components/user";

const cx = classNames.bind(styles)

function Customer() {
    return (
        <div className={cx("wapper")}>
          <h1 className={cx("topic")}>Quản lí người dùng</h1>
          <div className={cx("navbar")}>
            <Input search placeHolder="Tìm kiếm người dùng" small right />
          </div>
          <User topic/>
          <div className={cx("list")}>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
          </div>
        </div>
      );
    }

export default Customer;