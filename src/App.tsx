import { BrowserRouter } from 'react-router-dom';
import { useTheme } from './hooks/use-theme';
import { Toaster } from './components/ui/sonner';
import { AppRoutes } from './routes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CategoryProvider } from './context/CategoryContext';

function App() {
  const { theme } = useTheme();

  return (
    <BrowserRouter>
      <CategoryProvider>
        <div className={`min-h-screen bg-background text-foreground transition-theme ${theme}`}>
          <Header />
          <main className="container mx-auto px-4 py-8">
            <AppRoutes />
          </main>
          <Footer />
          <Toaster />
        </div>
      </CategoryProvider>
    </BrowserRouter>
  );
}

export default App;
