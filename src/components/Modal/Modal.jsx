import style from "./Modal.module.scss";

const Modal = ({ selectedBook, handleModalClick }) => {
    return (
        <div className={style.Modal}>
            <span className={style.Modal__Close} onClick={handleModalClick}>
                &times;
            </span>
            <img
                className={style.Modal__Image}
                src={
                    selectedBook.volumeInfo.imageLinks
                        ? selectedBook.volumeInfo.imageLinks.thumbnail
                        : "http://lgimages.s3.amazonaws.com/nc-sm.gif"
                }
                alt=""
            />
            <span className={style.Modal__Content}>
                <h3>{selectedBook.volumeInfo.title}</h3>
                <p>{selectedBook.volumeInfo.subtitle}</p>
                {selectedBook.volumeInfo.authors ? (
                    <p>By: {selectedBook.volumeInfo.authors.join(", ")}</p>
                ) : (
                    <></>
                )}
                <p>Released: {selectedBook.volumeInfo.publishedDate}</p>
                {selectedBook.volumeInfo.categories ? (
                    <p>Categories: {selectedBook.volumeInfo.categories.join(", ")}</p>
                ) : (
                    <></>
                )}
                <p>Language: {selectedBook.volumeInfo.language.toUpperCase()}</p>
                <p>{selectedBook.volumeInfo.description}</p>
            </span>
        </div>
    );
};

export default Modal;
