export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface TransactionInterface {
  id: string;
  docId: string;
  category: string;
  description: string;
  money: string;
  transactionType: string;
  imageUrl: string;
  timestamp: string;
  imageId: string;
}

export interface financeSummary {
  balance: any;
  income: any;
  expenses: any;
}

export interface PasswordResetData {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  handleResetPassword: () => void;
  setCurrentPassword: (value: string) => void;
  setNewPassword: (value: string) => void;
  setConfirmNewPassword: (value: string) => void;
}

export interface SignUp {
  displayName: string;
  email: string;
  password: string;
}

export interface SignIn {
  email: string;
  password: string;
}
export interface User {
  displayName: string;
  email: string;
}
export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}
export type UserData = {
  email: string;
  uid: string;
  displayName: string;
  photoUrl: string | null;
};

export interface User {
  displayName: string;
  email: string;
  
}




// Define types
export interface Category {
  id: number;
  name: string;
  image: any;
}
export interface TransactionData {
  description: string;
  category: string;
  money: string;
  imageUrl: string | null;
  transactionType: string;
  timestamp: string;
  imageId: any;
  // id: string;
  // docId: string;
}