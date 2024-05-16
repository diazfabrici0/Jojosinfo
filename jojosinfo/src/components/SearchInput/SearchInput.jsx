import { ImSearch } from "react-icons/im";
import style from "./SearchInput.module.css";

export const SearchInput = ({ placeholder, onChange }) => {
  return (
    <form className={style.search_container}>
      <div className={style.search_container_input}>
        <input
          className={style.search_input}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
        />
        <ImSearch />
      </div>
    </form>
  );
};