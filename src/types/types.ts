export interface User{
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
      docId: string;
      category: string;
      description: string;
      money: string;
      transactionType: string;
      imageUrl: string;
      timestamp: string;
  }