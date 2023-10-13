import classNames from "classnames/bind";
import styles from "./profile.module.scss";
import { useGlobalState } from "~/provider/useGlobalState";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import Input from "~/components/input";
import Button from "~/components/button";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Profile() {
  const [, dispatch] = useGlobalState();
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(true);

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [award, setAward] = useState("");
  const [detail, setDetail] = useState("");
  const [selectImage, setSelectImage] = useState();

  const [photoMessage, setPhotoMessage] = useState("");

  const emailRef = useRef();
  const codeRef = useRef();
  const fullNameRef = useRef();
  const phoneRef = useRef();
  const provinceRef = useRef();
  const districtRef = useRef();
  const awardRef = useRef();
  const detailRef = useRef();
  const uploadRef = useRef();

  function handleUpload() {
    const file = uploadRef.current.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    setPhotoMessage("");
  }

  function handleSubmit() {
    setDisabled(true)
  }

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
            disabled={disabled}
          />
          <Input
            setRef={codeRef}
            topic={"Mã"}
            state={code}
            setState={setCode}
            required={true}
            small
            disabled={disabled}
          />
          <Input
            setRef={fullNameRef}
            topic={"Tên"}
            state={fullName}
            setState={setFullName}
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
