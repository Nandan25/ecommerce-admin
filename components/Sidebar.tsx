"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

import {
  LayoutDashboard,
  BarChart,
  Users2,
  Package,
  Boxes,
  Tag,
  Warehouse,
  MessageSquare,
  FileBarChart,
  Headset,
  LucideIcon,
} from "lucide-react";

type NavLink = {
  label: string;
  icon: LucideIcon;
  path: string;
};

const links: NavLink[] = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Analytics", icon: BarChart, path: "/analytics" },
  { label: "Users", icon: Users2, path: "/users" },
  { label: "Orders", icon: Package, path: "/orders" },
  { label: "Products", icon: Boxes, path: "/products" },
  { label: "Categories", icon: Tag, path: "/categories" },
  { label: "Inventory", icon: Warehouse, path: "/inventory" },
  { label: "Reviews", icon: MessageSquare, path: "/reviews" },
  { label: "Reports", icon: FileBarChart, path: "/reports" },
  { label: "Support", icon: Headset, path: "/support" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r p-4 shadow-sm">
      <div className="text-2xl font-bold text-gray-900 mb-6">Admin Panel</div>
      <nav className="space-y-2">
        {links.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            href={path}
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition",
              pathname === path && "bg-gray-100 font-medium"
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
