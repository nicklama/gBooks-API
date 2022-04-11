import style from "./Header.module.scss";

const Header = () => {
    return (
        <header className={style.Header}>
            <h1>Google Books API</h1>
            <h4>
                This page utilises the Google Books API. Search for a book below and click for more
                information.
            </h4>
        </header>
    );
};

export default Header;
