import React, { useState } from 'react';
import { dailyActions } from '../utils/dailyActions';
import { getDailyButtonConfig } from '../utils/buttonConfig';

interface BigButtonProps {
  onAction: (action: any) => void;
}

export const BigButton: React.FC<BigButtonProps> = ({ onAction }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const today = new Date().getDate();
  const config = getDailyButtonConfig(today);
  const action = dailyActions[today - 1] || dailyActions[0];

  const handleClick = async () => {
    setIsPressed(true);
    setIsLoading(true);
    
    // Add a small delay for better UX
    setTimeout(() => {
      onAction(action);
      setIsLoading(false);
      setIsPressed(false);
    }, 150);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Daily Fun Button
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto">
          Every day brings a new surprise! Click to discover today's silly action.
        </p>
        <p className="text-sm text-gray-500">
          Day {today} of the month
        </p>
      </div>
      
      <button
        onClick={handleClick}
        disabled={isLoading}
        className={`
          relative overflow-hidden
          px-12 py-8 md:px-16 md:py-12
          text-xl md:text-2xl font-bold text-white
          rounded-2xl md:rounded-3xl
          transition-all duration-200
          transform hover:scale-105 active:scale-95
          shadow-2xl hover:shadow-3xl
          disabled:opacity-70 disabled:cursor-not-allowed
          ${config.gradient}
          ${isPressed ? 'scale-95' : ''}
        `}
        style={{
          background: config.gradient,
          boxShadow: `0 20px 40px ${config.shadowColor}`,
        }}
      >
        <div className="absolute inset-0 bg-white/20 rounded-2xl md:rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 flex items-center space-x-3">
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <span className="text-2xl">{config.emoji}</span>
              <span>{config.label}</span>
            </>
          )}
        </div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 -top-px overflow-hidden rounded-2xl md:rounded-3xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
        </div>
      </button>
      
      <div className="text-center max-w-sm mx-auto">
        <p className="text-sm text-gray-500 leading-relaxed">
          {config.description}
        </p>
      </div>
    </div>
  );
};