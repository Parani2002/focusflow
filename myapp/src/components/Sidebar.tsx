import { 
  Home, 
  CheckSquare, 
  Calendar, 
  BarChart3, 
  Settings, 
  Plus,
  Clock,
  Star,
  Archive
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';


const menuItems = [
  { icon: Home, label: 'Dashboard', active: true,links: '/' },
  { icon: CheckSquare, label: 'Tasks', count: 12, links: '/tasks' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Clock, label: 'Time Tracking' },
  { icon: Star, label: 'Important', count: 3 },
  { icon: Archive, label: 'Archive' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
];

export const Sidebar = () => {
  return (
    <aside className="h-full w-64 bg-gray-50 border-r border-gray-200 relative">
      <div className="p-4 border-b border-gray-200">
        <Button  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          <Link href="/tasks/create">
           New Task
          </Link>
         
        </Button>
      </div>
      
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={cn(
              "w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors",
              item.active 
                ? "bg-blue-100 text-blue-700 font-medium" 
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon className="h-5 w-5" />
              <Link href={item.links || '#'}>
                  <span>{item.label}</span>
              </Link>
             
            </div>
            {item.count && (
              <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                {item.count}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white">
          <h3 className="font-semibold text-sm mb-2">Upgrade to Pro</h3>
          <p className="text-xs opacity-90 mb-3">Unlock advanced features and boost your productivity</p>
          <Button size="sm" variant="secondary" className="w-full">
            Upgrade Now
          </Button>
        </div>
      </div>
    </aside>
  );
};
