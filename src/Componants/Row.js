/** @format */

export default function Row({ row }) {
    console.log(row)
    console.log("hello")
  return (
    <tr>
      <td>{row.year}</td>
      <td>{row.valueEndOfYear}</td>
      <td>{row.interest}</td>
      <td>{row.totalInterest}</td>
      <td>{row.investmentCapital}</td>  
    </tr>
  );
}
