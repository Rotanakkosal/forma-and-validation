import { headers } from "next/headers";

const url = "https://655c2c57ab37729791a9f8b0.mockapi.io/api/customer";

export const getAllCustomer = async () => {
  const res = await fetch(url,{next: {tags:['customer']}});
  const data = await res.json();
  return data;
};

export const insertCustomer = async (customerData) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(customerData),
    headers: {
      "Content-Type": "Application/json",
    },
  });
  const data = res.json();
  return data;
};
