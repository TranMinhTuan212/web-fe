import classNames from "classnames/bind";
import styles from "./product.module.scss";
import Input from "~/components/input";
import ProductRow from "~/components/product-row";
import { useGlobalState } from "~/provider/useGlobalState";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { apiLink, userKey } from "~/key";
import { setLoading, setPopup } from "~/provider/action";

const cx = classNames.bind(styles);

function Product() {

  const [state, dispatch] = useGlobalState()
  const [data, setData] = useState([])
  const [keyWord, setKey] = useState('')

  useEffect(()=>{
      const user = JSON.parse(localStorage.getItem(userKey))
      const headers = {
        Authorization: `Bearer ${user.accessToken}`,
      };
      axios
        .post(`${apiLink}product/search`, { keyWord }, { headers })
        .then((res) => {console.log(res)
          if (res.data.data) {
            setData(res.data.data);
          }
        })
        .catch((e) => {console.log(e)
          dispatch(setPopup({ type: false, text: 'Có lỗi thử lại sau' }));
        });
    dispatch(setLoading(false));
  }, [keyWord])

  return (
    <div className={cx("wapper")}>
      <h1 className={cx("topic")}>Quản lí sản phẩm</h1>
      <div className={cx("navbar")}>
        <Input state={keyWord} setState={setKey} search placeHolder="Tìm kiếm sản phẩm" small right />
      </div>
      <ProductRow topic/>
      <div className={cx("list")}>
        {
          data &&
          data.map((item) => (
            <ProductRow product={item}/>
          ))
        }
      </div>
    </div>
  );
}

export default Product;
