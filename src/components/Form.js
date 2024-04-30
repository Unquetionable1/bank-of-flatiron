import { useState } from "react";
import SearchBar from "./SearchBar";
import Table from "./Table";
import TransactionForm from "./TransactionForm";

function Form() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const result = () =>
    transactions.filter((transaction) => {
      return transaction.description
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
    });

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  const handleClick = () => {
    setTransactions(result);
  };
  return (
    <div>
      <div className="search">
        <SearchBar
          searchTerm={searchTerm}
          handleClick={handleClick}
          handleChange={handleChange}
        />
      </div>
      <div style={{ padding: 10 }}>
        <TransactionForm onAddTransaction={addTransaction} />
      </div>

      <div className="table">
        <Table transactions={transactions} />
      </div>
    </div>
  );
}

export default Form;
