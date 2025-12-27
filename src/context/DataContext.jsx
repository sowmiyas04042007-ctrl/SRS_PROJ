import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const [doctors] = useState([
    {
      id: 1,
      name: "Dr. Kumar",
      specialization: "Oncology",
      availability: "Mon – Fri | 10:00 AM – 4:00 PM"
    },
    {
      id: 2,
      name: "Dr. Priya",
      specialization: "Radiation Oncology",
      availability: "Mon – Sat | 11:00 AM – 5:00 PM"
    }
  ]);

  return (
    <DataContext.Provider value={{ appointments, setAppointments, doctors }}>
      {children}
    </DataContext.Provider>
  );
};
