"use client";
import React from "react";
import HeaderLayoutWithCreateButton from "../layouts/HeaderLayoutWithCreateButton";
import BodyLayout from "../layouts/BodyLayout";
import Layout from "../layouts/layout";
import UsersTable from "../tables/UsersTable";

function Users() {
  return (
    <Layout>
      <HeaderLayoutWithCreateButton type="user" />
      <BodyLayout>
        <UsersTable />
      </BodyLayout>
    </Layout>
  );
}

export default Users;
