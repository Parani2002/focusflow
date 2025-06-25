import React from 'react'
import { type Metadata } from "next";

// type TaskPageProps = {
//     params:{
//         id: string
//     };
   
// };

export const metadata : Metadata = {
  title: 'Task Details',
  description: 'View details of a specific task',
};

const page = () => {
    
   
  return (
    <div>
        <h1> View Task</h1>
       
    </div>
  )
}

export default page