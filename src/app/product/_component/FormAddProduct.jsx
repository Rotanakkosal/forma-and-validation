"use client";
import { productAction } from "@/app/action/productAction";
import { useEffect, useOptimistic, useRef, useState } from "react";
import TableComponent from "./TableComponent";
import ButtonAddProduct from "./ButtonAddProduct";
import { formProductSchema } from "@/libs/schema/formProductSchema";

const FormAddProduct = ({ data }) => {
  // for reset value in form
  const ref = useRef(null);
  // use optimistic
  const [optimisticProduct, addOptimisticProduct] = useOptimistic(
    data,
    (state, newProduct) => [...state, newProduct]
  );

  const [error, setError] = useState("");

  // handle add product
  async function handleAddProduct(data) {
    const newProduct = {
      productName: data.get("productName"),
      price: data.get("price"),
    };
    // calling zod schema validation
    const validation = formProductSchema.safeParse(newProduct);
    if (!validation.success) {
      setError(validation?.error?.format());
      return;
    }
    console.log("working ");
    setError(null);
    //calling product actions
    productAction(newProduct);
    //calling optimistic update
    addOptimisticProduct({ ...newProduct, id: data.length + 1 });
    ref.current.reset();
  }

  // useEffect(() => {
  //   console.log("error : ", error.productName._errors.join());
  // }, [error]);

  // Define server action inside component directly
  // async function addProductFunction (data) {
  //      'use server'
  //      const newProduct = {
  //           productName: data.get('productName'),
  //           price: data.get('price')
  //      }
  //      // calling add product service
  //      const addData = await insertProduct(newProduct);
  //      revalidateTag('product')
  // }
  return (
    <section className="flex justify-around mt-24 ">
      {/* Form Add Data */}
      <div className="w-full max-w-2xl p-10 border border-orange-500 mx-5">
        <form
          ref={ref}
          action={async (data) => handleAddProduct(data)}
          className=""
        >
          <div className="mb-5">
            <label
              htmlFor="productName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-800 focus:border-orange-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Macbook Pro 16'"
            />
            {error?.productName && (
              <p className=" mt-1 text-red-500">
                {error?.productName?._errors.join("")}
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-800 focus:border-orange-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="2200$"
            />
            {error?.price && (
              <p className=" mt-1 text-red-500">
                {error?.price?._errors.join("")}
              </p>
            )}
          </div>
          <ButtonAddProduct />
        </form>
      </div>
      {/* border */}
      <div className="border border-orange-500"></div>
      {/* table component */}
      <TableComponent optimisticValue={optimisticProduct} />
    </section>
  );
};

export default FormAddProduct;
