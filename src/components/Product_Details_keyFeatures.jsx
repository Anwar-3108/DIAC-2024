import React from "react";

const Product_Details_keyFeatures = ({ heading, list }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="product-overview text-center">
        {/* <h2 className="font-bold text-4xl mb-6">{heading}</h2> */}
        <ul className="list-none">
          {list?.map((list, index) => (
            <li key={index} className="my-2">
              <div className=" w-full">
                <div className="">
                 
                  <span className="title-font text-black font-medium text-left">
                    {list}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product_Details_keyFeatures;
