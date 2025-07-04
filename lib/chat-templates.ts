import type { UILayout } from "@/types/ui-schema"

export const simpleChatTemplate: UILayout = {
  id: "simple-chat-input",
  title: "Simple Chat Input",
  description: "Clean chat input with avatar and placeholder text",
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
      fallback: "JA",
    },
    width: "full",
    style: { maxWidth: "500px" },
  },
}

export const expandedChatTemplate: UILayout = {
  id: "expanded-chat-input",
  title: "Expanded Chat Input",
  description: "Chat input with suggestions and close button",
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
      fallback: "JA",
    },
    width: "full",
    style: { maxWidth: "600px" },
  },
}

export const chatInterfaceTemplate: UILayout = {
  id: "chat-interface-collection",
  title: "Chat Interface Collection",
  description: "Both simple and expanded chat interfaces",
  root: {
    type: "container",
    display: "flex",
    direction: "column",
    gap: "6",
    align: "center",
    padding: "8",
    background: "#f3f4f6",
    minHeight: "screen",
    children: [
      {
        type: "container",
        display: "flex",
        justify: "center",
        width: "full",
        children: [
          {
            type: "chat-input",
            variant: "simple",
            placeholder: "What do you want to know about James A.?",
            avatar: {
              type: "avatar",
              size: "md",
              variant: "circle",
              status: "online",
              statusColor: "#10b981",
              fallback: "JA",
            },
            style: { maxWidth: "500px" },
          },
        ],
      },
      {
        type: "container",
        display: "flex",
        justify: "center",
        width: "full",
        children: [
          {
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
              fallback: "JA",
            },
            style: { maxWidth: "600px" },
          },
        ],
      },
    ],
  },
}
