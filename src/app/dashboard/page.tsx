import { Header } from "@/components/layout";
import { StatsCard, RecentUsersTable } from "@/components/dashboard";
import { Users, Ticket, Shield, TrendingUp } from "lucide-react";

// Mock data - will be replaced with GraphQL queries
const mockStats = {
  totalUsers: 1234,
  totalPasses: 567,
  totalAdmins: 8,
  activeEvents: 12,
};

const mockRecentUsers = [
  {
    id: "1",
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul.sharma@iitbhu.ac.in",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
    role: null,
  },
  {
    id: "2",
    firstName: "Priya",
    lastName: "Singh",
    email: "priya.singh@iitbhu.ac.in",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    role: { level: "OPERATOR" },
  },
  {
    id: "3",
    firstName: "Amit",
    lastName: "Kumar",
    email: "amit.kumar@iitbhu.ac.in",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    role: null,
  },
  {
    id: "4",
    firstName: "Sneha",
    lastName: "Gupta",
    email: "sneha.gupta@iitbhu.ac.in",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    role: { level: "MANAGER" },
  },
  {
    id: "5",
    firstName: null,
    lastName: null,
    email: "newuser@gmail.com",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    role: null,
  },
];

export default function DashboardPage() {
  return (
    <>
      <Header title="Dashboard" subtitle="Welcome back, Admin" />
      
      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total Users"
            value={mockStats.totalUsers.toLocaleString()}
            change={{ value: 12, type: "increase" }}
            icon={Users}
            iconColor="text-accent-cyan"
            iconBgColor="bg-accent-cyan/10"
          />
          <StatsCard
            title="Passes Sold"
            value={mockStats.totalPasses.toLocaleString()}
            change={{ value: 8, type: "increase" }}
            icon={Ticket}
            iconColor="text-accent-green"
            iconBgColor="bg-accent-green/10"
          />
          <StatsCard
            title="Active Admins"
            value={mockStats.totalAdmins}
            icon={Shield}
            iconColor="text-accent-purple"
            iconBgColor="bg-accent-purple/10"
          />
          <StatsCard
            title="Active Events"
            value={mockStats.activeEvents}
            change={{ value: 3, type: "decrease" }}
            icon={TrendingUp}
            iconColor="text-accent-orange"
            iconBgColor="bg-accent-orange/10"
          />
        </div>

        {/* Recent Users */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentUsersTable users={mockRecentUsers} />
          </div>
          
          {/* Quick Actions */}
          <div className="rounded-xl border border-dark-700 bg-dark-900 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 rounded-lg bg-dark-800 hover:bg-dark-700 border border-dark-600 text-left transition-colors">
                <p className="text-sm font-medium text-white">Invite Admin</p>
                <p className="text-xs text-gray-500">Add a new administrator</p>
              </button>
              <button className="w-full px-4 py-3 rounded-lg bg-dark-800 hover:bg-dark-700 border border-dark-600 text-left transition-colors">
                <p className="text-sm font-medium text-white">Create Event</p>
                <p className="text-xs text-gray-500">Schedule a new event</p>
              </button>
              <button className="w-full px-4 py-3 rounded-lg bg-dark-800 hover:bg-dark-700 border border-dark-600 text-left transition-colors">
                <p className="text-sm font-medium text-white">Send Announcement</p>
                <p className="text-xs text-gray-500">Broadcast to all users</p>
              </button>
              <button className="w-full px-4 py-3 rounded-lg bg-dark-800 hover:bg-dark-700 border border-dark-600 text-left transition-colors">
                <p className="text-sm font-medium text-white">View Reports</p>
                <p className="text-xs text-gray-500">Analytics and insights</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
