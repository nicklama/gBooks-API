import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import BookList from "./containers/BookList/BookList";
import Form from "./containers/Form/Form";
import style from "./App.module.scss";
import Modal from "./components/Modal/Modal";

const App = () => {
    const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";
    const [search, setSearch] = useState("");
    const [bookResults, setBookResults] = useState([]);
    const [modalClick, setModalClick] = useState(false);
    const [selectedBook, setSelectedBook] = useState({});

    // retrieves a list of book objects from a search query to the Google Books API
    const getBook = async (searchQuery, searchURL) => {
        const response = await fetch(`${searchURL}${searchQuery}`);
        const data = await response.json();
        return data.items;
    };

    // checks if fetch has returned results and sets the bookResults state var
    const updateBooks = async (searchQuery, searchURL) => {
        const data = await getBook(searchQuery, searchURL);
        if (!data)
            return alert(
                "Your search has returned zero results, please try again with another search query.",
            );
        setBookResults(data);
        // console.log(data);
    };

    // calls to update the bookResults array when the search term is submitted
    useEffect(() => {
        if (search === "") return; // does not execute if search is empty
        updateBooks(search, baseURL);
    }, [search]);

    // toggles the modalClick to render/hide the modal
    const handleModalClick = () => setModalClick(!modalClick);

    return (
        <main className={style.App}>
            <Header />
            <Form setSearch={setSearch} />
            <BookList
                bookResults={bookResults}
                handleModalClick={handleModalClick}
                setSelectedBook={setSelectedBook}
            />
            {/* displays the modal if modalClick has been triggered */}
            {modalClick ? (
                <Modal selectedBook={selectedBook} handleModalClick={handleModalClick} />
            ) : (
                <></>
            )}
        </main>
    );
};

export default App;
