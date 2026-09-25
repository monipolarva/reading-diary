import "./App.css";
import WeatherAdvice from "./components/WeatherAdvice";
import WorkshopCard from "./components/WorkshopCard/WorkshopCard";


function App() {
  const pageTitle = "Читательский дневник";
  const pageSubtitle =
    "Сохраняйте книги и следите за прогрессом чтения";

  const totalBooks = 3;
  const readingBooks = 1;
  const completedBooks = 1;
  const plannedBooks =
    totalBooks - readingBooks - completedBooks;

  return (
    <main className="page">
      <header className="page__header">
        <h1 className="page__title">
          {pageTitle}
        </h1>

        <p className="page__subtitle">
          {pageSubtitle}
        </p>
      </header>

      <section className="statistics">
        <h2 className="statistics__title">
          Статистика
        </h2>

        <dl className="statistics__list">
          <div className="statistics__item">
            <dt>Всего книг</dt>
            <dd>{totalBooks}</dd>
          </div>

          <div className="statistics__item">
            <dt>Читаю сейчас</dt>
            <dd>{readingBooks}</dd>
          </div>

          <div className="statistics__item">
            <dt>Прочитано</dt>
            <dd>{completedBooks}</dd>
          </div>

          <div className="statistics__item">
            <dt>Хочу прочитать</dt>
            <dd>{plannedBooks}</dd>
          </div>
        </dl>
      </section>

      <WorkshopCard />

      <section className="books">
        <h2
          className="books__title"
          id="books-title"
        >
          Мои книги
        </h2>

        <ul className="books__list">
          <li className="books__item">
            <article className="book-card">
              <h3 className="book-card__title">
                1984
              </h3>

              <p className="book-card__author">
                Джордж Оруэлл
              </p>

              <p className="book-card__status">
                Статус: прочитана
              </p>
            </article>
          </li>

          <li className="books__item">
            <article className="book-card">
              <h3 className="book-card__title">
                Мастер и Маргарита
              </h3>

              <p className="book-card__author">
                Михаил Булгаков
              </p>

              <p className="book-card__status">
                Статус: читаю сейчас
              </p>
            </article>
          </li>

          <li className="books__item">
            <article className="book-card">
              <h3 className="book-card__title">
                Гарри Поттер и философский камень
              </h3>

              <p className="book-card__author">
                Дж. К. Роулинг
              </p>

              <p className="book-card__status">
                Статус: хочу прочитать
              </p>
            </article>
          </li>
        </ul>
      </section>

      <section className="new-book">
        <h2>Добавить книгу</h2>

        <form className="book-form">
          <div className="book-form__field">
            <label htmlFor="book-title">
              Название
            </label>

            <input
              id="book-title"
              type="text"
            />
          </div>

          <div className="book-form__field">
            <label htmlFor="book-author">
              Автор
            </label>

            <input
              id="book-author"
              type="text"
            />
          </div>

          <div className="book-form__field">
            <label htmlFor="book-status">
              Статус
            </label>

            <select id="book-status">
              <option value="want">
                Хочу прочитать
              </option>

              <option value="reading">
                Читаю сейчас
              </option>

              <option value="done">
                Прочитано
              </option>
            </select>
          </div>

          <button type="submit">
            Добавить книгу
          </button>
        </form>
      </section>

      <WeatherAdvice />
    </main>
  );
}

export default App;