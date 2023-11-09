import classNames from "classnames/bind";
import styles from './product-detail.module.scss'
import Input from "~/components/input";
import Button from "~/components/button";
import Select from "react-dropdown-select";
import { useGlobalState } from "~/provider/useGlobalState";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { setLoading, setPopup } from "~/provider/action";
import { apiLink } from "~/key";
import { isNumber, notEmpty, typeFile, validateForm } from "~/validation";

const cx = classNames.bind(styles)

function ProductDetail() {

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
  const [image, setImage] = useState("");

  const [selectImage, setSelectImage] = useState();
  const [category, setCategories] = useState("");

  const [categoryList, setCategoryList] = useState([])

  const [photoMessage, setPhotoMessage] = useState("");

  const [categotyId, setCategoryId] = useState("");

  const uploadRef = useRef();

  const [searchParams, setSearchParams] = useSearchParams();
  const _id = searchParams.get("id")

  useEffect(()=>{
    dispatch(setLoading(true));
      axios
        .post(`${apiLink}product/detail`, { _id })
        .then((res) => {console.log(res)
          if (res.data.data) {
            const product = res.data.data.product
            console.log(product)
            setName(product.name)
            setBarcode(product.code)
            setPrice(product.price)
            setUnit('Thùng')
          }
        })
        .catch((e) => {console.log(e)
          dispatch(setPopup({ type: false, text: e.response.data?.message }));
        });
    dispatch(setLoading(false));
  }, [])
  
  function handleUpload() {
    const file = uploadRef.current.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImage(file.name)
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
                Chi tiết sản phẩm
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
            <Select onChange={e=>{setCategories(e[0]?.value)}} values={[categoryList[0] || {_id: 1, label: ''}]} color="#6a6474" className={cx("my-dropdown")} options={categoryList || []}/>
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
            <div className={cx('button')}><Button onSubmit={handleSubmit} icon={''} text="Thêm" /></div>
          </div>
        </div>
      );
}

export default ProductDetail;