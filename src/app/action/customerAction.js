"use server";

import { insertCustomer } from "@/services/customer.service";
import { revalidateTag } from "next/cache";

export const customerAction = async (customerData) => {
  const data = await insertCustomer(customerData);
  if (data) {
    revalidateTag("customer");
    return data;
  }
};
