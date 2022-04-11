import style from "./Card.module.scss";

const Card = ({
    image = {
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
                setSelectedBook(book);
                handleModalClick();
            }}>
            <img className={style.Card__Image} src={image.thumbnail} alt="" />
            <h3>{title}</h3>
            <p>{authors.join(", ")}</p>
            <p>{description}</p>
        </div>
    );
};

export default Card;
