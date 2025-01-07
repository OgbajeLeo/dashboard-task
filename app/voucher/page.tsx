
import Sidebar from "../components/SideBar";
import Dashboard from "../dashboard/page";

export default function Home() {
  return (
    <div className="w-full">
      <Sidebar>
        <Dashboard />
      </Sidebar>
    </div>
  );
}
