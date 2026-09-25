function WorkshopCard() {
  const workshopTitle = "Основы фотографии";
  const workshopDate = "12 октября";
  const availablePlaces = 4;

  return (
    <section className="workshop-card">
      <h2>{workshopTitle}</h2>

      <p>Дата: {workshopDate}</p>

      <p>
        Свободных мест: {availablePlaces}
      </p>

      <p>
        {availablePlaces > 0
          ? "Запись открыта"
          : "Свободных мест нет"}
      </p>
    </section>
  );
}

export default WorkshopCard;