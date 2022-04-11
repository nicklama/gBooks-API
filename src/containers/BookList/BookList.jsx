import style from "./BookList.module.scss";
import Card from "../../components/Card/Card";

const BookList = ({ bookResults, handleModalClick, setSelectedBook }) => {
    return (
        <div className={style.BookList}>
            {bookResults.map((book) => (
                <Card
                    key={book.id}
                    title={book.volumeInfo.title}
                    image={book.volumeInfo.imageLinks}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    handleModalClick={handleModalClick}
                    setSelectedBook={setSelectedBook}
                    book={book}
                />
            ))}
        </div>
    );
};

export default BookList;
