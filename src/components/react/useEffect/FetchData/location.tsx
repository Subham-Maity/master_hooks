import React, { createContext, useState } from "react";

export const LocationContext = createContext<any>(null);

// @ts-ignore
export const LocationProvider: React.FC = ({ children }) => {
  const [location, setLocation] = useState<string>("New York");

  const changeLocation = (newLocation: string) => {
    setLocation(newLocation);
  };

  return (
    <LocationContext.Provider value={{ location, changeLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
