import { getAllCustomer } from "@/services/customer.service";
import FormAddCustomer from "./_components/FormAddCustomer";
import TableCustomer from "./_components/TableCustomer";

const CustomerPage = async () => {
     const customerData = await getAllCustomer();
  return (
    <main>
      <h1 className="text-4xl font-bold text-center mt-16">Customer Page</h1>
      <section className="flex justify-around mt-24 ">
        <FormAddCustomer />
        <div className="border border-orange-500"></div>
        <TableCustomer data={customerData} />
      </section>
    </main>
  );
};

export default CustomerPage;
