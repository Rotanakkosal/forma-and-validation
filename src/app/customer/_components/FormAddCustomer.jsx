"use client";
import { customerAction } from "@/app/action/customerAction";
import { formMusicSchema } from "@/libs/schema/formMusicSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormAddCustomer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formMusicSchema),
  });

  // submit into server actions
  const handleSubmitCustomer = async (customerData) => {
    const data = await customerAction(customerData);
    if (!data) {
      throw new Error("Failed to fetch data");
    }
    reset();
  };

  return (
    <div className="w-full max-w-2xl p-10 border border-orange-500 mx-5">
      <form onSubmit={handleSubmit(handleSubmitCustomer)} className="">
        <div className="mb-5">
          <label
            htmlFor="customerName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-800 focus:border-orange-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="WHO AM I"
            {...register("customerName")}
          />
          {errors.customerName?.message && (
            <p className="text-sm text-red-400">
              {errors.customerName.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-800 focus:border-orange-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phnom Penh"
            {...register("address")}
          />
          {errors.address?.message && (
            <p className="text-sm text-red-400">{errors.address.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default FormAddCustomer;
