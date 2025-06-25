import React from 'react';
import { DailyAction } from '../utils/dailyActions';

interface MessageDisplayProps {
  action: DailyAction | null;
  isVisible: boolean;
  onClose: () => void;
}

export const MessageDisplay: React.FC<MessageDisplayProps> = ({ action, isVisible, onClose }) => {
  if (!isVisible || !action || !action.message) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden transform animate-in zoom-in-95 duration-300">
        {/* Funny Image */}
        <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
          <img 
            src={action.image} 
            alt="Funny reaction"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to emoji if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<div class="text-8xl">${action.emoji || '🎉'}</div>`;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        {/* Message Content */}
        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-3 capitalize">
            {action.type.replace('-', ' ')}!
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {action.message}
          </p>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Awesome! 🎉
          </button>
        </div>
      </div>
    </div>
  );
};