import React from 'react';

const AppTable = ({ cols, keyProp, page, rowsPerPage, pageData, highestSalesIds }:
  { pageData: any[], cols: string[], keyProp: string, page: number, rowsPerPage: number, highestSalesIds: number[] }) => {
  return (
    <table className="pure-table pure-table-horizontal app-table">
      <thead>
        <tr>
          {
            cols.map(col => <th key={col} className={`th-${col}`}>{col[0].toUpperCase() + col.slice(1)}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          pageData.map(d => (
            <tr key={d[keyProp]}>
              {
                cols.map(col => <td key={d[col]} className={`td-${col} ${highestSalesIds.includes(d[keyProp]) ? 'top' : ''}`}>{d[col]}</td>)
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
};

export default AppTable;