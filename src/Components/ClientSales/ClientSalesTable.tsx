import React, { useMemo } from 'react';
import AppTable from '../Common/AppTable';

const ClientSalesTable = (props: any) => {
  const { filteredData, tblPage, rowsPerPage, highestSalesIds } = props;

  const cols = ['name', 'company', 'sales'];
  const pageData = useMemo(() => filteredData.filter((d: any, i: number) => i >= (rowsPerPage * (tblPage - 1)) && i < (rowsPerPage * tblPage)), [filteredData]);
  const pageSales = useMemo(() => pageData.reduce((a: number, c: any) => a + c.sales, 0), [pageData]);
  const totalSales = useMemo(() => filteredData.reduce((a: number, c: any) => a + c.sales, 0), [filteredData]);
  return (
    <>
      <AppTable pageData={pageData} cols={cols} keyProp="id" page={tblPage} rowsPerPage={rowsPerPage} highestSalesIds={highestSalesIds} />
      <div className="client-sales-footer">
        <div className="row-space-between">
          <label>Page Sales Subtotal</label>
          <label>{pageSales}</label>
        </div>
        <div className="row-space-between">
          <label>Total Sales</label>
          <label>{totalSales}</label>
        </div>
      </div>
    </>
  );
};

export default ClientSalesTable;