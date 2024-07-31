import { Table } from "@/components";
import { getStudents } from "@/lib/actions/student.action";

const Home = async ({ params }: { params: any }) => {
  // TODO: Get the url params to make a pagination
  const students = await getStudents(1);

return <Table students={students} />;
};

export default Home;
