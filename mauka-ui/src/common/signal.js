export const messageTypeOptions = ["bullish", "bearish", "neutral"];
export const signalColumns = [
  {
    name: "ticker",
    isFilter: true,
    type: "input",
  },
  {
    name: "message_type",
    isFilter: true,
    type: "select",
    options: messageTypeOptions,
  },
  {
    name: "category",
    isFilter: true,
    type: "input",
  },
];
