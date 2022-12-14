export interface Piatto {
    food_name: string
    food_id: number
    price: number
    course: string
  }

  export interface DailyOrder {
    username: string
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

