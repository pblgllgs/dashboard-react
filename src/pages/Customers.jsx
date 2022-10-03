import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Filter,
  Page,
  Selection,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        toolbar={['Delete']}
        width="auto"
        dataSource={customersData}
        allowPaging
        allowSorting
        editSettings={{allowDeleting:true, allowEditing:true}}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject services={[Sort, Filter, Page, Edit, Selection]} />
      </GridComponent>
    </div>
  );
};

export default Customers