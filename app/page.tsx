import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";
import { FaRegEdit } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";

export default function Home() {
  return (
    <div>
      <div className="flex gap-3 flex-wrap">
        <ButtonLink href="/indigents/add">
          <IoPersonAddOutline />
          إضافة حالة
        </ButtonLink>
        <ButtonLink href="/indigents/inquery">
          <TbReportSearch /> إستعلام عن حالة
        </ButtonLink>
        <Button>
          <IoMdAddCircleOutline />
          إضافة مساعدة
        </Button>
        <Button>
          <FaRegEdit /> طلب تعديل بيانات حالة
        </Button>
      </div>
    </div>
  );
}
