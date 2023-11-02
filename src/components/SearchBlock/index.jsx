import React, { useCallback, useRef, useState } from "react";
import search from "../../assets/img/search.svg";
import close from "../../assets/img/close.svg";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/filteredSlice";
import debounce from "lodash.debounce";

const SearchBlock = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filtered.searchValue);
  const inputRef = useRef();
  const [value, setValue] = useState("");

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );
  const clearInput = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };
  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };
  return (
    <div className={styles.root}>
      <img className={styles.search} src={search} alt="" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="введите название пиццы"
      />
      {value && (
        <img className={styles.clear} src={close} alt="" onClick={clearInput} />
      )}
    </div>
  );
};

export default SearchBlock;
