import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const Sidebar = () => {
  return (
    <div>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Sidebar" key="1">
          Sidebar Content
        </Panel>
      </Collapse>
    </div>
  );
};

export default Sidebar;
