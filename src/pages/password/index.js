import classNames from "classnames/bind";
import styles from './password.module.scss'
import Input from "~/components/input";
import Button from "~/components/button";

const cx = classNames.bind(styles)

function Password() {
    return ( 
        <div className={cx('wapper')}>
            <h1 className={cx('topic')}>Cập nhật mật khẩu</h1>
            <Input className={cx('input')} required topic={"Nhập mật khẩu cũ"} small type="text"/>
            <Input className={cx('input')} required topic={"Nhập mật khẩu mới"} small type="password"/>
            <Input className={cx('input')} required topic={"Xác nhận mật khẩu mới"} small type="password"/>
            <div className={cx('button')}>
                <Button text="Xác nhận"/>
            </div>
        </div>
     );
}

export default Password;