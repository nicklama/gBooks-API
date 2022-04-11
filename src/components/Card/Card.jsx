import style from "./Card.module.scss";

const Card = ({
    image = {
        // image placeholder
        thumbnail: "http://lgimages.s3.amazonaws.com/nc-sm.gif",
    },
    title,
    authors = [],
    description,
    handleModalClick,
    setSelectedBook,
    book,
}) => {
    // default values for image and authors to prevent undefined error

    return (
        <div
            className={style.Card}
            onClick={() => {
                // sets the current book as selectedBook to be displayed in the modal
                setSelectedBook(book);
                // triggers modal to be displayed
                handleModalClick();
            }}>
            <img className={style.Card__Image} src={image.thumbnail} alt="Book Cover" />
            <h3>{title}</h3>
            <p>{authors.join(", ")}</p>
            <p>{description}</p>
        </div>
    );
};

export default Card;
