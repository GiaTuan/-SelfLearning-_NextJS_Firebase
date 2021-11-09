import type { NextPage } from 'next'
import React from 'react'
import Layout from '../../components/layout';
import Login from '../../components/login';
import Signup from '../../components/signup/signup';
import AddTask from '../../components/tasks/addTask';


const Index: NextPage = () => {
  return (
    <Layout>
      <Signup></Signup>
    </Layout>
  );
};

export default Index;
