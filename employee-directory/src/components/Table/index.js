import React, { useContext } from "react";
import Body from "../Body";
import "./Table.css";
import DataAreaContext from "../../utils/DataAreaContext";
//Passing data into the table, making it accessible.
const Table = () => {
    const context = useContext(DataAreaContext);
//structuring the table.
    return (
<div className="table mt-5">
<table
id="table"
className="table table-striped table-hover table-condensed"
>
<thead>
<tr>
{context.developerState.headings.map(({ name, width }) => {
return (
     <th
     //setting a button up
    className="col"
     key={name}
    style={{ width }}
    onClick={() => {
    context.handleSort(name.toLowerCase());
}}
>
{name}
<span className="pointer"></span>
</th>
);
})}
</tr>
</thead>

<Body />
</table>
</div>
);
}

export default Table;