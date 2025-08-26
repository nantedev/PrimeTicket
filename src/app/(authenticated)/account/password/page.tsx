import { Heading } from "@/components/heading";
import { AccountTabs } from "../_navigation/tab";

const PasswordPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-10">
      <Heading
        title="Password"
        description="Keep your account secure"
        tabs={<AccountTabs />}
      />
    </div>
  );
};

export default PasswordPage;
