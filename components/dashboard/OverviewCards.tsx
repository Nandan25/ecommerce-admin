// components/dashboard/OverviewCards.tsx
import { Card, CardContent } from "../ui/Card";
import { DollarSign, ShoppingCart, Users, LineChart } from "lucide-react";

const data = [
  {
    title: "Total Revenue",
    value: "₹1,24,000",
    icon: DollarSign,
  },
  {
    title: "Orders",
    value: "340",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    value: "180",
    icon: Users,
  },
  {
    title: "Growth",
    value: "+12.5%",
    icon: LineChart,
  },
];

export default function OverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {data.map((item, index) => (
        <Card key={index} className="shadow-sm">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
            <item.icon className="w-6 h-6 text-gray-400" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
