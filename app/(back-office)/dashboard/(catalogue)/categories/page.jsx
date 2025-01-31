import React from "react";
import { PageHeader } from "../../../../../components/backoffice/PageHeader";
import TableActions from "../../../../../components/backoffice/TableActions";

const Category = () => {
  return (
    <>
      <PageHeader
        heading="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add Category"
      />
      <TableActions />
    </>
  );
};

export default Category;
