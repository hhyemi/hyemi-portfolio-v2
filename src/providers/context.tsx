import React from "react";

const PortfolioContext = React.createContext < { prefix: string } | null >(null);

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
