import "./App.css";
import { Rating, Review, TitleAndDescription } from "./components";

function App() {
  return (
    <main className="content">
      <div className="part-1">
        <TitleAndDescription
          title="10,000+ of our users love our products."
          description="We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services."
        />
        <div className="ratings">
          <Rating numberOfStars={5} category="Reviews" />
          <Rating numberOfStars={5} category="Report Guru" />
          <Rating numberOfStars={5} category="BestTech" />
        </div>
      </div>
      <div className="part-2">
        <Review
          image="/images/image-colton.jpg"
          name="Colton Smith"
          type="Verified Buyer"
          review='"We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"'
        />
        <Review
          image="/images/image-irene.jpg"
          name="Irene Roberts"
          type="Verified Buyer"
          review='"Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."'
        />
        <Review
          image="/images/image-anne.jpg"
          name="Anne Wallace"
          type="Verified Buyer"
          review='"Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone!"'
        />
      </div>
    </main>
  );
}

export default App;
