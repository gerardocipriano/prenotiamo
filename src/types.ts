export interface Piatto {
  food_name: string
  food_id: number
  price: number
  course: string
  img_id: number
}

export interface DailyOrder {
  name: string
  company: string
  food_name: string
  date: number
  note: string
  id: number
}

export interface Company {
  company_id: number
  name: string
}
export interface History {
  food_name: string
  price: number
  note: string
  day: number
  month: number
  year: number
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
