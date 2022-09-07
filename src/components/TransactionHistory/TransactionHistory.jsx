import React from "react";
import css from "./TransactionHistory.module.css";
import propTypes from "prop-types";

const TransactionHistory = ({ transactionHistory }) => {
  return (
    <table class={css.transaction_history}>
      <thead className={css.table_head}>
        <tr>
          <th className={css.type_column}>Type</th>
          <th className={css.amount_column}>Amount</th>
          <th className={css.currency_column}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactionHistory.map((transaction, index) => (
            <tr key={transaction.id} className={
                index % 2 !== 0 && css.gradient
            }>
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
  TransactionHistory: propTypes.arrayOf(propTypes.object),
};

export default TransactionHistory;
