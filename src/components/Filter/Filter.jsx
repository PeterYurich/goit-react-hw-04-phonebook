import React from "react";


const Filter = ({value, onChange}) => (
    <label> Filter by name:
    <input type="filter" name="filter" value={value}
        onChange={onChange}>
    </input>
</label>
)

export default Filter