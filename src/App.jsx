import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className ="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow p-6">
        <TaskManager />
        </main>

        {/* Footer */}
        <Footer />

        {/* Theme toggle button */}
        <button
        onClick={() => document.documentElement.classList.toggle('dark')}
          className="fixed top-4 right-4 bg-black text-white px-3 py-1 rounded"
          >
            Toggle Theme
            </button>
            </div>
  );
}

export default App;
