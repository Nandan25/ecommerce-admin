"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ScrollArea } from "../../components/ui/scroll-area";
import { analyticsData, columnLabels, columnKeys } from "./revenue";

export default function AnalyticsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const totalPages = Math.ceil(analyticsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = analyticsData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
      <Tabs defaultValue="revenue" className="w-full">
        <TabsList>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={analyticsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4f46e5"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    stroke="#16a34a"
                    strokeDasharray="5 5"
                  />
                  <Line
                    type="monotone"
                    dataKey="customers"
                    stroke="#f59e0b"
                    strokeDasharray="3 4 5 2"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-72 w-full overflow-auto">
                <ul className="space-y-2 min-w-[1000px]">
                  {/* Table Header */}
                  <li className="flex justify-between border-b pb-2 font-semibold text-sm text-gray-600">
                    {columnLabels.map((field, index) => (
                      <span key={index} className="w-1/9">
                        {field}
                      </span>
                    ))}
                  </li>

                  {/* Paginated Data */}
                  {currentData.map((entry, index) => (
                    <li
                      key={index}
                      className="flex justify-between border-b pb-2 text-sm"
                    >
                      {columnKeys.map((key, idx) => (
                        <span key={idx} className="w-1/8">
                          {key === "revenue" || key === "avgOrderValue"
                            ? `₹${entry[key]}`
                            : key === "returnRate" || key === "conversionRate"
                            ? `${entry[key]}%`
                            : `${entry[key as keyof typeof entry]}`}
                        </span>
                      ))}
                    </li>
                  ))}
                </ul>
              </ScrollArea>

              {/* Pagination */}
              <div className="flex justify-center mt-4 gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-gray-200 text-sm rounded disabled:opacity-50"
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-3 py-1 text-sm rounded ${
                      currentPage === i + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-gray-200 text-sm rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
