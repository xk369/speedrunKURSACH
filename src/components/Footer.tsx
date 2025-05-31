import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">О сервисе</h3>
            <p className="text-muted-foreground">
              ProductCompare - это удобный инструмент для сравнения товаров и выбора лучшего варианта.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-theme">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground transition-theme">
                  Помощь
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-foreground transition-theme">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@productcompare.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-theme">
                  <Mail className="h-4 w-4" />
                  info@productcompare.com
                </a>
              </li>
              <li>
                <a href="https://github.com/xk369/speedrunKURSACH" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-theme">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://x.com/kuroroar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-theme">
                  <Twitter className="h-4 w-4" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 ProductCompare. Все права защищены, но это  не точно </p>
        </div>
      </div>
    </footer>
  );
}; 