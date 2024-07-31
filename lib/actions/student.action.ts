"use server";

import { dummyStudents } from "../constants";
import { StudentType } from "../tyoes";

const serverUrl = process.env.SERVER_URL;

export async function getStudents(page: number): Promise<StudentType[]> {
  //const response = await axios.get(`${serverUrl}/api/students`)
  return dummyStudents;
}

export async function createStudent(student: StudentType) {
  //const response = await axios.post(`${serverUrl}/api/students`, { student })

}
