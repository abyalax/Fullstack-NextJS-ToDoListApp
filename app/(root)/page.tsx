import { getData } from "@/actions/todoActions";
import Todos from "../../components/todos";
import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/Sidebar";

export default async function Home() {
  const data = await getData();
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-between ">
        <Sidebar/>
        <Todos todos={data} />
      </div>
    </>

  )
}