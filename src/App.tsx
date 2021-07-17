import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import './Style/App.css';
import ClientSales from './Components/ClientSales';
import Filter from './Components/Filter';
import TopSales from './Components/TopSales';
import fetchClientData from './fetchClientData';
import { AJAX_STATUS } from './Helpers/Constants';

function App() {

  const [clientData, setClientData] = useState([]);
  const [sortedClientData, setSortedClientData] = useState<any>([]);
  const [minRange, setMinRange] = useState(0);
  const [company, setCompany] = useState('');
  const [clientFetchStatus, setClientFetchStatus] = useState(AJAX_STATUS.NONE);

  const fetchClientDataFn = useCallback(() => {
    setClientFetchStatus(AJAX_STATUS.PENDING);
    fetchClientData().then(data => {
      const sortedData: any[] = [...data]
      sortedData.sort((a: any, b: any) => a.sales - b.sales);
      setClientFetchStatus(AJAX_STATUS.COMPLETE);
      setClientData(data);
      setSortedClientData(sortedData);
    }).catch(() => {
      setClientFetchStatus(AJAX_STATUS.NONE);
    })
  }, []);

  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    fetchClientDataFn();
  }, [])

  return (
    <div className="app-container">
      <h2>Global Sales</h2>
      <Filter sortedClientData={sortedClientData} setMinRange={setMinRange} setCompany={setCompany} />
      <ClientSales clientFetchStatus={clientFetchStatus} minRange={minRange} sortedClientData={sortedClientData} clientData={clientData} fetchClientDataFn={fetchClientDataFn} company={company} />
      <TopSales clientData={clientData} />
    </div>
  );
}

export default App;
