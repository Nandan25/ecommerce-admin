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

const revenueData = [
  { date: "Jun 01", revenue: 2400 },
  { date: "Jun 02", revenue: 3200 },
  { date: "Jun 03", revenue: 2100 },
  { date: "Jun 04", revenue: 4100 },
  { date: "Jun 05", revenue: 1800 },
  { date: "Jun 06", revenue: 3000 },
  { date: "Jun 07", revenue: 3500 },
  { date: "Jun 08", revenue: 2500 },
];

export const AnalyticsPage = () => {
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
                <LineChart data={revenueData}>
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
              <ScrollArea className="h-72">
                <ul className="space-y-2">
                  {revenueData.map((entry, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between border-b pb-2"
                    >
                      <span>{entry.date}</span>
                      <span className="font-semibold">₹{entry.revenue}</span>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
