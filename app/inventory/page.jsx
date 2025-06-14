"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/badge";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Table } from "../../components/ui/table";
import { inventoryItems, columns } from "./inventory";

export default function InventoryPage() {
  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>Inventory</CardTitle>
      </CardHeader>
      <CardContent>
        <Table columns={[...columns]} data={inventoryItems} rowsPerPage={10} />
      </CardContent>
    </Card>
  );
}
