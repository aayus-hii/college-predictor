import { discover_1, discover_2, discover_3 } from "../../assets/home";
import Container from "../Container";
import SectionTitle from "./SectionTitle";

const cards = [
  {
    id: 1,
    image: discover_1,
    title: "Epaper",
  },
  {
    id: 2,
    image: discover_2,
    title: "CutOffs",
  },
  {
    id: 3,
    image: discover_3,
    title: "College Predictor",
  },
];



const DiscoverCard = ({ card }) => {
  return (
    <div className="relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
      <img src={card.image} alt="discover_image" />
      <div className="absolute bottom-10 left-10">
        <div className="flex items-center justify-center w-[110px] h-[80px] bg-black rounded-lg">
          <span className="capitalize text-white font-bold md:text-[20px] text-[16px]">
            {card.title}
          </span>
        </div>
      </div>
    </div>
  );
};




export default function Discover() {
  return (
    <section className="my-14">
      <Container>
        <div>
          <SectionTitle title="Our Products" />
          <div className="grid lg:grid-cols-3 mt-8 sm:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
            {cards.map((card) => (
              <DiscoverCard card={card} key={card.id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
