import React from "react";

import css from 'components/styles.module.scss'


const Filter = ({value, onChange}) => (
    <label className={css.label}> Filter by name:
    <input className={css.input} type="filter" name="filter" value={value}
        onChange={onChange}>
    </input>
</label>
)

export default Filter