"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Table } from "../ui/table";

const orders = [
  {
    orderId: "ORD123456",
    customerName: "Alice Smith",
    amount: "₹2,499",
    status: "Pending",
    date: "2025-06-10",
    paymentMethod: "Credit Card",
    deliveryMethod: "Courier",
  },
  {
    orderId: "ORD123457",
    customerName: "Bob Johnson",
    amount: "₹3,199",
    status: "Delivered",
    date: "2025-06-11",
    paymentMethod: "UPI",
    deliveryMethod: "Express",
  },
  {
    orderId: "ORD123458",
    customerName: "Charlie Brown",
    amount: "₹999",
    status: "Cancelled",
    date: "2025-06-12",
    paymentMethod: "Cash on Delivery",
    deliveryMethod: "Courier",
  },
  {
    orderId: "ORD123459",
    customerName: "Daisy Lee",
    amount: "₹1,799",
    status: "Delivered",
    date: "2025-06-13",
    paymentMethod: "Net Banking",
    deliveryMethod: "Express",
  },
  {
    orderId: "ORD123460",
    customerName: "Ethan Black",
    amount: "₹4,250",
    status: "Pending",
    date: "2025-06-14",
    paymentMethod: "Credit Card",
    deliveryMethod: "Courier",
  },
  {
    orderId: "ORD123461",
    customerName: "Fiona White",
    amount: "₹2,150",
    status: "Delivered",
    date: "2025-06-14",
    paymentMethod: "Debit Card",
    deliveryMethod: "Express",
  },
  {
    orderId: "ORD123462",
    customerName: "George Hall",
    amount: "₹1,499",
    status: "Pending",
    date: "2025-06-14",
    paymentMethod: "UPI",
    deliveryMethod: "Courier",
  },
  {
    orderId: "ORD123463",
    customerName: "Hannah Kim",
    amount: "₹3,789",
    status: "Cancelled",
    date: "2025-06-15",
    paymentMethod: "Cash on Delivery",
    deliveryMethod: "Express",
  },
  {
    orderId: "ORD123464",
    customerName: "Ian Gray",
    amount: "₹850",
    status: "Pending",
    date: "2025-06-15",
    paymentMethod: "Net Banking",
    deliveryMethod: "Courier",
  },
  {
    orderId: "ORD123465",
    customerName: "Jane Park",
    amount: "₹1,999",
    status: "Delivered",
    date: "2025-06-15",
    paymentMethod: "UPI",
    deliveryMethod: "Express",
  },
  {
    orderId: "ORD123466",
    customerName: "Kevin Lin",
    amount: "₹3,850",
    status: "Delivered",
    date: "2025-06-16",
    paymentMethod: "Credit Card",
    deliveryMethod: "Courier",
  },
  {
    orderId: "ORD123467",
    customerName: "Laura King",
    amount: "₹2,349",
    status: "Cancelled",
    date: "2025-06-16",
    paymentMethod: "Cash on Delivery",
    deliveryMethod: "Courier",
  },
  {
    orderId: "ORD123468",
    customerName: "Mason Reed",
    amount: "₹5,120",
    status: "Pending",
    date: "2025-06-17",
    paymentMethod: "Debit Card",
    deliveryMethod: "Express",
  },
];

const columns = [
  { header: "Order ID", accessor: "orderId" },
  { header: "Customer Name", accessor: "customerName" },
  { header: "Amount", accessor: "amount" },
  { header: "Status", accessor: "status" },
  { header: "Date", accessor: "date" },
  { header: "Payment", accessor: "paymentMethod" },
  { header: "Delivery", accessor: "deliveryMethod" },
] as const;

export default function RecentOrders() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table columns={[...columns]} data={orders} rowsPerPage={5} />
        </CardContent>
      </Card>
    </div>
  );
}
