import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const randomColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

  return (
    <section className={css.statistics}>
      {!title ? null : <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{
              borderRadius: 4,
              backgroundColor: randomColor(),
              color: 'white',
            }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}> {percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
