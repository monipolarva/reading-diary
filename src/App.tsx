import { initialBooks } from "./data/books";
import BookList from "./components/BookList/BookList";
import "./App.css";

function App() {
  return (
    <main>
      <BookList books={initialBooks} />
    </main>
  );
}

export default App;