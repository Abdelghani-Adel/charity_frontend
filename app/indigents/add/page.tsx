import React from "react";

const Page = () => {
  return (
    <div>
      <h2 className="p-2 rounded-md border-r-8 border-2 border-primary">إضافة حالة</h2>

      <form className="flex flex-row-reverse gap-4 flex-wrap justify-between">
        <div className="formGroup w-5/12">
          <label htmlFor="nid">الرقم القومي</label>
          <input type="text" className="formInput" id="nid" placeholder="الرقم القومي" />
        </div>

        <div className="formGroup w-5/12">
          <label htmlFor="nid">الرقم القومي</label>
          <input type="text" className="formInput" id="nid" placeholder="الرقم القومي" />
        </div>

        <div className="formGroup w-5/12">
          <label htmlFor="nid">الرقم القومي</label>
          <input type="text" className="formInput" id="nid" placeholder="الرقم القومي" />
        </div>

        {/* <input type="text" className="formInput" placeholder="رقم التليفون" />
        <input type="text" className="formInput" placeholder="المحافظة" />
        <input type="text" className="formInput" placeholder="الإسم رباعي" />
        <input type="text" className="formInput" placeholder="المدينة" />
        <input type="text" className="formInput" placeholder="المدينة" />
        <input type="text" className="formInput" placeholder="المنطقة" /> */}
      </form>
    </div>
  );
};

export default Page;
