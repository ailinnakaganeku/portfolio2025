import messages from "@/app/locales/en.json";
import {
  PortfolioMessages,
  portfolioMessagesSchema,
} from "@/types/portfolio";

let parsedMessages: PortfolioMessages | null = null;

export function getPortfolioMessages(): PortfolioMessages {
  if (parsedMessages) {
    return parsedMessages;
  }

  parsedMessages = portfolioMessagesSchema.parse(messages);
  return parsedMessages;
}

export const portfolioContent = getPortfolioMessages();

