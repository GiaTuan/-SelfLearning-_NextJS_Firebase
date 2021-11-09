import type { NextPage } from 'next'
import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Layout from '../../components/layout';
import Tasks from '../../components/tasks';
import { Task } from '../../model/Task';
import { getTasksService } from '../../services/tasksService';



export interface TasksPageProps {
  tasks: Task[]
}


const Index: NextPage<TasksPageProps> = ({tasks})  => {
  return (
    <Layout>
      <Tasks tasks={tasks}></Tasks>
    </Layout>
  );
};

export async function getServerSideProps() {
  const tasks = await getTasksService();
  return {
    props: {
      tasks
    }, // will be passed to the page component as props
  }
}
export default Index;
