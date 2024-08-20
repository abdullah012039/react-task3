//  ● Hide the Enroll Now button if the course is expired.
//  ● Bonus: Change the styles of a card course that is top rated, to stand out of the other courses.
import CardStyle from './Card-style.module.css';

const CourseCard = ({ name, imageSrc, description, expired, Rated}) => {
  return (
    <div className={Rated > 9 ? ` ${CardStyle.topRated}` : CardStyle.card}>
      <img src={imageSrc} alt={name} className={CardStyle.image} />
      <div className={CardStyle.body}>
        <h2 className={CardStyle.name}>{name}</h2>
        <p className={CardStyle.description}>{description}</p>
        {!expired && <button className={CardStyle.enrollButton}>Enroll Now</button>}
      </div>
    </div>
  );
}

export default CourseCard;
