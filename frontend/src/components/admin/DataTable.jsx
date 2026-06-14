export default function DataTable({ columns, rows }) {
  return (
    <table className="table">
      <thead>
        <tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => <td key={column}>{row[column.toLowerCase()]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
