import React, { useState } from "react";
import { X, Plus, MessageSquare, Trash2, Edit3, LogOut } from "lucide-react";
import { ChatData } from "../context/ChatContext";
import { UserData } from "../context/UserContext";
import { LoadingSpinner } from "./Loading";
import toast from "react-hot-toast";


const Sidebar = ({ isOpen, toogleSidebar }) => {
  const { chats, createChat, createLod, setSelectedChat, deleteChat } =
    ChatData();
  const { logouHandler, userInitials } = UserData();

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: null });

  const openDeleteModal = (id) => {
    setDeleteModal({ isOpen: true, id });
  };

  const closeDeleteModal = () => {
    setDeleteModal({ isOpen: false, id: null });
  };

  const confirmDeleteChat = () => {
    if (deleteModal.id) {
      deleteChat(deleteModal.id);
    }
    closeDeleteModal();
  };

  const deleteChatHandler = (id, e) => {
    e.stopPropagation();
    openDeleteModal(id);
  };

  const handleLogoutConfirm = () => {
    toast.success("Logged out successfully");
    logouHandler();
    setShowLogoutModal(false);
  };

  return (
    <>
      {/* Overlay on Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toogleSidebar}
        />
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:z-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Delete Chat Modal */}
        {deleteModal.isOpen && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-gray-800 p-6 rounded-lg text-center w-60 mx-auto">
              <p className="text-white mb-4">
                Are you sure you want to delete this chat?
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={confirmDeleteChat}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Confirm
                </button>
                <button
                  onClick={closeDeleteModal}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Logout Modal */}
        {showLogoutModal && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-gray-800 p-6 rounded-lg text-center w-60 mx-auto">
              <p className="text-lg font-semibold mb-4">
                Are you sure you want to log out?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={() => setShowLogoutModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={handleLogoutConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">
                {userInitials || "?"}
              </span>
            </div>
            <span className="text-white font-semibold">NovaTalk</span>
          </div>
          <button
            onClick={toogleSidebar}
            className="md:hidden ml-2 p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto p-2 relative justify-center items-center">
          <button
            onClick={createChat}
            disabled={createLod}
            className="flex items-center space-x-2 px-3 py-2 bg-transparent border border-gray-600 hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 text-sm font-medium w-full justify-center"
          >
            {createLod ? (
              <LoadingSpinner />
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>New Chat</span>
              </>
            )}
          </button>
          <p className="text-sm text-gray-500 px-2 mt-4">Recent Chats</p>
          <div className="space-y-1 mt-2">
            {chats && chats.length > 0 ? (
              chats.map((chat) => (
                <div
                  key={chat._id}
                  className="group relative flex items-center space-x-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 cursor-pointer transition-colors duration-200"
                  onClick={() => setSelectedChat(chat._id)}
                >
                  <MessageSquare className="w-4 h-4 flex-shrink-0" />
                  <span className="flex-1 truncate">
                    {chat.latestMessage.slice(0, 30)}...
                  </span>
                  <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="p-1 hover:bg-gray-700 rounded transition-colors"
                      title="Edit (coming soon)"
                    >
                      <Edit3 className="w-3 h-3" />
                    </button>
                    <button
                      onClick={(e) => deleteChatHandler(chat._id, e)}
                      className="p-1 hover:bg-gray-700 rounded transition-colors"
                      title="Delete Chat"
                    >
                      <Trash2 className="w-3 h-3 text-red-500" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No conversations yet</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Logout */}
        <div className="border-t border-gray-800 p-4">
          <button
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <LogOut className="w-4 h-4" />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
