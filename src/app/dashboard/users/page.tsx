"use client";

import { useState } from "react";
import { Header } from "@/components/layout";
import { Button, Input, Badge, Avatar } from "@/components/ui";
import { Search, Filter, MoreVertical, Eye, UserX, Shield } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

// Mock data
const mockUsers = [
  {
    id: "user_1",
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul.sharma@iitbhu.ac.in",
    avatarUrl: null,
    phone: "+91 9876543210",
    college: "IIT BHU",
    gender: "MALE",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    role: null,
    profileCompleted: true,
  },
  {
    id: "user_2",
    firstName: "Priya",
    lastName: "Singh",
    email: "priya.singh@iitbhu.ac.in",
    avatarUrl: null,
    phone: "+91 9876543211",
    college: "IIT BHU",
    gender: "FEMALE",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    role: { level: "OPERATOR" },
    profileCompleted: true,
  },
  {
    id: "user_3",
    firstName: "Amit",
    lastName: "Kumar",
    email: "amit.kumar@gmail.com",
    avatarUrl: null,
    phone: null,
    college: "Delhi University",
    gender: "MALE",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    role: null,
    profileCompleted: false,
  },
  {
    id: "user_4",
    firstName: "Sneha",
    lastName: "Gupta",
    email: "sneha.gupta@iitbhu.ac.in",
    avatarUrl: null,
    phone: "+91 9876543213",
    college: "IIT BHU",
    gender: "FEMALE",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(),
    role: { level: "MANAGER" },
    profileCompleted: true,
  },
  {
    id: "user_5",
    firstName: null,
    lastName: null,
    email: "newuser@gmail.com",
    avatarUrl: null,
    phone: null,
    college: null,
    gender: null,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    role: null,
    profileCompleted: false,
  },
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (user.firstName?.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.lastName?.toLowerCase().includes(searchQuery.toLowerCase()));

    if (selectedFilter === "all") return matchesSearch;
    if (selectedFilter === "admins") return matchesSearch && user.role !== null;
    if (selectedFilter === "incomplete") return matchesSearch && !user.profileCompleted;
    return matchesSearch;
  });

  const getRoleBadgeVariant = (level?: string) => {
    switch (level) {
      case "MASTER_ADMIN": return "purple";
      case "MANAGER": return "info";
      case "OPERATOR": return "warning";
      default: return "secondary";
    }
  };

  return (
    <>
      <Header title="Users" subtitle={`${mockUsers.length} total users`} />

      <div className="p-6 space-y-6">
        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex gap-2">
            {["all", "admins", "incomplete"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === filter
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-gray-400 hover:text-white hover:bg-dark-800 border border-dark-700"
                }`}
              >
                {filter === "all" ? "All Users" : filter === "admins" ? "Admins Only" : "Incomplete Profile"}
              </button>
            ))}
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<Search size={16} />}
              className="w-full sm:w-64"
            />
            <Button variant="secondary" size="icon">
              <Filter size={18} />
            </Button>
          </div>
        </div>

        {/* Users Table */}
        <div className="rounded-xl border border-dark-700 bg-dark-900 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-700 bg-dark-800/50">
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    College
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Joined
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-700">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-dark-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={user.avatarUrl}
                          fallback={user.firstName || user.email}
                          size="md"
                        />
                        <div>
                          <p className="text-sm font-medium text-white">
                            {user.firstName && user.lastName
                              ? `${user.firstName} ${user.lastName}`
                              : "—"}
                          </p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm text-gray-300">{user.college || "—"}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={user.profileCompleted ? "success" : "warning"}>
                        {user.profileCompleted ? "Complete" : "Incomplete"}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={getRoleBadgeVariant(user.role?.level)}>
                        {user.role?.level || "USER"}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      {formatDistanceToNow(new Date(user.createdAt), { addSuffix: true })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 rounded-lg hover:bg-dark-700 text-gray-400 hover:text-white transition-colors">
                          <Eye size={16} />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-dark-700 text-gray-400 hover:text-accent-purple transition-colors">
                          <Shield size={16} />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-dark-700 text-gray-400 hover:text-accent-red transition-colors">
                          <UserX size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-dark-700 flex items-center justify-between">
            <p className="text-sm text-gray-400">
              Showing <span className="text-white">{filteredUsers.length}</span> of{" "}
              <span className="text-white">{mockUsers.length}</span> users
            </p>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" disabled>
                Previous
              </Button>
              <Button variant="secondary" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
