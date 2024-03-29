"use client";
import React from "react";
import HeaderLayoutWithCreateButton from "../layouts/HeaderLayoutWithCreateButton";
import BodyLayout from "../layouts/BodyLayout";
import Layout from "../layouts/layout";
import BlogsTable from "../tables/BlogsTable";
function Blogs() {
  return (
    <Layout>
      <HeaderLayoutWithCreateButton type="blog" />
      <BodyLayout>
        <BlogsTable />
      </BodyLayout>
    </Layout>
  );
}

export default Blogs;
