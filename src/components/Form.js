import { useState } from "react";
import SearchBar from "./SearchBar";
import Table from "./Table";
import TransactionForm from "./TransactionForm";


//the transaction component
function Form() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const result = transactions.filter((transaction) => {
      if(searchTerm==='')return true
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
      <div>
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
      <Table result={result} />
      </div>
    </div>
  );
}

export default Form;
