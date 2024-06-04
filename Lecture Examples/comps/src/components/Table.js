import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    const customHeader = column.header && (
      <Fragment key={column.label}>{column.header()}</Fragment>
    );
    return customHeader || <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-3" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto borer-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
