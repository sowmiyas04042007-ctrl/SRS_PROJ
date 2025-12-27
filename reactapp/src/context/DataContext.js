import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const [doctors] = useState([
    { id: 1, name: "Dr. Kumar", specialization: "Oncology", availability: "Mon-Fri" },
    { id: 2, name: "Dr. Priya", specialization: "Radiation Oncology", availability: "Tue-Sat" }
  ]);

  return (
    <DataContext.Provider value={{ appointments, setAppointments, doctors }}>
      {children}
    </DataContext.Provider>
  );
};
