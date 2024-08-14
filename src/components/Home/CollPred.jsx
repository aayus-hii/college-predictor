import { useState } from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";

const dropdownOptions = [
  {
    id: 1,
    label: "Option 1",
    options: ["Item 1A", "Item 1B", "Item 1C"],
  },
  {
    id: 2,
    label: "Option 2",
    options: ["Item 2A", "Item 2B", "Item 2C"],
  },
  {
    id: 3,
    label: "Option 3",
    options: ["Item 3A", "Item 3B", "Item 3C"],
  },
  {
    id: 4,
    label: "Option 4",
    options: ["Item 4A", "Item 4B", "Item 4C"],
  },
];

const Dropdown = ({ dropdown }) => {
  const [selected, setSelected] = useState(dropdown.options[0]);

  return (
    <div className="relative inline-block w-[200px]">
      <select
        className="w-full p-2 border border-gray-300 rounded-md"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {dropdown.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default function DropdownSection() {
  return (
    <section className="my-14">
      <Container>
        <div>
          <SectionTitle title="Select Options" />
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-8">
            {dropdownOptions.map((dropdown) => (
              <Dropdown dropdown={dropdown} key={dropdown.id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
