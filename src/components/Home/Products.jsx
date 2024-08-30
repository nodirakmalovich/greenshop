"use client";
import { ProductsData } from "@/data/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MainCard from "../Cards/MainCard";
import Categories from "../Categories/Categories";
import MenuList from "../MenuList/MenuList";
import PaginationRounded from "../Pagination/Pagination";

export default function HomeProducts() {
  const router = useRouter();

  const [optionsData, setOptionsData] = useState([
    { name: "All Plants", selected: true },
    { name: "New Arrivals", selected: false },
    { name: "Sale", selected: false },
  ]);

  const handleCategoriesSelect = (index) => {
    const updatedCategories = optionsData.map((category, i) => ({
      ...category,
      selected: i === index,
    }));
    setOptionsData(updatedCategories);
  };

  const [sortValue, setSortValue] = useState("Default sorting");

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  function handleCardClick(product) {
    const [singleProduct, setSingleProduct] = useState();
    setSingleProduct(product);
  }

  const handleClick = (plantId) => {
    // router.push(`/Shop:${plantId}`)
    router.push(`/products/${plantId}`);
  };

  return (
    <div>
      <div className="flex justify-between mt-[26px]">
        <div>
          <Categories />
        </div>
        <div>
          <div className="mb-5 flex justify-between items-start border-b-[0.3px] border-[#46A35880]">
            <ul className="flex gap-[50px] text-[15px] font-[400px] text-[#3D3D3D] ">
              {optionsData.map((page, index) => (
                <MenuList
                  key={index}
                  page={page}
                  name={page.name}
                  index={index}
                  onClick={() => {
                    handleCategoriesSelect(index);
                  }}
                />
              ))}
            </ul>
            <div className="flex gap-2 text-[15px] font-[400px] text-[#3D3D3D]">
              <p>Sort by:</p>
              <select
                value={sortValue}
                onChange={handleSortChange}
                className="outline-none"
              >
                <option value="Default sorting">Default sorting</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Newest Arrivals">Newest Arrivals</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {ProductsData.map((plant, index) => (
              <div
                onClick={() => {
                  handleClick(plant.id);
                }}
                key={index}
              >
                <MainCard
                  image={plant.image.props.src}
                  name={plant.name}
                  price={plant.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <PaginationRounded />
      </div>
    </div>
  );
}
