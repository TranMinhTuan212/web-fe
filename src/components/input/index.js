import classNames from "classnames/bind";
import styles from "./input.module.scss";
import { message } from "~/enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Input({
  topic,
  type = "text",
  state = "",
  setState = () => {},
  setRef,
  required = false,
  disabled = false,
  small = false,
  large = false,
  medium = false,
  area = false,
  className = false,
  left = false,
  right = false,
  placeHolder = false,
  search = false
}) {
  function handleValidate(e) {
    const inputValue = e.target.value;
    setState(inputValue);

    const messageElement = e.target.parentElement.querySelectorAll("span")[2];
    if (messageElement) {
      if (inputValue && inputValue.trim() !== "") {
        messageElement.textContent = "";
      } else {
        messageElement.textContent = message.NOT_EMPTY;
      }
    }
  }

  let Tag = "input";
  if (area) {
    Tag = "textArea";
  }

  if(!area){
    return (
      <div
        className={cx(
          "wapper",
          { medium },
          { small },
          { large },
          { area },
          { className },
          { left },
          { right }
        )}
      >
        <span className={className}>{topic}</span>{" "}
        {required && <span className={cx("text-danger", "fs-4")}>*</span>} <br />
        <Tag
          placeholder={placeHolder}
          disabled={disabled}
          onBlur={(e) => {
            handleValidate(e);
          }}
          value={state}
          className={cx("my-input", { area }, { disabled })}
          onChange={(e) => handleValidate(e)}
          type={type}
          name="text"
        />{" "}
        <br />
        <span ref={setRef} className={cx("message")}></span>
        {search && (
          <div className={cx("icon")}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        )}
      </div>
    )
  }else{
    return (
      <div
        className={cx(
          "wapper",
          { medium },
          { small },
          { large },
          { area },
          { className },
          { left },
          { right }
        )}
      >
        <span className={className}>{topic}</span>{" "}
        {required && <span className={cx("text-danger", "fs-4")}>*</span>} <br />
        <Tag
          placeholder={placeHolder}
          disabled={disabled}
          onBlur={(e) => {
            handleValidate(e);
          }}
          className={cx("my-input", { area }, { disabled })}
          onChange={(e) => handleValidate(e)}
          type={type}
          name="text"
        >{state}</Tag>
        <br />
        <span ref={setRef} className={cx("message")}></span>
        {search && (
          <div className={cx("icon")}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        )}
      </div>
    )
  }
}

export default Input;
