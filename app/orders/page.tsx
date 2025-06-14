"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { useState } from "react";
import { ScrollArea } from "../../components/ui/scroll-area";
import { orders } from "./orders";
import { Pagination } from "../../components/ui/pagination";

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "Cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function OrdersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = orders.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-xl">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent className="overflow-auto">
        <ScrollArea className="w-full">
          <table className="w-full text-sm text-left border-separate border-spacing-y-2">
            <thead className="text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Payment</th>
                <th className="px-4 py-2">Delivery</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((order) => (
                <tr
                  key={order.orderId}
                  className="bg-muted hover:bg-muted/70 rounded-md"
                >
                  <td className="px-4 py-2">{order.orderId}</td>
                  <td className="px-4 py-2">{order.customerName}</td>
                  <td className="px-4 py-2">{order.amount}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{order.date}</td>
                  <td className="px-4 py-2">{order.paymentMethod}</td>
                  <td className="px-4 py-2">{order.deliveryMethod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>

        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </CardContent>
    </Card>
  );
}
