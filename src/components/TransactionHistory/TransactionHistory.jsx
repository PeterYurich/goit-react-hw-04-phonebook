import React from "react";
import css from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transaction_history}>
      <thead className={css.table_head}>
        <tr>
          <th className={css.type_column}>Type</th>
          <th className={css.amount_column}>Amount</th>
          <th className={css.currency_column}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={transaction.id} className={index % 2 !== 0 ? css.gradient : ""}>
            <td className={css.type_column}>{transaction.type}</td>
            <td className={css.amount_column}>{transaction.amount}</td>
            <td className={css.currency_column}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default TransactionHistory;
