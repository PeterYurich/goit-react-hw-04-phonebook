import React from "react";
import css from "./Statistics.module.css";
import propTypes from "prop-types";

console.log(css);

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(item => 
          <li key={item.id} className={css.stat_item}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}</span>
          </li>
        )}
      </ul>
    </section>
  )
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Statistics;
