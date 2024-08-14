import FundCard from "./FundCard";
import {
  funds_1,
  funds_2,
  funds_3,
  funds_4,
  funds_5,
  funds_6,
  funds_7,
  funds_8,
} from "../../assets/home";

const cards = [
  {
    id: 1,
    price: "FEE",
    date: "14.05.24",
    topic: "College Name and Details",
    image: funds_1,
    // circleText: "(Percentile)",
  },
  {
    id: 2,
    price: "FEE",
    date: "14.05.24",
    topic: "College Name and Details",

    image: funds_2,
    circleText: "(Percentile)",
  },
  {
    id: 3,
    price: "FEE",
    date: "14.05.24",
    topic: "College Name and Details",

    image: funds_3,
    circleText: "(Percentile)",
  },
  {
    id: 4,
    price: "FEE",
    date: "14.05.24",
    topic: "College Name and Details",
    image: funds_4,
    circleText: "DISCOVER HOW MUCH YOU MATCH",
  },
  {
    id: 5,
    price: "FEE",
    date: "14.05.24",
    topic: "College Name and Details",
    image: funds_5,
    circleText: "85% match",
  },
  {
    id: 6,
    price: "FEE",
    date: "14.05.24",
    topic: "College Name and Details",
    image: funds_6,
    circleText: "95% match",
  },
  {
    id: 7,
    price: "FEE",
    date: "14.05.24",
    topic: "College Name and Details",

    image: funds_7,
    circleText: "91% match",
  },
  {
    id: 8,
    price: "FEE",
    date: "14.05.24",
    topic: "College Name and Details",
    image: funds_8,
    circleText: "90% match",
  },
];

export default function FundCards() {
  return (
    <article className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
      {cards.map((card) => (
        <FundCard key={card.id} card={card} />
      ))}
    </article>
  );
}
