// User GraphQL Queries
// These queries will be used to fetch user data from the backend

export const GET_USERS = `
  query GetUsers($limit: Int, $offset: Int, $search: String, $filter: UserFilter) {
    users(limit: $limit, offset: $offset, search: $search, filter: $filter) {
      users {
        id
        email
        firstName
        lastName
        slugName
        avatarUrl
        phone
        gender
        college
        dob
        createdAt
        updatedAt
        role {
          id
          level
        }
      }
      totalCount
      hasMore
    }
  }
`;

export const GET_USER_BY_ID = `
  query GetUserById($id: ID!) {
    user(id: $id) {
      id
      email
      firstName
      lastName
      slugName
      avatarUrl
      phone
      gender
      college
      dob
      createdAt
      updatedAt
      aadhaarNumber
      role {
        id
        level
        createdAt
      }
      admin {
        id
        createdAt
      }
    }
  }
`;

export const GET_USER_BY_EMAIL = `
  query GetUserByEmail($email: String!) {
    userByEmail(email: $email) {
      id
      email
      firstName
      lastName
      slugName
      avatarUrl
      phone
      gender
      college
      createdAt
      role {
        level
      }
    }
  }
`;

export const GET_USER_PROFILE_STATUS = `
  query GetUserProfileStatus($userId: ID, $email: String) {
    userProfileStatus(userId: $userId, email: $email) {
      userExist
      status
      userId
      email
    }
  }
`;

export const SEARCH_USERS = `
  query SearchUsers($query: String!, $limit: Int) {
    searchUsers(query: $query, limit: $limit) {
      id
      email
      firstName
      lastName
      avatarUrl
      college
      role {
        level
      }
    }
  }
`;

// Types for the queries
export interface User {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  slugName: string;
  avatarUrl: string | null;
  phone: string | null;
  gender: "MALE" | "FEMALE" | "OTHER" | "PREFER_NOT_TO_SAY" | null;
  college: string | null;
  dob: string | null;
  createdAt: string;
  updatedAt: string;
  aadhaarNumber?: string | null;
  role: {
    id: string;
    level: "MASTER_ADMIN" | "MANAGER" | "OPERATOR" | "USER";
    createdAt?: string;
  } | null;
  admin?: {
    id: string;
    createdAt: string;
  } | null;
}

export interface UsersResponse {
  users: User[];
  totalCount: number;
  hasMore: boolean;
}

export interface UserFilter {
  role?: "MASTER_ADMIN" | "MANAGER" | "OPERATOR" | "USER";
  hasCompletedProfile?: boolean;
  college?: string;
}

export interface UserProfileStatus {
  userExist: boolean;
  status: boolean | null;
  userId: string | null;
  email: string | null;
}
