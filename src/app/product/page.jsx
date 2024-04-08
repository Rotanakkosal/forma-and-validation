import { getAllProduct } from "@/services/product.service";
import FormAddProduct from "./_component/FormAddProduct";

const ProductPage = async () => {
  const productData = await getAllProduct();
  return (
    <main className="w-full mx-auto">
      <h1 className="text-4xl font-bold text-center mt-16">HRD Warehouse</h1>
      <section className="">
        {/* Form Data */}
        <FormAddProduct data={productData} />
        {/* Table Data */}
        {/* <TableComponent data={productData} optimisticValue={result} /> */}
      </section>
    </main>
  );
};

export default ProductPage;
