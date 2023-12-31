import classNames from "classnames/bind";
import styles from "./search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { apiLink, userKey } from "~/key";
import axios from "axios";
import { pages } from "~/config";

const cx = classNames.bind(styles);

function Search() {
  const [keyword, setKeyword] = useState("");
  const [close, setClose] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [visabled, setVisabled] = useState(false);
  const inputRef = useRef();

  function handleSearch() {
    const result = inputRef.current.value;
    setKeyword(result);
  }

  useEffect(() => {
    if (keyword.length > 0) {
      setClose(true);
    } else {
      setClose(false);
    }

    let loadData = null;
    const user = JSON.parse(localStorage.getItem(userKey));
    if(user){
      const headers = {
        Authorization: "Bearer " + user.accsess_token,
      };
      if (keyword.trim().length > 0) {
        loadData = setTimeout(() => {
          setLoading(true);
          setClose(false);
          axios
            .post(`${apiLink}product/search`, { keyWord: keyword }, { headers })
            .then((res) => {
              setSearchResult(res.data?.data);
              setLoading(false);
              setClose(true);
            });
        }, 700);
      } else {
        setSearchResult([]);
      }
    }

    return () => clearTimeout(loadData);
  }, [keyword]);

  function setInput() {
    setKeyword("");
    setSearchResult([]);
    inputRef.current.focus();
  }

  return (
    <div className={cx("tipy")}>
      <Tippy
        interactive={true}
        onClickOutside={() => setVisabled(false)}
        visible={visabled && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("box")} tabIndex="-1" {...attrs}>
            <div className={cx("search-result")}>
              {searchResult.map((result, index) => (
                <Link onClick={()=>setVisabled(false)} to={`${pages.productDetail}?id=${result._id}&pageType=view`} key={index} className={cx("result-item")}>
                  <div className={cx("picture")}>
                    <img
                      className={cx("image")}
                      src={apiLink + result.image}
                      alt="kết quả"
                    />
                  </div>
                  <div>
                  <div className={cx("name")}>{result.name}</div>
                  <div className={cx("price")}>{result.price}$</div>
                  </div>
                </Link>
              ))}
            </div>
              <div className={cx("more")}>
                <Link className={cx('link')}>Xem thêm</Link>
              </div>
          </div>
        )}
      >
        <div className={cx("wrapper")}>
          <Link
            // to={page.search}
            // onClick={handleSearchResult}
            className={cx("btn-search", "btn")}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>

          <input
            ref={inputRef}
            onFocus={() => setVisabled(true)}
            value={keyword}
            onChange={handleSearch}
            type="text"
            className={cx("input-search")}
          />

          <div
            onClick={setInput}
            className={cx("btn-close", "btn", close === true ? "show" : "")}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
          {loading && <div className={cx("loader")}></div>}
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
