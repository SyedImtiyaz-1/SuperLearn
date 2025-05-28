import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import InternshipsPage from './pages/InternshipsPage';
import HackathonsPage from './pages/HackathonsPage';
import EventsPage from './pages/EventsPage';
import OpenSourcePage from './pages/OpenSourcePage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen flex flex-col bg-white dark:bg-dark-200 text-gray-900 dark:text-gray-100 transition-colors duration-200">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/internships" element={<InternshipsPage />} />
                <Route path="/hackathons" element={<HackathonsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/open-source" element={<OpenSourcePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
