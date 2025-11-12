import '../Card.css';

export default function BlogCard({ image, category, date, title, description, authorImage, authorName }) {
  return (
    <article className="card">
      <figure className="card__picture">
        <img src={image} alt="Blog cover" className="card__img" />
      </figure>

      <div className="card__texts">
        <h6 className="card__text">{category}</h6>
        <time className="card__date" dateTime={date}>
          Публікація {date}
        </time>
        <h3 className="card__text1-format">{title}</h3>
        <p className="card__text2">{description}</p>
        
        <div className="card__person">
          <img src={authorImage} alt={authorName} className="card__person__img" />
          <h3 className="card__person__name">{authorName}</h3>
        </div>
      </div>
    </article>
  );
}