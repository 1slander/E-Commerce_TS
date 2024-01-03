import { useState } from "react";
import Button from "./Button";

type DropdownMenuProps = {
  filterByPriceLow: () => void;
  filterByPriceHigh: () => void;
  resetFilter: () => void;
};

export default function DropdownMenu({
  filterByPriceLow,
  filterByPriceHigh,
  resetFilter,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {!isOpen && (
        <Button classCss="sortBtn" onClick={toggleDropdown}>
          Sort by:
        </Button>
      )}

      {isOpen && (
        <ul className="sort_menu">
          <li>
            <Button
              classCss="sortBtn"
              onClick={() => {
                resetFilter();
                setIsOpen(!isOpen);
              }}
            >
              Featured
            </Button>
          </li>
          <li>
            <Button
              classCss="sortBtn"
              onClick={() => {
                filterByPriceLow();
                setIsOpen(!isOpen);
              }}
            >
              By Low-High Price
            </Button>
          </li>
          <li>
            <Button
              classCss="sortBtn"
              onClick={() => {
                filterByPriceHigh();
                setIsOpen(!isOpen);
              }}
            >
              By High-Low Price
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
}
