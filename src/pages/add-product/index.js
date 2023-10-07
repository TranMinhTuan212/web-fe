import { useEffect, useRef, useState } from "react";
import styles from "./add-product.module.scss";
import classNames from "classnames/bind";
import Input from "~/components/input";
import Button from "~/components/button";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import {
  isNumber,
  validateForm,
  notEmpty,
  typeFile,
  isCategory,
} from "~/validation";
import axios from "axios";
import { useGlobalState } from "~/provider/useGlobalState";
import { apiLink, userKey } from "~/key";
import { useNavigate } from "react-router-dom";
import { pages } from "~/config";
import { setLoading, setPopup } from "~/provider/action";
import Select from "react-dropdown-select";

const cx = classNames.bind(styles);

function AddProduct() {
  const [, dispatch] = useGlobalState();
  const navigate = useNavigate();

  const nameMessageRef = useRef();
  const barcodeMessageRef = useRef();
  const priceMessageRef = useRef();
  const descriptionMessageRef = useRef();
  const discountMessageRef = useRef();
  const originMessageRef = useRef();
  const unitMessageRef = useRef();

  const resetCategoryRef = useRef();

  const [name, setName] = useState("");
  const [barcode, setBarcode] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [origin, setOrigin] = useState("");
  const [unit, setUnit] = useState("");

  const [selectImage, setSelectImage] = useState();
  const [categories, setCategories] = useState([]);

  const [photoMessage, setPhotoMessage] = useState("");

  const [categotyId, setCategoryId] = useState("");

  const uploadRef = useRef();

  const categoryRef = useRef();

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
    let flag = true;

    const nameValidate = validateForm(name, [notEmpty]);
    if (typeof nameValidate === "string") {
      flag = false;
      nameMessageRef.current.textContent = nameValidate;
    }

    const nameBarcode = validateForm(barcode, [notEmpty]);
    if (typeof nameBarcode === "string") {
      flag = false;
      barcodeMessageRef.current.textContent = nameBarcode;
    }

    const priceValidate = validateForm(price, [notEmpty, isNumber]);
    if (typeof priceValidate === "string") {
      flag = false;
      priceMessageRef.current.textContent = priceValidate;
    }

    const descriptionValidate = validateForm(description, [notEmpty]);
    if (typeof descriptionValidate === "string") {
      flag = false;
      descriptionMessageRef.current.textContent = descriptionValidate;
    }

    const discountValidate = validateForm(discount, [notEmpty, isNumber]);
    if (typeof discountValidate === "string") {
      flag = false;
      discountMessageRef.current.textContent = discountValidate;
    }

    const fileValidate = validateForm(uploadRef.current.files[0], [typeFile]);
    if (typeof fileValidate === "string") {
      flag = false;
      setPhotoMessage(fileValidate);
    }

    const categoryValidate = validateForm(categotyId, [isCategory]);
    if (typeof categoryValidate === "string") {
      flag = false;
      categoryRef.current.textContent = categoryValidate;
    }

    if (flag) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("barcode", barcode);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("discount", discount);
      formData.append("categoryId", categotyId);
      formData.append("file", uploadRef.current.files[0]);
      dispatch(setLoading(true));

      const user = JSON.parse(localStorage.getItem(userKey))

      if (!user) {
        return navigate(pages.login);
      }
      const headers = {
        Authorization: `Bearer ${user.accessToken}`,
      };
      axios
        .post(`${apiLink}product/create-product`, formData, { headers })
        .then((response) => {
          if (response.data.status === 200) {
            dispatch(setPopup({ type: true, text: response.data.message }))
          } else {
            if(response.data.status === 500){
              dispatch(setPopup({ type: false, text: response.data.message }))
            }else{
              dispatch(setPopup({ type: false, text: 'Có lỗi, thử lại sau !' }))
            }
          }
          resetInput();
        })
        .then(() => dispatch(setLoading(false)))
        .catch((error)=>{
          if(error.response && error.response.status === 401){
            localStorage.setItem(userKey, null)
            navigate(pages.login)
          }else{
            resetInput();
            dispatch(setPopup({ type: false, text: 'Có lỗi, thử lại sau !' }))
          }
          dispatch(setLoading(false))
        })
      
    }
  }

  function resetInput() {
    setName("");
    setPrice("");
    setDescription("");
    setDiscount("");
    setCategoryId("");
    setSelectImage("");
    resetCategoryRef.current.selectedIndex = 0;
  }

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem(userKey))
  //   if(!user){
  //     navigate(pages.login)
  //     alert('Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại')
  //   }
  //   const headers = {
  //     Authorization: `Bearer ${user.accessToken}`
  //   }
  //   dispatch(setLoading(true));
  //   axios
  //     .get(`${apiLink}category/get-all-category`, { headers })
  //     .then((response) => setCategories(response.data.data))
  //     .then(() => dispatch(setLoading(false)))
  //     .catch((error)=>{
  //       if(error.response && error.response.status === 401){
  //         localStorage.setItem(userKey, null)
  //         navigate(pages.login)
  //       }else{
  //         resetInput();
  //         dispatch(setPopup({ type: false, text: 'Có lỗi, thử lại sau !' }))
  //       }
  //       dispatch(setLoading(false))
  //     })
  // }, []);

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
          Thêm thông tin sản phẩm
        </h2>

        <div className={cx('inputs')}>
        <Input
          setRef={nameMessageRef}
          topic={"Tên sản phẩm"}
          state={name}
          setState={setName}
          required={true}
          small
        />
        <Input
          setRef={barcodeMessageRef}
          topic={"Mã sản phẩm"}
          state={barcode}
          setState={setBarcode}
          required={true}
          small
        />
        <Input
          type="number"
          setRef={priceMessageRef}
          topic={"Giá sản phẩm"}
          state={price}
          setState={setPrice}
          required={true}
          small
        />
        <Input
          type="number"
          setRef={discountMessageRef}
          topic={"Chiết khấu (%)"}
          state={discount}
          setState={setDiscount}
          required={true}
          small
        />
        <Input
          type="text"
          setRef={originMessageRef}
          topic={"Xuất xứ"}
          state={origin}
          setState={setOrigin}
          required={true}
          small
        />
        <Input
          type="text"
          setRef={unitMessageRef}
          topic={"Đơn vị"}
          state={unit}
          setState={setUnit}
          required={true}
          small
        />
        <Select values={[{ value: 1, label: 'tuấn' }]} color="#6a6474" className={cx("my-dropdown")} options={[{ value: 1, label: 'tuấn' }, { value: 2, label: 'phong' }, { value: 3, label: 'phong' }, { value: 4, label: 'phong' }]}/>
        <Input
          setRef={descriptionMessageRef}
          topic={"Mô tả sản phẩm"}
          state={description}
          required={true}
          setState={setDescription}
          large
          area
        />
        </div>
        <div className={cx('button')}><Button onSubmit={handleSubmit} icon={faAdd} text="Thêm" /></div>
      </div>
    </div>
  );
}

export default AddProduct;
