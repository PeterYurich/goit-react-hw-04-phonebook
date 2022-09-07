import React from "react";
import css from "./Statistics.module.css";
import propTypes, { arrayOf } from "prop-types";

const Statistics = ({ title, stats }) => {
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.stat - list}>
      {stats.map((item) => {
        <li className={css.item}>
          <span className={css.label}>{item.label}</span>
          <span className={css.percentage}>{item.percentage}</span>
        </li>;
      })}
    </ul>
  </section>;
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: arrayOf(propTypes.object).isRequired,
};
