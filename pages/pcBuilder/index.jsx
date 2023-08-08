import RootLayout from "@/components/Layouts/RootLayout";
import BuilderItem from "@/components/UI/BuilderItem";
import Header from "@/components/UI/Header";
import { addToCart } from "@/redux/features/cart/cartSlice";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const PcBuilder = ({ categories }) => {
  const { products, total, productsTotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    toast.success("PC build done...");
  };
  return (
    <div className="container mx-auto flex justify-center">
      <div className=" md:w-[85%] mb-32 mt-20 p-8 shadow-sm ">
        <Header
          title="Build Your PC"
          subtitle="Explore our curated selection of top categories"
        />

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <h1 className="font-semibold text-xl">Selected: {productsTotal}</h1>
          <h1 className="text-xl font-semibold ">Total Price: Tk {total}</h1>
          <button
            className={`px-12 py-2 border-2 border-amber-500 rounded-bl-[15%] rounded-sm font-semibold  ${
              productsTotal < 5 && "disabled:opacity-50"
            }`}
            disabled={productsTotal < 5}
            onClick={handleClick}
          >
            Complete Build
          </button>
        </div>
        <hr />

        {categories.map((category) => (
          <BuilderItem
            key={category._id}
            category={category}
            product={products.find(
              (product) => product.category === category.title
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-craftsmen-backend.vercel.app/api/category"
  );
  const data = await res.json();

  return {
    props: {
      categories: data,
    },
    revalidate: 10,
  };
};
