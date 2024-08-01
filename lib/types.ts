export type StudentType = {
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    grade: number,
}

export type GetAllResponseType ={
    students: StudentType[],
    nextPage: number | null,
    previousPage: number | null,
    total: 0,
    currentPage: number,
    pageSize: number
}