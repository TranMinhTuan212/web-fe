import classNames from "classnames/bind";
import styles from "./product-detail.module.scss";
import Input from "~/components/input";
import Button from "~/components/button";
import Select from "react-dropdown-select";
import { useGlobalState } from "~/provider/useGlobalState";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { setLoading, setPopup } from "~/provider/action";
import { apiLink, userKey } from "~/key";
import { isNumber, notEmpty, typeFile, validateForm } from "~/validation";
import { pages } from "~/config";
import { ERole } from "~/enum";

const cx = classNames.bind(styles);

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

  const [id, setId] = useState('')
  const [name, setName] = useState("");
  const [barcode, setBarcode] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [origin, setOrigin] = useState("");
  const [unit, setUnit] = useState("");
  const [avatar, setAvatar] = useState('')
  const [avatarFile, setAvatarFile] = useState('')
  const [version, setVersion] = useState('')

  const [selectImage, setSelectImage] = useState();

  const [categoryList, setCategoryList] = useState([]);

  const [photoMessage, setPhotoMessage] = useState("");

  const [categoryId, setCategoryId] = useState("");
  const [disable, setDisabled] = useState(true);

  const uploadRef = useRef();
  const user = JSON.parse(localStorage.getItem(userKey));

  const [searchParams] = useSearchParams();
  const _id = searchParams.get("id");
  const pageType = searchParams.get("pageType");

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${user.accessToken}`,
    };
    dispatch(setLoading(true));
    axios
      .get(`${apiLink}category/all`, { headers })
      .then((res) => {
        const list = [];
        res.data?.data.forEach((element) => {
          list.push({ value: element._id, label: element.name });
        });
        setCategoryList(list);
        if (list.length > 0) {
          if(!_id){
            setCategoryId(list[0].value);
          }
        }
        dispatch(setLoading(false));
      })
      .catch((res) => {
        dispatch(setLoading(false));
        dispatch(setPopup({ type: false, text: "Có lỗi thử lại sau" }));
      });
  }, []);

  useEffect(() => {
    switch (pageType) {
      case "view":
      case "edit":
        dispatch(setLoading(true));
        axios
          .post(`${apiLink}product/detail`, { _id })
          .then((res) => {
            if (res?.data?.data) {
              const product = res.data.data.product;
              setName(product.name);
              setBarcode(product.code);
              setPrice(+product.price);
              setUnit(product.unit);
              setOrigin(product.origin);
              setDescription(product.description);
              setDiscount(product.discount);
              setAvatar(product.image)
              setVersion(product.version)
              setId(product._id)
              setCategoryId(product.categoryId);
            }
            dispatch(setLoading(false));
          })
          .catch((e) => {
            dispatch(setPopup({ type: false, text: e?.response?.data?.message || 'Có lỗi thử lại sau' }));
            dispatch(setLoading(false));
          });
        break;
      default:
        break;
    }
  }, [disable, _id]);

  function handleUpload() {
    const file = uploadRef.current.files[0];
    const reader = new FileReader();
    setAvatarFile(file)
    reader.onloadend = () => {
      setSelectImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setAvatar(file.name);
    }
    setPhotoMessage("");
  }

  function handleSubmit() {
    switch (disable) {
      case true:
        setDisabled(false);
        break;
      case false:
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

        const priceValidate = validateForm(+price, [notEmpty, isNumber]);
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

        const fileValidate = validateForm(uploadRef.current.files[0], [
          typeFile,
        ]);
        if (typeof fileValidate === "string" && !avatar) {
          flag = false;
          setPhotoMessage(fileValidate);
        }

        if (flag) {
          const data = {
            _id,
            name,
            code: barcode,
            price,
            description,
            discount,
            categoryId,
            origin,
            unit,
            version
          };
          const formData = new FormData()
          formData.append('image', avatarFile)
          dispatch(setLoading(true));
          const user = JSON.parse(localStorage.getItem(userKey));

          if (!user) {
            return navigate(pages.login);
          }
          const headers = {
            Authorization: `Bearer ${user.accessToken}`,
          };
          dispatch(setLoading(true));
          axios
            .put(`${apiLink}product/update`, data, { headers })
            .then(()=>{
              if(avatarFile){
                axios.post(`${apiLink}product/upload?productId=${id}`, formData, { headers })
                .then((res)=>{
                  dispatch(setPopup({ type: true, text: res.data?.message }));
                  dispatch(setLoading(false));
                  resetInput()
                  setDisabled(true)
              })
              .catch((res) => {
                dispatch(
                  setPopup({ type: false, text: res.response?.data?.message || 'Có lỗi thử lại sau !' })
                );
                dispatch(setLoading(false));
              })
            }else{
              dispatch(setPopup({ type: true, text: 'Cập nhật thành công !' }));
              dispatch(setLoading(false));
              setDisabled(true)
            }
              })
            .catch((res) => {
              dispatch(setLoading(false));
              dispatch(setPopup({ type: false, text: res.data?.message || 'Có lỗi thử lại sau' }));
            });
        }
        break;
      default:
        break;
    }
  }

  function resetInput() {
    setName("");
    setBarcode("");
    setOrigin("");
    setUnit("");
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
          <img className={cx("photo-demo")} src={selectImage || `${apiLink}${avatar}`} alt="" />
          <input
            disabled={disable}
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
          Chỉ cho phép hình ảnh .jpg, .png .jfif
        </h5>
      </div>
      <div className={cx("col-md-9", " px-2", "ps-5")}>
        <h2 className={cx("fw-bold", "fs-1", "mb-5")}>Chi tiết sản phẩm</h2>

        <div className={cx("inputs")}>
          <Input
            disabled={disable}
            setRef={nameMessageRef}
            topic={"Tên sản phẩm"}
            state={name}
            setState={setName}
            required={true}
            small
          />
          <Input
            disabled={disable}
            setRef={barcodeMessageRef}
            topic={"Mã sản phẩm"}
            state={barcode}
            setState={setBarcode}
            required={true}
            small
          />
          <Input
            disabled={disable}
            type="number"
            setRef={priceMessageRef}
            topic={"Giá sản phẩm"}
            state={price}
            setState={setPrice}
            required={true}
            small
          />
          <Input
            disabled={disable}
            type="number"
            setRef={discountMessageRef}
            topic={"Chiết khấu (%)"}
            state={discount}
            setState={setDiscount}
            required={true}
            small
          />
          <Input
            disabled={disable}
            type="text"
            setRef={originMessageRef}
            topic={"Xuất xứ"}
            state={origin}
            setState={setOrigin}
            required={true}
            small
          />
          <Input
            disabled={disable}
            type="text"
            setRef={unitMessageRef}
            topic={"Đơn vị"}
            state={unit}
            setState={setUnit}
            required={true}
            small
          />
          <Select
            disabled={disable}
            onChange={(e) => {
              setCategoryId(e[0]?.value);
            }}
            defaultValue={{
              value: categoryId,
              label: categoryList.filter((item) => item.value === categoryId)[0]?.label,
            }}
            values={[ { value: categoryId, label: categoryList.filter(item=>item.value === categoryId)[0]?.label }]}
            color="#6a6474"
            className={cx("my-dropdown")}
            options={categoryList || []}
          />
          <Input
            disabled={disable}
            setRef={descriptionMessageRef}
            topic={"Mô tả sản phẩm"}
            state={description}
            required={true}
            setState={setDescription}
            large
            area
          />
        </div>
        {user.role === ERole.admin && (
          <div className={cx("button")}>
            <Button
              onSubmit={handleSubmit}
              icon={""}
              text={disable ? "Sửa" : "Lưu"}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
