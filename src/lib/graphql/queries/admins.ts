// Admin GraphQL Queries
// These queries will be used to fetch admin data from the backend

export const GET_ADMINS = `
  query GetAdmins($limit: Int, $offset: Int) {
    admins(limit: $limit, offset: $offset) {
      admins {
        id
        userId
        createdAt
        updatedAt
        user {
          id
          email
          firstName
          lastName
          avatarUrl
          phone
          role {
            level
          }
        }
      }
      totalCount
    }
  }
`;

export const GET_ADMIN_BY_ID = `
  query GetAdminById($id: ID!) {
    admin(id: $id) {
      id
      userId
      createdAt
      updatedAt
      user {
        id
        email
        firstName
        lastName
        avatarUrl
        phone
        college
        role {
          level
        }
      }
    }
  }
`;

export const GET_ADMIN_BY_USER_ID = `
  query GetAdminByUserId($userId: ID!) {
    adminByUserId(userId: $userId) {
      id
      userId
      createdAt
      user {
        email
        firstName
        lastName
        role {
          level
        }
      }
    }
  }
`;

export const CHECK_ADMIN_EXISTS = `
  query CheckAdminExists($email: String!) {
    adminExists(email: $email) {
      exists
      role
    }
  }
`;

// Types for the queries
export interface Admin {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    avatarUrl: string | null;
    phone: string | null;
    college?: string | null;
    role: {
      level: "MASTER_ADMIN" | "MANAGER" | "OPERATOR";
    } | null;
  };
}

export interface AdminsResponse {
  admins: Admin[];
  totalCount: number;
}

export interface AdminExistsResponse {
  exists: boolean;
  role: "MASTER_ADMIN" | "MANAGER" | "OPERATOR" | null;
}
