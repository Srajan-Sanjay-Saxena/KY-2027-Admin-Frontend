// Admin Mutations
// These mutations will be used to perform admin operations

export const INVITE_ADMIN = `
  mutation InviteAdmin($targetEmail: String!, $role: AdminRole!) {
    inviteAdmin(targetEmail: $targetEmail, role: $role) {
      success
      message
      admin {
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
  }
`;

export const VERIFY_ADMIN_CREDENTIALS = `
  mutation VerifyAdminCredentials($adminPassword: String!) {
    verifyAdminCredentials(adminPassword: $adminPassword) {
      success
      message
      token
    }
  }
`;

export const REMOVE_ADMIN = `
  mutation RemoveAdmin($adminId: ID!) {
    removeAdmin(adminId: $adminId) {
      success
      message
    }
  }
`;

export const UPDATE_ADMIN_ROLE = `
  mutation UpdateAdminRole($adminId: ID!, $newRole: AdminRole!) {
    updateAdminRole(adminId: $adminId, newRole: $newRole) {
      success
      message
      admin {
        id
        user {
          role {
            level
          }
        }
      }
    }
  }
`;

export const RESET_ADMIN_PASSWORD = `
  mutation ResetAdminPassword($adminId: ID!) {
    resetAdminPassword(adminId: $adminId) {
      success
      message
    }
  }
`;

// Types for the mutations
export type AdminRole = "MANAGER" | "OPERATOR";

export interface InviteAdminInput {
  targetEmail: string;
  role: AdminRole;
}

export interface InviteAdminResponse {
  success: boolean;
  message: string;
  admin?: {
    id: string;
    userId: string;
    createdAt: string;
    user: {
      email: string;
      firstName: string | null;
      lastName: string | null;
      role: {
        level: string;
      } | null;
    };
  };
}

export interface VerifyAdminCredentialsInput {
  adminPassword: string;
}

export interface VerifyAdminCredentialsResponse {
  success: boolean;
  message: string;
  token?: string;
}

export interface MutationResponse {
  success: boolean;
  message: string;
}
