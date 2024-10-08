import Data from "@/data/data";
import { useState } from "react";
import MenuList from "../MenuList/MenuList";

export default function ShopDescription() {


  const [pages, setPages] = useState([
    {
      name: "Product Description",
      selected: true,
    },
    {
      name: "Reviews (19)",
      selected: false,
    },
  ]);

  const handlePageSelect = (index) => {
    const updatedPages = pages.map((page, i) => ({
      ...page,
      selected: i === index,
    }));
    setPages(updatedPages);
  };

  return (
    <div>
      <ul className="mb-10 flex gap-[50px] mt-[92px] border-b-[0.3px] border-[#46A35880]">
        {pages.map((page, index) => (
          <MenuList
            key={index}
            name={page.name}
            index={index}
            page={page}
            onClick={() => {
              handlePageSelect(index);
            }}
          />
        ))}
      </ul>

      <p className="text-[14px] font-[400] leading-[24px] text-[#727272]">
        {selectedItem && selectedItem.description && selectedItem.description[0]
          ? selectedItem.description[0].main
          : "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. "}
      </p>

      <p className="text-[14px] font-[700] leading-[24px] text-[#3D3D3D] mt-[18px]">
        Living Room:
      </p>
      <p className="text-[14px] font-[400] leading-[24px] text-[#727272]">
        {selectedItem && selectedItem.description && selectedItem.description[0]
          ? selectedItem.description[1].living
          : "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      </p>

      <p className="text-[14px] font-[700] leading-[24px] text-[#3D3D3D] mt-[18px]">
        Dining Room:
      </p>
      <p className="text-[14px] font-[400] leading-[24px] text-[#727272]">
        {selectedItem && selectedItem.description && selectedItem.description[2]
          ? selectedItem.description[2].dining
          : "The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life."}
      </p>

      <p className="text-[14px] font-[700] leading-[24px] text-[#3D3D3D] mt-[18px]">
        Office:
      </p>
      <p className="text-[14px] font-[400] leading-[24px] text-[#727272]">
        {selectedItem && selectedItem.description && selectedItem.description[3]
          ? selectedItem.description[3].office
          : "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      </p>
    </div>
  );
}
