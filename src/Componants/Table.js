/** @format */

import Row from "./Row.js";
export default function Table({ result }) {
  return (
    <table id='result'>
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (year)</th>
        <th>Total Interest</th>
        <th>Investment Capital</th>
      </thead>
      <tbody>
        {result &&
          result.map((row) => {
            return <Row row={row} />;
          })}
      </tbody>
    </table>
  );
}
