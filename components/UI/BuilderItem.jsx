import { removeOne } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const BuilderItem = ({ category, product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex xsm:flex-col sm:flex-row xsm:gap-6 justify-between w-full items-center my-8">
        <div className="flex xsm:flex-col sm:flex-row gap-4 items-center">
          <div className="w-[100px] h-[100px]  ">
            <img
              className="object-cover w-full h-full rounded-md"
              src={product ? product?.img : category?.img}
              alt=""
            />
          </div>
          <span className="text-xl font-semibold">
            {product ? product?.title : category?.title}
          </span>
        </div>

        <div>
          {product && (
            <span className="font-bold text-xl mr-8">Tk {product?.price}</span>
          )}
          {product && (
            <button
              className="px-6 py-2  border-2 border-red-500 rounded-bl-[15%] text-black text-xl rounded-sm "
              onClick={() => dispatch(removeOne(product))}
            >
              Remove
            </button>
          )}
          <Link href={`/builder/${category?.title}`}>
            {!product && (
              <button className="px-6 py-2  border-2 border-amber-500 rounded-bl-[15%]  text-xl rounded-sm ">
                Choose
              </button>
            )}
          </Link>
        </div>
      </div>

      <hr />
    </>
  );
};

export default BuilderItem;
