import type { NextPage } from 'next'
import React from 'react'
import Layout from '../../components/layout';
import AddTask from '../../components/tasks/addTask';


const Index: NextPage = () => {
  return (
    <Layout>
      <AddTask></AddTask>
    </Layout>
  );
};

export default Index;
