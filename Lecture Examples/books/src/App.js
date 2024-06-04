import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList.";
import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);
  // Second argument: [] = only first render, No argument = after every 1st/rerender, ['variables'] = after every 1st/rerender if one of the 'variables' changed
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
