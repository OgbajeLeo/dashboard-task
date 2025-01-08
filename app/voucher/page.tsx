
import Sidebar from "../components/SideBar";
import CashbackRequests from "./components/CashBackRequest";
import PublishedVoucher from "./components/PublishedVoucher";
import Section1 from "./components/section1";
import VoucherActivity from "./components/VoucherActivity";
import VoucherHolders from "./components/VoucherHolder";
import VoucherList from "./components/VoucherList";

export default function Home() {
  return (
    <div className="w-full">
      <Sidebar>
              <Section1 />
              <VoucherList />
        <VoucherHolders />
        <CashbackRequests />
        <PublishedVoucher />
        <VoucherActivity />
      </Sidebar>
    </div>
  );
}
