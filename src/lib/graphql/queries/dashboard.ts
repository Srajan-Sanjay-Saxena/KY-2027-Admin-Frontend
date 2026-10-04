// Dashboard Stats GraphQL Queries
// These queries will be used to fetch dashboard statistics

export const GET_DASHBOARD_STATS = `
  query GetDashboardStats {
    dashboardStats {
      totalUsers
      totalAdmins
      totalPasses
      activeEvents
      recentSignups
      passesThisWeek
      userGrowth {
        percentage
        type
      }
      passGrowth {
        percentage
        type
      }
    }
  }
`;

export const GET_RECENT_USERS = `
  query GetRecentUsers($limit: Int!) {
    recentUsers(limit: $limit) {
      id
      email
      firstName
      lastName
      avatarUrl
      createdAt
      role {
        level
      }
    }
  }
`;

export const GET_USER_REGISTRATION_TRENDS = `
  query GetUserRegistrationTrends($days: Int!) {
    userRegistrationTrends(days: $days) {
      date
      count
    }
  }
`;

export const GET_PASS_SALES_TRENDS = `
  query GetPassSalesTrends($days: Int!) {
    passSalesTrends(days: $days) {
      date
      count
      revenue
    }
  }
`;

export const GET_COLLEGE_DISTRIBUTION = `
  query GetCollegeDistribution($limit: Int) {
    collegeDistribution(limit: $limit) {
      college
      count
      percentage
    }
  }
`;

// Types for the queries
export interface DashboardStats {
  totalUsers: number;
  totalAdmins: number;
  totalPasses: number;
  activeEvents: number;
  recentSignups: number;
  passesThisWeek: number;
  userGrowth: {
    percentage: number;
    type: "increase" | "decrease";
  };
  passGrowth: {
    percentage: number;
    type: "increase" | "decrease";
  };
}

export interface RecentUser {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  avatarUrl: string | null;
  createdAt: string;
  role: {
    level: string;
  } | null;
}

export interface RegistrationTrend {
  date: string;
  count: number;
}

export interface PassSalesTrend {
  date: string;
  count: number;
  revenue: number;
}

export interface CollegeDistribution {
  college: string;
  count: number;
  percentage: number;
}
