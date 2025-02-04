
import Sidebar from "./components/SideBar";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div className="w-full">
    <div className="w-full lg:block hidden">
      <Sidebar>
        <Dashboard />
      </Sidebar>
    </div>
      <div className="w-full lg:hidden flex h-screen justify-center items-center">
        {/* provide a text to inform the user that this site is only accessible on desktop devices only */}
        <p className="text-xl text-gray-500 mx-4 text-center">This site is only accessible on
          desktop devices only</p>

    </div>
    </div>
  );
}
