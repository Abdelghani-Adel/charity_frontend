"use client";
import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";
import PageTitle from "@/components/ui/PageTitle";
import { FaRegEdit } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiAlarmWarningLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 50000));

  return (
    <div className="flex flex-col gap-8">
      <div>
        <PageTitle title="الحالات" />
        <div className="flex flex-col lg:flex-row gap-3">
          <ButtonLink href="/indigents/add">
            <IoPersonAddOutline />
            إضافة حالة
          </ButtonLink>
          <ButtonLink href="/indigents/inquery">
            <TbReportSearch /> إستعلام عن حالة
          </ButtonLink>
          <Button>
            <RiAlarmWarningLine />
            الإبلاغ عن حالة
          </Button>
          <Button>
            <FaRegEdit /> طلب تعديل بيانات حالة
          </Button>
        </div>
      </div>

      <div>
        <PageTitle title="المساعدات" />
        <div className="flex flex-col lg:flex-row gap-3">
          <ButtonLink href="/aids/add">
            <IoMdAddCircleOutline />
            إضافة مساعدة
          </ButtonLink>
          <ButtonLink href="#">
            <IoMdAddCircleOutline />
            إبلاغ بمساعدة عاجلة
          </ButtonLink>
        </div>
      </div>

      <div>
        <PageTitle title="التقارير" />
        <div className="flex flex-col lg:flex-row gap-3">
          <ButtonLink href="/indigents/inquery">
            <TbReportSearch /> المساعدات الشهرية
          </ButtonLink>
          <ButtonLink href="/indigents/inquery">
            <TbReportSearch /> الإيرادات الشهرية
          </ButtonLink>
          <ButtonLink href="/indigents/inquery">
            <TbReportSearch /> الإشتراكات
          </ButtonLink>
          <ButtonLink href="/indigents/inquery">
            <TbReportSearch /> حالات النصب
          </ButtonLink>
          <ButtonLink href="/indigents/inquery">
            <TbReportSearch /> مساعدات عاجلة
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
