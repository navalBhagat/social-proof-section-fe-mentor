export interface ReviewProps {
  image: string;
  name: string;
  type: string;
  review: string;
}
export const Review = ({ image, name, type, review }: ReviewProps) => {
  return (
    <div className="review">
      <div className="profile-name-type">
        <img src={image} />
        <div className="name-type">
          <span className="name">{name}</span>
          <span className="type">{type}</span>
        </div>
      </div>
      <p className="review-text">{review}</p>
    </div>
  );
};
