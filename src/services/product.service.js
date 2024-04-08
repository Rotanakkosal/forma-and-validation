const url = "https://655c2c57ab37729791a9f8b0.mockapi.io/api/products";

export const getAllProduct = async () => {
  const res = await fetch(url, {
    cache: "no-store",
    next: { tags: ["product"] },
  });
  const data = res.json();
  return data;
};

export const insertProduct = async (productData) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(productData),
    headers: {
      "Content-type": "Application/json",
    },
  });
  const data = res.json();
  return data;
};
