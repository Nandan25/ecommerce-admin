"use client";

import { useState } from "react";
import { usersData, userKeys } from "./users";
import Pagination from "../../components/ui/pagination";

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const USERS_PER_PAGE = 10;

  // Filtered users
  const filteredUsers = usersData.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Recalculate pages based on filtered users
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + USERS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // Reset page when filter/search changes
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (value: string) => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Users</h2>

      <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="px-4 py-2 border rounded-md shadow-sm w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded-md shadow-sm w-full md:w-1/4"
          value={statusFilter}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              {userKeys.map((key, index) => (
                <th key={index} className="text-left px-4 py-2 capitalize">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  {userKeys.map((key) => (
                    <td key={key} className="px-4 py-2">
                      {user[key as keyof typeof user]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={userKeys.length}
                  className="text-center px-4 py-6 text-gray-500"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
