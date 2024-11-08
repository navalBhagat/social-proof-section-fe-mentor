export interface TitleAndDescriptionProps {
  title: string;
  description: string;
}

export const TitleAndDescription = ({
  title,
  description,
}: TitleAndDescriptionProps) => {
  return (
    <div className="title-description">
      <span className="title">{title}</span>
      <span className="description">{description}</span>
    </div>
  );
};
