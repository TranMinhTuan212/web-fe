import classNames from "classnames/bind";
import style from "./form-register.module.scss";
import Input from "../input";
import Button from "../button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useGlobalState } from "~/provider/useGlobalState";
import { setLoading, setPopup } from "~/provider/action";
import { isEmail, max30, max50, min6, notEmpty, validateForm } from "~/validation";
import { useRef } from "react";
import { message } from "~/enum";
import { apiLink } from "~/key";
import { pages } from "~/config";

const cx = classNames.bind(style);

function FormRegister() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [, dispatch] = useGlobalState();
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const navigate = useNavigate()

  function handleSubmit() {
    let flag = true;

    const validateEmail = validateForm(email, [isEmail, notEmpty, max50]);
    if (typeof validateEmail === "string") {
      flag = false;
      emailRef.current.textContent = validateEmail;
    }

    const validateName = validateForm(name, [notEmpty, max50]);
    if (typeof validateName === "string") {
      flag = false;
      nameRef.current.textContent = validateName;
    }

    const validatePassword = validateForm(password, [notEmpty, max30, min6]);
    if (typeof validatePassword === "string") {
      flag = false;
      passwordRef.current.textContent = validatePassword;
    }

    const validateConfirmPassword = validateForm(confirmPassword, [notEmpty, max30]);
    if (typeof validateConfirmPassword === "string") {
      flag = false;
      confirmPasswordRef.current.textContent = validateConfirmPassword;
    } else {
      if (password !== confirmPassword) {
        flag = false;
        confirmPasswordRef.current.textContent = message.CONFIRM_PASSWORD
      }
    }



    if (flag) {
      const formData = {
        email: email,
        name: name,
        password: password,
        confirm_password: confirmPassword,
      };
      dispatch(setLoading(true));
      axios
        .post(`${apiLink}user/register`, formData)
        .then((res) => {
          dispatch(setLoading(false));
          navigate(pages.login)
          dispatch(setPopup({ type: true, text: res.data?.message }));
        })
        .catch((e) => {
          dispatch(setPopup({ type: false, text: e.response?.data?.message }));
          dispatch(setLoading(false));
        });
    }
  }

  return (
    <div className={cx("wapper")}>
      <h1 className={cx("text-center", "fw-bold", "pb-5", "d-block")}>
        Đăng Ký
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
        setRef={nameRef}
        state={name}
        setState={setName}
        topic="Nhập tên"
        required={true}
        medium
      />
      <Input
        setRef={passwordRef}
        state={password}
        setState={setPassword}
        type="password"
        topic="Nhập mật khẩu"
        required={true}
        medium
      />
      <Input
        setRef={confirmPasswordRef}
        state={confirmPassword}
        setState={setConfirmPassword}
        type="password"
        topic="Nhập lại mật khẩu"
        required={true}
        medium
      />
      <div className={cx("option", "mb-5")}>
        <div>
          <Link className={cx("item")} to="/login">
            Đăng nhập
          </Link>
        </div>
      </div>
      <Button onSubmit={handleSubmit} large text="Đăng Ký" />
    </div>
  );
}

export default FormRegister;
