import classNames from "classnames/bind";
import styles from "./password.module.scss";
import Input from "~/components/input";
import Button from "~/components/button";
import { max30, notEmpty, validateForm } from "~/validation";
import { useState } from "react";
import { useRef } from "react";
import { message } from "~/enum";

const cx = classNames.bind(styles);

function Password() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  function handleSubmit() {
    let flag = true;

    const validateNewPassword = validateForm(newPassword, [notEmpty, max30]);
    if (typeof validateNewPassword === "string") {
      flag = false;
      newPasswordRef.current.textContent = validateNewPassword;
    }

    const validatePassword = validateForm(password, [notEmpty, max30]);
    if (typeof validatePassword === "string") {
      flag = false;
      passwordRef.current.textContent = validatePassword;
    }

    const validateConfirmPassword = validateForm(confirmPassword, [
      notEmpty,
      max30,
    ]);
    if (typeof validateConfirmPassword === "string") {
      flag = false;
      confirmPasswordRef.current.textContent = validateConfirmPassword;
    } else {
      if (newPassword !== confirmPassword) {
        flag = false;
        confirmPasswordRef.current.textContent = message.CONFIRM_PASSWORD;
      }
    }

    if (flag) {
      const data = {
        password: password,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      };
      console.log(data);
    }
  }

  return (
    <div className={cx("wapper")}>
      <h1 className={cx("topic")}>Cập nhật mật khẩu</h1>
      <Input
        state={password}
        setState={setPassword}
        setRef={passwordRef}
        className={cx("input")}
        required
        topic={"Nhập mật khẩu cũ"}
        small
        type="text"
      />
      <Input
        state={newPassword}
        setState={setNewPassword}
        setRef={newPasswordRef}
        className={cx("input")}
        required
        topic={"Nhập mật khẩu mới"}
        small
        type="password"
      />
      <Input
        state={confirmPassword}
        setState={setConfirmPassword}
        setRef={confirmPasswordRef}
        className={cx("input")}
        required
        topic={"Xác nhận mật khẩu mới"}
        small
        type="password"
      />
      <div className={cx("button")}>
        <Button onSubmit={handleSubmit} text="Xác nhận" />
      </div>
    </div>
  );
}

export default Password;
