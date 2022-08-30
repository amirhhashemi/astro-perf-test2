import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function () {
  return (
    <Carousel>
      <div>
        <img
          src="/alex-gruber-PyoVjVgOfHg-unsplash.jpg"
          width={640}
          height={426}
          loading="lazy"
        />
        <p>Legend 1</p>
      </div>
      <div>
        <img
          src="/andrei-ionov-O0eomEdcums-unsplash.jpg"
          width={640}
          height={426}
          loading="lazy"
        />
        <p>Legend 2</p>
      </div>
      <div>
        <img
          src="/daniel-lezuch-iRjx7w3O8v0-unsplash.jpg"
          width={640}
          height={426}
          loading="lazy"
        />
        <p>Legend 3</p>
      </div>
    </Carousel>
  );
}
