export interface CreateItemRequest {
  name: string;
}

export interface Item {
  id: number;
  name: string;    
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
