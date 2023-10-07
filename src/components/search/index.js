import classNames from "classnames/bind";
import styles from './search.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

function Search() {
  const [keyword, setKeyword] = useState("");
  const [close, setClose] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [visabled, setVisabled] = useState(false);
  const inputRef = useRef();

  function handleSearch(){
    const result = inputRef.current.value
    // getDataSearch(result);
    setKeyword(result);
  }

  useEffect(() => {
    if (keyword.length > 0) {
      setClose(true);
    } else {
      setClose(false);
    }
  }, [keyword]);

  // function getDataSearch(value) {
    
  // }

  // useEffect(()=>{
  //   let loadData = null;
  //   if (keyword.trim().length > 0) {
  //     loadData = setTimeout(() => {

  //       setLoading(true)
  //       setClose(false)
  //     fetch(
  //       `http://localhost/workplace/book-store/public/api/search-tippy/${keyword}`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {setSearchResult(data); setLoading(false); setClose(true)});
        
  //     }, 700);

      
  //   } else {
  //     setSearchResult([]);
  //   }

  //   return ()=>clearTimeout(loadData)
  // }, [keyword])

  function setInput(){
    setKeyword("")
    setSearchResult([])
    inputRef.current.focus()
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
                <div key={index} className={cx("result-item")}>
                  <div className={cx("picture")}>
                    <img
                      className={cx("image")}
                      src={`http://localhost/workplace/book-store/public/storage/library/image/${result.photo}`}
                      alt="kết quả"
                    />
                  </div>
                  <div className={cx("name")}>{result.name}</div>
                </div>
              ))}

              <div className={cx('more')}><Link>Xem thêm</Link></div>
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
          {
            loading && <div className={cx('loader')}></div>
          }
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
