import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "expense",
    ammount: 0,
    description: "",
  });
  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  // Load initial transactions from local storage
  const [allTransactions, setAllTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("allTransactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  // Save transactions to local storage whenever `allTransactions` changes
  useEffect(() => {
    localStorage.setItem("allTransactions", JSON.stringify(allTransactions));
  }, [allTransactions]);

  function handleFormSubmit(currentFormData) {
    if (!currentFormData.description || !currentFormData.ammount) return;

    const newTransaction = {
      ...currentFormData,
      id: Date.now(),
    };

    setAllTransactions((prevTransactions) => [...prevTransactions, newTransaction]);

    // Update total expenses and income
    if (currentFormData.type === "expense") {
      setTotalExpense((prev) => prev + parseFloat(currentFormData.ammount));
    } else {
      setTotalIncome((prev) => prev + parseFloat(currentFormData.ammount));
    }
  }

  console.log(allTransactions);

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        value,
        setValue,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
