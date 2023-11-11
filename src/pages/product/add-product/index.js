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
} from "~/validation";
import axios from "axios";
import { useGlobalState } from "~/provider/useGlobalState";
import { apiLink, userKey } from "~/key";
import { useNavigate } from "react-router-dom";
import { pages } from "~/config";
import { setLoading, setPopup } from "~/provider/action";
import Select from "~/components/select";

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

  const [name, setName] = useState("");
  const [barcode, setBarcode] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [origin, setOrigin] = useState("");
  const [unit, setUnit] = useState("");
  const [image, setImage] = useState("");

  const [selectImage, setSelectImage] = useState('');

  const [categoryList, setCategoryList] = useState([]);

  const [photoMessage, setPhotoMessage] = useState("");

  const [category_id, setCategoryId] = useState("");

  const uploadRef = useRef();

  function handleUpload() {
    const file = uploadRef.current.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImage(file.name);
    }
    setPhotoMessage("");
  }

  useEffect(()=>{
    dispatch(setLoading(true))
    axios.get(`${apiLink}category/all`)
    .then((res)=>{
      const list = []
      res.data?.data.forEach(element => {
        list.push({ value: element._id, label: element.name })
      });
      setCategoryList(list)
      if(list.length > 0){
        setCategoryId(list[0].value)
      }
      dispatch(setLoading(false))
    })
    .catch((res)=>{
      dispatch(setLoading(false))
      dispatch(setPopup({ type: false, text: 'Có lỗi thử lại sau' }))
    })
  }, [])

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

    if (flag) {
      const data = {
        name,
        code : barcode,
        price: +price,
        description,
        discount: +discount,
        category_id,
        image,
        origin,
        unit,
      };
      dispatch(setLoading(true));
      const user = JSON.parse(localStorage.getItem(userKey))

      if (!user) {
        return navigate(pages.login);
      }
      const headers = {
        Authorization: `Bearer ${user.accessToken}`,
      };
      dispatch(setLoading(true))
      axios
        .post(`${apiLink}product/create`, data, { headers })
        .then((res) => {
          dispatch(setPopup({ type: true, text: res.data?.message }))
          resetInput();
        })
        .catch((res)=>{
          dispatch(setLoading(false))
          dispatch(setPopup({ type: false, text: 'Có lỗi thử lại sau' }))
        })
        dispatch(setLoading(false))
    }
  }

  function resetInput() {
    setName("");
    setBarcode("");
    setOrigin("")
    setUnit("")
    setPrice("");
    setDescription("");
    setDiscount("");
    setCategoryId("");
    setSelectImage(null);
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

        <div className={cx("inputs")}>
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
          <Select
            onChange={(e) => {
              setCategoryId(e[0]?.value);
            }}
            value={categoryList[0]}
            data={categoryList}
          />
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
        <div className={cx("button")}>
          <Button onSubmit={handleSubmit} icon={faAdd} text="Thêm" />
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
