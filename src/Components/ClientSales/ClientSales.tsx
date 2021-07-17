import React, { useState } from 'react';
import { AJAX_STATUS } from '../../Helpers/Constants';
import Loader from '../Common/Loader';
import Pagination from '../Common/Pagination';
import Section from '../Common/Section';
import ClientSalesTable from './ClientSalesTable';

const Heading = () => <h3>Sales Data</h3>;

const ClientSales = (props: any) => {
  const maxDispPgNum = 5;
  const rowsPerPage = 10;
  const { clientFetchStatus, minRange, clientData, fetchClientDataFn, company, sortedClientData } = props;
  const [tblPage, setTablePage] = useState(1);

  const highestSales = sortedClientData[sortedClientData.length - 1]?.sales || 0;
  const highestSalesIds = sortedClientData.filter((e: any) => e.sales === highestSales).map((e: any) => e.id);

  const filteredData = clientData.filter((a: any) => (a.company.toLowerCase().indexOf(company.toLowerCase()) === 0 && a.sales >= minRange));

  const Actions = () => {
    return <h5 onClick={fetchClientDataFn}>REFRESH DATA</h5>
  };

  const Footer = () => <Pagination
    setTablePage={setTablePage} pgNumSize={Math.ceil(filteredData.length / rowsPerPage)} maxDispPgNum={maxDispPgNum} />;

  return (
    <Section
      heading={Heading}
      actions={Actions}
      footer={Footer}
    >
      {
        clientFetchStatus === AJAX_STATUS.PENDING ?
          <Loader /> :
          <ClientSalesTable filteredData={filteredData} tblPage={tblPage} rowsPerPage={rowsPerPage} highestSalesIds={highestSalesIds} />
      }
    </Section>
  )

};

export default React.memo(ClientSales);