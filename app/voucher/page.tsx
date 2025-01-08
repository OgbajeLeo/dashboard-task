
import Sidebar from "../components/SideBar";
import Section1 from "./components/section1";
import VoucherHolders from "./components/VoucherHolder";
import VoucherList from "./components/VoucherList";

export default function Home() {
  return (
    <div className="w-full">
      <Sidebar>
              <Section1 />
              <VoucherList />
              <VoucherHolders />
      </Sidebar>
    </div>
  );
}
