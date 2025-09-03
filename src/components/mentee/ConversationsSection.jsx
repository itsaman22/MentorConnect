import React from 'react';

const ConversationsSection = ({ pinnedConversations, handleSectionClick, handleConversationClick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Pinned Conversations</h3>
        <button 
          onClick={() => handleSectionClick('conversations')}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {pinnedConversations.map((conversation) => (
          <div 
            key={conversation.id} 
            onClick={() => handleConversationClick(conversation.id)}
            className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
          >
            <div className="relative">
              <img 
                src={conversation.avatar} 
                alt={conversation.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              {conversation.verified && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900 truncate">{conversation.name}</h4>
                <span className="text-xs text-gray-500">{conversation.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{conversation.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationsSection;
