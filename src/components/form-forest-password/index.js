import classNames from "classnames/bind";
import styles from "./form-forest-password.module.scss";
import Input from "../input";
import Button from "../button";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function FormForestPassword() {

    function handleSubmit(){
        
    }

  return (
    <div className={cx("wapper")}>
      <h1 className={cx("text-center", "fw-bold", "pb-5", "d-block")}>Quên Mật Khẩu</h1>
      <Input topic="Nhập email" required={true} />
      <div className={cx('option', 'mb-5')}>
        <div><Link className={cx('item')} to="/login">Đăng Nhập</Link></div>
        <div><Link className={cx('item')} to="/register">Đăng ký</Link></div>
      </div>
      <Button large onSubmit={handleSubmit} text="Xác Nhận" />
    </div>
  );
}

export default FormForestPassword;
