"use client";

import { useState } from "react";
import { Header } from "@/components/layout";
import { Button, Input, Badge, Avatar, Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import { Plus, Search, Shield, Mail, Clock, MoreVertical } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

// Mock data
const mockAdmins = [
  {
    id: "admin_1",
    user: {
      id: "user_master",
      firstName: "Srajan",
      lastName: "Saxena",
      email: "srajan@iitbhu.ac.in",
      avatarUrl: null,
    },
    role: "MASTER_ADMIN",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
  },
  {
    id: "admin_2",
    user: {
      id: "user_2",
      firstName: "Priya",
      lastName: "Singh",
      email: "priya.singh@iitbhu.ac.in",
      avatarUrl: null,
    },
    role: "MANAGER",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15).toISOString(),
  },
  {
    id: "admin_3",
    user: {
      id: "user_4",
      firstName: "Amit",
      lastName: "Kumar",
      email: "amit.kumar@iitbhu.ac.in",
      avatarUrl: null,
    },
    role: "OPERATOR",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
  },
];

const roleDescriptions = {
  MASTER_ADMIN: "Full access to all features and settings",
  MANAGER: "Can manage users, events, and view reports",
  OPERATOR: "Can verify users and manage basic operations",
};

export default function AdminsPage() {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<"MANAGER" | "OPERATOR">("OPERATOR");

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "MASTER_ADMIN": return "purple";
      case "MANAGER": return "info";
      case "OPERATOR": return "warning";
      default: return "secondary";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "MASTER_ADMIN": return "text-accent-purple";
      case "MANAGER": return "text-accent-cyan";
      case "OPERATOR": return "text-accent-orange";
      default: return "text-gray-400";
    }
  };

  return (
    <>
      <Header title="Admins" subtitle={`${mockAdmins.length} administrators`} />

      <div className="p-6 space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex gap-3">
            <Input
              placeholder="Search admins..."
              icon={<Search size={16} />}
              className="w-64"
            />
          </div>
          <Button onClick={() => setShowInviteModal(true)}>
            <Plus size={18} />
            Invite Admin
          </Button>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(["MASTER_ADMIN", "MANAGER", "OPERATOR"] as const).map((role) => {
            const count = mockAdmins.filter((a) => a.role === role).length;
            return (
              <Card key={role} className="relative overflow-hidden">
                <div
                  className={`absolute top-0 left-0 w-1 h-full ${
                    role === "MASTER_ADMIN"
                      ? "bg-accent-purple"
                      : role === "MANAGER"
                      ? "bg-accent-cyan"
                      : "bg-accent-orange"
                  }`}
                />
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Shield className={getRoleColor(role)} size={20} />
                    <CardTitle className="text-base">{role.replace("_", " ")}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">{count}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {roleDescriptions[role]}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Admins List */}
        <div className="rounded-xl border border-dark-700 bg-dark-900 overflow-hidden">
          <div className="p-6 border-b border-dark-700">
            <h3 className="text-lg font-semibold text-white">All Administrators</h3>
          </div>
          <div className="divide-y divide-dark-700">
            {mockAdmins.map((admin) => (
              <div
                key={admin.id}
                className="p-6 flex items-center justify-between hover:bg-dark-800/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Avatar
                    src={admin.user.avatarUrl}
                    fallback={`${admin.user.firstName} ${admin.user.lastName}`}
                    size="lg"
                  />
                  <div>
                    <p className="text-base font-medium text-white">
                      {admin.user.firstName} {admin.user.lastName}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Mail size={14} className="text-gray-500" />
                      <p className="text-sm text-gray-400">{admin.user.email}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={14} className="text-gray-500" />
                      <p className="text-xs text-gray-500">
                        Added {formatDistanceToNow(new Date(admin.createdAt), { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={getRoleBadgeVariant(admin.role)}>{admin.role}</Badge>
                  <button className="p-2 rounded-lg hover:bg-dark-700 text-gray-400 hover:text-white transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invite Modal */}
        {showInviteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowInviteModal(false)}
            />
            <div className="relative bg-dark-900 border border-dark-700 rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
              <h2 className="text-xl font-semibold text-white mb-4">Invite Admin</h2>
              <p className="text-sm text-gray-400 mb-6">
                Send an admin invitation to a registered user. They must have completed their profile.
              </p>

              <div className="space-y-4">
                <Input
                  label="Email Address"
                  placeholder="user@example.com"
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Role
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(["MANAGER", "OPERATOR"] as const).map((role) => (
                      <button
                        key={role}
                        onClick={() => setInviteRole(role)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          inviteRole === role
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-dark-600 bg-dark-800 text-gray-300 hover:border-dark-500"
                        }`}
                      >
                        <p className="font-medium">{role}</p>
                        <p className="text-xs mt-1 opacity-70">
                          {role === "MANAGER" ? "Full management" : "Basic operations"}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() => setShowInviteModal(false)}
                >
                  Cancel
                </Button>
                <Button className="flex-1">Send Invitation</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
