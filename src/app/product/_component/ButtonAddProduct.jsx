"use client";
import { useFormStatus } from "react-dom";

const ButtonAddProduct = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {pending ? "Adding Product ..." : "Add Product"}
    </button>
  );
};

export default ButtonAddProduct;
