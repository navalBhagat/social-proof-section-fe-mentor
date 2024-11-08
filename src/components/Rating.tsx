export interface RatingProps {
  numberOfStars: number;
  category: string;
}

export const Rating = ({ numberOfStars, category }: RatingProps) => {
  return (
    <div className="rating">
      <div className="stars">
        {[...Array(numberOfStars)].map((_, index) => (
          <img src="/images/icon-star.svg" key={index} />
        ))}
      </div>
      <span className="rating-text">
        Rated {numberOfStars} Stars in {category}
      </span>
    </div>
  );
};
