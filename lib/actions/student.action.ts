import axios from "axios";
import { dummyStudents } from "../constants";
import { StudentType } from "../types";

const serverUrl = process.env.SERVER_URL;

/**
 * Function to fetch list of students from the server
 * @param page - Page number for pagination
 * @returns List of StudentType objects
 */
export async function getStudents(page: number): Promise<StudentType[]> {
  try {
   // const response = await axios.get(`${serverUrl}/api/students`);
    //console.log(response.data.students);
    return dummyStudents;
  } catch (error:any) {
    console.error("Error fetching students:", error.message);
    // Return an empty array or handle the error as needed
    return [];
  }
}

/**
 * Function to create a new student record on the server
 * @param formData - Form data containing student details
 */
export async function createStudent(formData: FormData) {
  const student = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    grade: formData.get("grade"),
    age: formData.get("age"),
  };

  try {
    const response = await axios.post(`${serverUrl}/api/students`, { student });
    return response.data;
  } catch (error: any) {
    console.error("Error creating student:", error.message);
    // Handle the error (e.g., show a user-friendly message)
  }
}