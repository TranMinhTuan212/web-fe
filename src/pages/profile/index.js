import classNames from "classnames/bind";
import styles from "./profile.module.scss";
import { useGlobalState } from "~/provider/useGlobalState";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Input from "~/components/input";
import Button from "~/components/button";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { setLoading, setPopup } from "~/provider/action";
import axios from "axios";
import { apiLink, userKey } from "~/key";
import { isPhone, max100, max30, max50, notEmpty, validateForm } from "~/validation";

const cx = classNames.bind(styles);

function Profile() {
  const [, dispatch] = useGlobalState();
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(true);

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [award, setAward] = useState("");
  const [detail, setDetail] = useState("");
  const [selectImage, setSelectImage] = useState();
  const [avatar, setAvatar] = useState("")

  const [photoMessage, setPhotoMessage] = useState("");

  const emailRef = useRef();
  const codeRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const provinceRef = useRef();
  const districtRef = useRef();
  const awardRef = useRef();
  const detailRef = useRef();
  const uploadRef = useRef();

  const user = JSON.parse(localStorage.getItem(userKey))
    const headers = {
      Authorization: 'Bearer '+ user.accsess_token
    }

  function handleUpload() {
    const file = uploadRef.current.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setAvatar(file.name)
    }
    setPhotoMessage("");
  }

  function handleSubmit() {
    let flag = true;

    const validateName = validateForm(name, [notEmpty, max50]);
    if (typeof validateName === "string") {
      flag = false;
      nameRef.current.textContent = validateName;
    }

    const validatePhone = validateForm(phone, [notEmpty, isPhone]);
    if (typeof validatePhone === "string") {
      flag = false;
      phoneRef.current.textContent = validatePhone;
    }

    const validateProvince = validateForm(province, [notEmpty, max30]);
    if (typeof validateProvince === "string") {
      flag = false;
      provinceRef.current.textContent = validateProvince;
    }

    const validateDistrict = validateForm(district, [notEmpty, max30]);
    if (typeof validateDistrict === "string") {
      flag = false;
      districtRef.current.textContent = validateDistrict;
    }

    const validateAward = validateForm(award, [notEmpty, max30]);
    if (typeof validateAward === "string") {
      flag = false;
      awardRef.current.textContent = validateAward;
    }

    const validateDetail = validateForm(detail, [notEmpty, max100]);
    if (typeof validateDetail === "string") {
      flag = false;
      detailRef.current.textContent = validateDetail;
    }

    const validateAvatar = validateForm(avatar, [notEmpty, max100]);
    if (typeof validateAvatar === "string") {
      flag = false;
      setPhotoMessage(validateAvatar)
    }

    // setDisabled(true)
    // const data = {
    //   email,
    //   code,
    //   name,
    //   phone,
    //   province,
    //   district,
    //   award,
    //   detail,
    //   avatar
    // }
    // console.log(data)
  }

  useEffect(()=>{
    
    dispatch(setLoading(true))
    axios.get(`${apiLink}user/me-profile`, { headers })
    .then((res)=>{
      setEmail(res.data?.data?.email)
      setCode(res.data?.data?.code)
      setName(res.data?.data?.name)
      setPhone(res.data?.data?.phone)
      setProvince(res.data?.data?.province)
      setDistrict(res.data?.data?.district)
      setAward(res.data?.data?.award)
      setDetail(res.data?.data?.detail)
      setAvatar(res.data?.data?.avatar)

      dispatch(setLoading(false))
    })
    .catch((res)=>{
      dispatch(setLoading(false)) 
      dispatch(setPopup({ type: false, text: res.response.data.message }))
    })
  }, [])

  return (
    <div className={cx("wapper")}>
      <div className={cx("col-md-3", "left")}>
        <div
          onClick={() => {
            uploadRef.current.click();
          }}
          className={cx("photo")}
        >
          <img className={cx("photo-demo")} src={selectImage} alt="" />
          <input
            disabled={disabled}
            onChange={handleUpload}
            ref={uploadRef}
            type="file"
            name="file"
            hidden
          />
        </div>
        <span
          className={cx(
            "text-danger",
            "d-block",
            "px-3",
            "mt-2",
            "fs-4",
            "text-center"
          )}
        >
          {photoMessage}
        </span>
        <h5 className={cx("text-center", "mt-3")}>
          Chỉ cho phép hình ảnh .jpg, .png
        </h5>
      </div>
      <div className={cx("col-md-9", " px-2", "ps-5")}>
        <h2 className={cx("fw-bold", "fs-1", "mb-5")}>
          Cập nhật thông tin cá nhân
        </h2>

        <div className={cx("inputs")}>
          <Input
            setRef={emailRef}
            topic={"Email"}
            state={email}
            setState={setEmail}
            required={true}
            small
            disabled={true}
          />
          <Input
            setRef={codeRef}
            topic={"Mã"}
            state={code}
            setState={setCode}
            required={true}
            small
            disabled={true}
          />
          <Input
            setRef={nameRef}
            topic={"Tên"}
            state={name}
            setState={setName}
            required={true}
            small
            disabled={disabled}
          />
          <Input
            type="number"
            setRef={phoneRef}
            topic={"Số điện thoại"}
            state={phone}
            setState={setPhone}
            required={true}
            small
            disabled={disabled}
          />
          <Input
            type="text"
            setRef={provinceRef}
            topic={"Tỉnh / Thành Phố"}
            state={province}
            setState={setProvince}
            required={true}
            small
            disabled={disabled}
          />
          <Input
            type="text"
            setRef={districtRef}
            topic={"Quận / Huyện"}
            state={district}
            setState={setDistrict}
            required={true}
            small
            disabled={disabled}
          />
          <Input
            type="text"
            setRef={awardRef}
            topic={"Phường / Xã"}
            state={award}
            setState={setAward}
            required={true}
            small
            disabled={disabled}
          />
          <Input
            type="text"
            setRef={detailRef}
            topic={"Địa chỉ chi tiết"}
            state={detail}
            required={true}
            setState={setDetail}
            large
            area
            disabled={disabled}
          />
        </div>
        {
            disabled ? <div className={cx("button")}>
          <Button
            disabled={disabled}
            onSubmit={()=>setDisabled(false)}
            text="Sửa"
          />
        </div> : 
        <div className={cx("button")}>
          <Button
            disabled={disabled}
            onSubmit={handleSubmit}
            text="Lưu"
          />
        </div>
        }
      </div>
    </div>
  );
}

export default Profile;