// app/products/page.tsx

"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/badge";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Button } from "../../components/ui/Button";
import { Eye, Pencil, Trash } from "lucide-react";
import { products, columnLabels } from "./products";
import { Pagination } from "../../components/ui/pagination";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Products</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px]">
          <div className="grid grid-cols-6 gap-4 text-sm font-semibold border-b pb-2">
            {columnLabels.map((key, index) => (
              <div key={index}>{key}</div>
            ))}
          </div>
          <div className="space-y-4 mt-4">
            {currentData.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-6 gap-4 items-center text-sm border-b py-2"
              >
                <div>{product.name}</div>
                <div>{product.category}</div>
                <div>{product.price}</div>
                <div>{product.stock}</div>
                <div>
                  <Badge
                    variant={
                      product.status === "In Stock" ? "success" : "destructive"
                    }
                  >
                    {product.status}
                  </Badge>
                </div>
                {/* <div className="flex justify-end gap-2">
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash className="h-4 w-4 text-red-500" />
                  </Button>
                </div> */}
              </div>
            ))}
          </div>
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
