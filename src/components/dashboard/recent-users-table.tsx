import { Avatar, Badge } from "@/components/ui";
import { formatDistanceToNow } from "date-fns";

interface User {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  avatarUrl: string | null;
  createdAt: string;
  role?: {
    level: string;
  } | null;
}

interface RecentUsersTableProps {
  users: User[];
}

export function RecentUsersTable({ users }: RecentUsersTableProps) {
  const getRoleBadgeVariant = (level?: string) => {
    switch (level) {
      case "MASTER_ADMIN":
        return "purple";
      case "MANAGER":
        return "info";
      case "OPERATOR":
        return "warning";
      default:
        return "secondary";
    }
  };

  return (
    <div className="rounded-xl border border-dark-700 bg-dark-900 overflow-hidden">
      <div className="p-6 border-b border-dark-700">
        <h3 className="text-lg font-semibold text-white">Recent Users</h3>
        <p className="text-sm text-gray-400">Latest registered users</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-700 bg-dark-800/50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Joined
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-700">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-dark-800/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Avatar
                      src={user.avatarUrl}
                      fallback={user.firstName || user.email}
                      size="sm"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {user.firstName && user.lastName
                          ? `${user.firstName} ${user.lastName}`
                          : user.email.split("@")[0]}
                      </p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge variant={getRoleBadgeVariant(user.role?.level)}>
                    {user.role?.level || "USER"}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  {formatDistanceToNow(new Date(user.createdAt), { addSuffix: true })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
