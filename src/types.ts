export interface Piatto {
    food_name: string
    food_id: number
    price: number
    course: string
  }

  export interface DailyOrder {
    name: string
    company: string
    food_name: string
    date: number
    note: string
  }

  export interface History {
    food_name: string
    price: number
    note: string
    date: number
  }

  export interface Company {
    company_id: number
    name: String
  }

export interface User {
  id: number
  name: string
  password: string
  company: string
  role: string
}

export enum Role {
  Generico,
  Ordinante,
  Ristorante,
  Admin,
}
