import type { NextPage } from 'next'
import React from 'react'
import Layout from '../../components/layout';
import Login from '../../components/login';
import AddTask from '../../components/tasks/addTask';


const Index: NextPage = () => {
  return (
    <Layout>
      <Login></Login>
    </Layout>
  );
};

export default Index;
