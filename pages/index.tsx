import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Layout from '../components/layout'
import Tasks from '../components/tasks'

const Index: NextPage = () => {
  return (
    <Layout>
      <Tasks></Tasks>
    </Layout>
  );
};

export default Index;
