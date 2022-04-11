import style from "./Form.module.scss";
import { useState } from "react";

const Form = ({ setSearch }) => {
    const [inputVal, setInputVal] = useState("");

    // sets input value as user types into the input box
    const handleInput = (e) => {
        setInputVal(e.target.value);
    };

    return (
        <form className={style.Form} onSubmit={(e) => e.preventDefault()}>
            <input
                className={style.Form__Input}
                type="text"
                placeholder="Search for a book"
                onChange={handleInput}
            />
            <button className={style.Form__SearchBtn} onClick={() => setSearch(inputVal)}>
                Search
            </button>
        </form>
    );
};

export default Form;
