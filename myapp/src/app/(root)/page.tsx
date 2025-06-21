import { Clock, MoreHorizontal, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import React from 'react';

const tasks = [
  {
    id: 1,
    title: "Design new landing page",
    description: "Create mockups and wireframes for the new product landing page",
    priority: "High",
    dueDate: "Today",
    status: "In Progress",
    tags: ["Design", "UI/UX"]
  },
  {
    id: 2,
    title: "Review pull requests",
    description: "Go through pending PRs and provide feedback",
    priority: "Medium",
    dueDate: "Tomorrow",
    status: "Todo",
    tags: ["Development", "Review"]
  },
  {
    id: 3,
    title: "Update documentation",
    description: "Add new API endpoints to the developer documentation",
    priority: "Low",
    dueDate: "Next Week",
    status: "Todo",
    tags: ["Documentation"]
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High': return 'bg-red-100 text-red-700 border-red-200';
    case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    case 'Low': return 'bg-green-100 text-green-700 border-green-200';
    default: return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const Home = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Todays Tasks</h2>
          <p className="text-gray-600 mt-1">You have {tasks.length} tasks to complete</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900">{task.title}</h3>
                  <Badge className={getPriorityColor(task.priority)}>
                    {task.priority}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">{task.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Due {task.dueDate}</span>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    {task.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  {task.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
