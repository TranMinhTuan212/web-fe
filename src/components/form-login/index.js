import classNames from "classnames/bind";
import styles from "./form-login.module.scss";
import Input from "../input";
import Button from "../button";
import { useRef, useState } from "react";
import { isEmail, max30, max50, notEmpty, validateForm } from "~/validation";
import { useGlobalState } from "~/provider/useGlobalState";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setLoading, setLogin, setPopup } from "~/provider/action";
import { apiLink, userKey } from "~/key";
import { pages } from "~/config";

const cx = classNames.bind(styles);

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, dispatch] = useGlobalState()

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate()

  function handleSubmit() {
    let flag = true;

    const validateEmail = validateForm(email, [isEmail, notEmpty, max50]);
    if (typeof validateEmail === "string") {
      flag = false;
      emailRef.current.textContent = validateEmail;
    }

    const validatePassword = validateForm(password, [notEmpty, max30]);
    if (typeof validatePassword === "string") {
      flag = false;
      passwordRef.current.textContent = validatePassword;
    }

    if (flag) {

      const formData = {
        email: email,
        password: password,
      };

      dispatch(setLoading(true));
      axios
        .post(`${apiLink}user/login`, formData)
        .then((res) => {
          if (res.data?.status === 200) {
            // save user info
            const user = res.data?.data
            dispatch(setLogin(user))
            localStorage.setItem(userKey, JSON.stringify(user))
            navigate(pages.home)
            dispatch(setLoading(false));
          }
        })
        .catch((res) => {
          dispatch(setLoading(false));
          dispatch(setPopup({ type: false, text: res.response.data?.message }));
        });
    }
  }

  return (
    <div className={cx("wapper")}>
      <h1 className={cx("text-center", "fw-bold", "pb-5", "d-block")}>
        Đăng Nhập
      </h1>
      <Input
        setRef={emailRef}
        state={email}
        setState={setEmail}
        topic="Nhập email"
        required={true}
        medium
      />
      <Input
        type="password"
        setRef={passwordRef}
        state={password}
        setState={setPassword}
        topic="Nhập mật khẩu"
        required={true}
        medium
      />
      <div className={cx("option", "mb-5")}>
        {/* <div>
          <Link className={cx("item")} to="/forest-password">
            Quên mật khẩu
          </Link>
        </div> */}
        <div>
          <Link className={cx("item")} to="/register">
            Đăng ký
          </Link>
        </div>
      </div>
      <Button large onSubmit={handleSubmit} text="Đăng Nhập" />
    </div>
  );
}

export default FormLogin;
