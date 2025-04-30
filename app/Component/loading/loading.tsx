'use client';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="flex space-x-4">
        <div className="w-8 h-8 rounded-full bg-red-500 animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-8 h-8 rounded-full bg-green-500 animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-8 h-8 rounded-full bg-blue-500 animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loading;
