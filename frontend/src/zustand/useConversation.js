import { create } from "zustand"; // zustand is for creating global state (similar to context)

const userConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessage: (messages) => set({ messages }),
}));

export default userConversation;
