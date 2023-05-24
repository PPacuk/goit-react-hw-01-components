import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import randomColor from 'utils/randomColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
