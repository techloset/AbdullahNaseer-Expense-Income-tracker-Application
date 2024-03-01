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
    id:string;
      docId: string;
      category: string;
      description: string;
      money: string;
      transactionType: string;
      imageUrl: string;
      timestamp: string;
  }

 export interface financeSummary{
    balance: string;
    income: string;
    expenses: string;
  };