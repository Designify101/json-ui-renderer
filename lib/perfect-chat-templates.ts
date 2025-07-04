import type { UILayout } from "@/types/ui-schema"

// Perfect Simple Chat Input Template
export const perfectSimpleChatTemplate: UILayout = {
  id: "perfect-simple-chat",
  title: "Perfect Simple Chat Input",
  description: "Exact replica of the simple chat input design",
  root: {
    type: "chat-input",
    variant: "simple",
    placeholder: "What do you want to know about James A.?",
    avatar: {
      type: "avatar",
      size: "md",
      variant: "circle",
      status: "online",
      statusColor: "#10b981",
      background: "#10b981",
    },
    style: {
      maxWidth: "600px",
      width: "100%",
      backgroundColor: "#1f2937",
      borderRadius: "9999px",
      padding: "16px 24px",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
  },
}

// Perfect Expanded Chat Input Template
export const perfectExpandedChatTemplate: UILayout = {
  id: "perfect-expanded-chat",
  title: "Perfect Expanded Chat Input",
  description: "Exact replica of the expanded chat input design",
  root: {
    type: "chat-input",
    variant: "expanded",
    placeholder: "What do you want to know about James A.?",
    suggestions: ["Are they a good fit to our L&D Program?", "What is their training style?", "Tell me..."],
    showClose: true,
    avatar: {
      type: "avatar",
      size: "md",
      variant: "circle",
      status: "online",
      statusColor: "#10b981",
      background: "#10b981",
    },
    style: {
      maxWidth: "600px",
      width: "100%",
      backgroundColor: "#1f2937",
      borderRadius: "24px",
      padding: "20px 24px",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
  },
}
