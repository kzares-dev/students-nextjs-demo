import axios from "axios";
import { GetAllResponseType } from "../types";

const serverUrl = process.env.PROD_SERVER || "http://localhost:3001";
console.log(serverUrl)
/**
 * Function to fetch list of students from the server
 * @param page - Page number for pagination
 * @returns List of StudentType objects
 */
export async function getStudents(
  currentPage: number,
  searchParam: string
): Promise<GetAllResponseType> {
  try {
    const response = await axios.get(
      `${serverUrl}/api/students?page=${currentPage}&limit=5&search=${searchParam}`
    );
    return response.data;
  } catch (error: any) {
    console.error("Error fetching students:", error.message);
    // Return an empty array or handle the error as needed
    return {
      students: [],
      nextPage: null,
      previousPage: null,
      total: 0,
      currentPage: 0,
      pageSize: 0,
    };
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

/**
 * Function to edit a student, works exactly like the create student
 * @param formData - Form data containing student details
 * @param _id is the student id
 */
export async function editStudent(formData: FormData, id: string) {
  const student = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    grade: formData.get("grade"),
    age: formData.get("age"),
  };

  try {
    const response = await axios.put(`${serverUrl}/api/students/${id}`, { student });
    return response.data;
  } catch (error: any) {
    console.error("Error creating student:", error.message);
    // Handle the error (e.g., show a user-friendly message)
  }
}

export async function deleteStudent(id: string) {
  try {
    const response = await axios.delete(`${serverUrl}/api/students/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Error creating student:", error.message);
  }
}
