import { Table } from "@/components";
import { getStudents } from "@/lib/actions/student.action";

const Home = async ({
  searchParams,
}: {
  searchParams: { [page: string]: number };
}) => {
  const currentPage = searchParams.page? searchParams.page : 1
  const students = await getStudents(currentPage);

  return <Table students={students} />;
};

export default Home;
