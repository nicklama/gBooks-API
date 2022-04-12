import style from "./Modal.module.scss";

const Modal = ({ selectedBook, handleModalClick }) => {
    // toggles the modal when a click occurs outside the modal
    const handleBackgroundClick = (e) => {
        if (e.target.className === style.Background) handleModalClick();
    };

    return (
        <div className={style.Background} onClick={handleBackgroundClick}>
            <div className={style.Modal}>
                <span className={style.Modal__Close} onClick={handleModalClick}>
                    &times;
                </span>
                <img
                    className={style.Modal__Image}
                    src={
                        selectedBook.volumeInfo.imageLinks?.thumbnail ??
                        "http://lgimages.s3.amazonaws.com/nc-sm.gif"
                    } // placeholder image if the thumbnail is undefined
                    alt="Book Cover"
                />
                <span className={style.Modal__Content}>
                    <h3>{selectedBook.volumeInfo.title}</h3>
                    <p>{selectedBook.volumeInfo.subtitle}</p>
                    {/* Checks if the authors array exists before and does not render if undefined */}
                    <p>By: {selectedBook.volumeInfo.authors?.join(", ")}</p>
                    <p>Released: {selectedBook.volumeInfo.publishedDate}</p>
                    {/* Also checks categories exists to prevent an undefined error when calling .join() */}
                    <p>Categories: {selectedBook.volumeInfo.categories?.join(", ")}</p>
                    <p>Language: {selectedBook.volumeInfo.language.toUpperCase()}</p>
                    <p>{selectedBook.volumeInfo.description}</p>
                </span>
            </div>
        </div>
    );
};

export default Modal;
