import { type Book } from "../../types/book";
import BookCard from "../BookCard/BookCard";
import "./BookList.css";

interface BookListProps {
  books: Book[];
}

export default function BookList({ books }: BookListProps) {
  return (
    <section className="book-list">
      <h2 className="book-list__title">Мои книги</h2>

      {books.length === 0 ? (
        <p className="book-list__empty">Книг пока нет</p>
      ) : (
        <div className="book-list__item">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </section>
  );
}