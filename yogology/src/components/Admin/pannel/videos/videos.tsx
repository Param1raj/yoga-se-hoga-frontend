"use client";
import React from "react";
import HeaderLayoutWithCreateButton from "../layouts/HeaderLayoutWithCreateButton";
import BodyLayout from "../layouts/BodyLayout";
import Layout from "../layouts/layout";
import VideosTable from "../tables/BlogsTable";
function Videos() {
  return (
    <Layout>
      <HeaderLayoutWithCreateButton type="video" />
      <BodyLayout>
        <VideosTable />
      </BodyLayout>
    </Layout>
  );
}

export default Videos;
