import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar22 } from '../../../../components/Calender';
import { PrioritySelect } from '../../../../components/PrioritySelect';
import { BreadcrumbWithCustomSeparator } from '../../../../components/BreadcrumbWithCustomSeparator';

const page = async () => {
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Tasks', href: '/tasks' },
  ];
  const activePage = 'Create';

  return (
    <div className="w-full px-4 py-6">
      <BreadcrumbWithCustomSeparator items={breadcrumbItems} active={activePage} />
     

      <Card className="shadow-md border w-full mx-w-2xl mt-4">
        <CardHeader>
          <CardTitle>Create Task</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action={async (formData: FormData) => {
              'use server';
              const title = formData.get('title') as string;
              const description = formData.get('description') as string;
              const dueDate = formData.get('dueDate') as string;
              const priority = formData.get('priority') as string;
              console.log('Creating task:', { title, description, dueDate, priority });
            }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" placeholder="Title" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Task Description"
                className="h-24"
                required
              />
            </div>

            <div className="space-y-2">
              {/* <Label htmlFor="dueDate">Due Date</Label> */}
              <Calendar22 />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <PrioritySelect />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            >
              Create Task
            </Button>
          </form>
        </CardContent>
      </Card>

      <p className="mt-4 text-gray-600 text-sm text-center">
        Fill out the form to create a new task.
      </p>
    </div>
  );
};

export default page;
