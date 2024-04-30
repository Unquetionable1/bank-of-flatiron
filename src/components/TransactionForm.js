import React, { useState } from "react";

const TransactionForm = ({ onAddTransaction }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date,
      description,
      category,
      amount,
    };

    onAddTransaction(newTransaction);

    // Clear the form after adding a transaction
    setDate("");
    setDescription("");
    setCategory("");
    setAmount(0);
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>
              Date:{" "}
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <input
              type="text"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              value={category}
              placeholder="Category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="number"
              value={amount}
              placeholder="Amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <br />
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;
