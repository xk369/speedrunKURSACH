import { Link } from 'react-router-dom';
import { Home, Info, HelpCircle, Phone } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const menuItems = [
  { path: '/', icon: Home, label: 'Главная' },
  { path: '/about', icon: Info, label: 'О нас' },
  { path: '/help', icon: HelpCircle, label: 'Помощь' },
  { path: '/contacts', icon: Phone, label: 'Контакты' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-border bg-sidebar text-sidebar-foreground">
      <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
        <h1 className="text-lg font-semibold">Product Comparison</h1>
        <ThemeToggle />
      </div>
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}; 