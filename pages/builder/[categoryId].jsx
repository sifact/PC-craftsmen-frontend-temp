import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

import Header from "@/components/UI/Header";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const CategoryProducts = ({ products, category }) => {
  return (
    <div className="my-20">
      <Header
        title={`${category}'s`}
        subtitle="Discover our top-rated products crafted with care"
      />
      <div className="mb-32 grid lg:grid-cols-3 md:grid-cols-2 gap-12 container mx-auto">
        {products ? (
          products.map((product, idx) => (
            <CategoryProduct key={product._id} product={product} />
          ))
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;

CategoryProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const CategoryProduct = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddProduct = (product) => {
    dispatch(addToCart(product));
    toast.success("Item Added");
    router.push("/pcBuilder");
  };
  const { _id, title, img, category, price, status } = product;
  return (
    <div className="shadow-md bg-gray-100 h-auto rounded-md p-4">
      <Link href={`/product/${product?._id}`}>
        <div className="h-[300px]">
          <img
            className="rounded-lg object-cover w-full h-full"
            src={img ? img : peperoni}
            alt="pizza"
          />
        </div>
      </Link>
      <Link href={`/product/${product?._id}`}>
        <div>
          <div className="text-center">
            <h2 className="text-lg font-bold py-2 ">{title}</h2>
            <span className="bg-gray-200 rounded-full text-sm px-4">
              {category}
            </span>
          </div>

          <div className="flex justify-between items-center mt-4 mb-4">
            <span className="font-semibold">Tk {price}</span>
            <div className="flex gap-1 text-amber-500 text-sm">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <button
              className={`border-2 ${
                status ? "border-amber-500" : "border-red-500"
              }  py-2 px-3 rounded-full`}
            >
              {status ? (
                <span className="">In stock</span>
              ) : (
                <span>Out of stock</span>
              )}
            </button>
          </div>
        </div>
      </Link>
      <button
        className="bg-amber-500 text-white py-2 px-5 rounded-sm rounded-bl-[15%] font-semibold"
        onClick={() => handleAddProduct(product)}
      >
        Add to builder
      </button>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-craftsmen-backend.vercel.app/api/product"
  );
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { categoryId: product.category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { categoryId } = params;
  console.log(categoryId);
  const res = await fetch(
    `https://pc-craftsmen-backend.vercel.app/api/product/cat/${params.categoryId}`
  );

  const data = await res.json();

  return {
    props: {
      products: data,
      category: categoryId,
    },
  };
};
