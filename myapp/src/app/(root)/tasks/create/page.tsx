import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create a New Task</h1>
      <form action={async (formData: FormData) => {
        'use server'
        const title = formData.get('title') as string
        const description = formData.get('description') as string
        // Here you would typically call your backend API to create the task
        console.log('Creating task:', { title, description })
      }}>
        <input type="text" name="title" placeholder="Task Title" required />
        <textarea name="description" placeholder="Task Description" required></textarea>
        <input type="date" name="dueDate" placeholder="Due Date" />
        <select name="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Create Task</button>
      </form>
      <p className="mt-4 text-gray-600">Fill out the form to create a new task.</p>

    </div>
  )
}

export default page