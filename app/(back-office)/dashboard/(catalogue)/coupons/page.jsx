import React from "react";
import { PageHeader } from "../../../../../components/backoffice/PageHeader";
import TableActions from "../../../../../components/backoffice/TableActions";

const Coupons = () => {
  return (
    <>
      <PageHeader
        heading="Coupons"
        href="/dashboard/coupons/new"
        linkTitle="Add Coupons"
      />
      <TableActions />
    </>
  );
};

export default Coupons;
