import React, { useMemo } from 'react';
import Section from './Common/Section';

const Heading = () => <h3>Top Performers ($800+ / month)</h3>;

const TopSales = ({ clientData }: { clientData: any[] }) => {

  const filteredData = useMemo(() => clientData.filter((e: any) => e.sales >= 800), [clientData]);

  const perc = (filteredData.length / clientData.length) * 100;

  const avgMonthSales = useMemo(() => {
    const total = filteredData.reduce((a, c) => a + c.sales, 0);
    return Math.round(total / filteredData.length);
  }, [filteredData]);

  return (
    <Section
      heading={Heading}
    >
      <div className="top-sales-body">
        <div className="row-space-between">
          <label>Percentage of Top Clients</label>
          <label>{`${perc} %`}</label>
        </div>
        <div className="row-space-between">
          <label>Average Monthly Sales</label>
          <label>{`$${avgMonthSales}`}</label>
        </div>
      </div>
    </Section>
  );
};

export default TopSales;