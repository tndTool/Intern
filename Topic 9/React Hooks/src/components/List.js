import React, { useState, useMemo } from "react";

function List({ numbers }) {
  const [filter, setFilter] = useState("even");

  const filteredNumbers = useMemo(() => {
    console.log("Filtering numbers...");
    if (filter === "even") {
      return numbers.filter((num) => num % 2 === 0);
    } else {
      return numbers.filter((num) => num % 2 !== 0);
    }
  }, [numbers, filter]);

  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="even">Even</option>
        <option value="odd">Odd</option>
      </select>
      <ul>
        {filteredNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
