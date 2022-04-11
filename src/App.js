import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import BookList from "./containers/BookList/BookList";
import Form from "./containers/Form/Form";
import style from "./App.module.scss";
import Modal from "./components/Modal/Modal";

const App = () => {
    // const render = async (searchQuery) => {
    //     const data = await getBook(searchQuery);
    //     console.log(data.items);
    //     data.items.forEach((book) => {
    //         console.log(book.volumeInfo.title);
    //     });
    // };

    const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";
    const [search, setSearch] = useState("");
    const [bookResults, setBookResults] = useState([]);
    const [modalClick, setModalClick] = useState(false);
    const [selectedBook, setSelectedBook] = useState({});

    const getBook = async (searchQuery) => {
        const response = await fetch(`${baseURL}${searchQuery}`);
        const data = await response.json();
        return data.items;
    };

    const updateBooks = async () => {
        const data = await getBook(search);
        if (!data)
            return alert(
                "Your search has returned zero results, please try again with another search query.",
            );
        setBookResults(data);
        console.log(data);
    };

    useEffect(() => {
        if (search === "") return;
        updateBooks();
        console.log(search);
    }, [search]);

    const handleModalClick = () => setModalClick(!modalClick);
    // const [modal, setModal] = useState("");
    // let modal = "";

    // useEffect(() => {
    //     if (modalClick) {
    //         // setModal(<Modal />);
    //         console.log("modal has been clicked");
    //         // alert("success");
    //     }
    // }, [modalClick]);

    return (
        <main className={style.App}>
            <Header />
            <Form setSearch={setSearch} />
            <BookList
                bookResults={bookResults}
                handleModalClick={handleModalClick}
                setSelectedBook={setSelectedBook}
            />
            {modalClick ? (
                <Modal selectedBook={selectedBook} handleModalClick={handleModalClick} />
            ) : (
                ""
            )}
        </main>
    );
};

export default App;
