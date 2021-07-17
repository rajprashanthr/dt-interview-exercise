import axios from "axios";

const fetchClientData = () => axios.get(
  `/clientData`
).then(res => {
  // res.data.sort((a: any, b: any) => a.clientSales - b.clientSales);
  return res.data.map((d: any) => ({ ...d, sales: Math.round(d.sales) }));
});

export default fetchClientData;