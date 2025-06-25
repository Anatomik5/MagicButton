import React, { useState, useEffect } from 'react';
import { BigButton } from './components/BigButton';
import { MessageDisplay } from './components/MessageDisplay';
import { DailyAction } from './utils/dailyActions';

function App() {
  const [lastAction, setLastAction] = useState<DailyAction | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleAction = (action: DailyAction) => {
    setLastAction(action);
    action.execute();
    
    // Show message after a brief delay to let visual effects start
    setTimeout(() => {
      setShowMessage(true);
    }, 500);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  useEffect(() => {
    // Add custom animations to the page
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
      }
      
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(200%); }
      }
      
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes zoom-in-95 {
        from { transform: scale(0.95); }
        to { transform: scale(1); }
      }
      
      .animate-shimmer {
        animation: shimmer 2s infinite;
      }
      
      .animate-in {
        animation-fill-mode: both;
      }
      
      .fade-in {
        animation: fade-in 0.3s ease-out;
      }
      
      .zoom-in-95 {
        animation: zoom-in-95 0.3s ease-out;
      }
      
      body {
        transition: all 0.3s ease;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-green-300 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        <BigButton onAction={handleAction} />
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Created with ❤️ for daily fun and surprises
          </p>
          <p className="text-xs text-gray-400">
             Built with Bolt.new
          </p>
        </div>
      </div>
      
      {/* Subtle floating animation elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-green-400 rounded-full opacity-50 animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Message Display Modal */}
      <MessageDisplay 
        action={lastAction}
        isVisible={showMessage}
        onClose={handleCloseMessage}
      />
    </div>
  );
}

export default App;