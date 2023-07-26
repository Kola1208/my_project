import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Select, Button } from 'antd';
import { setRegion } from '../redux/actions/regionActions';

const { Option } = Select;

const Form = () => {
  const [selectedRegion, setSelectedRegion] = useState('');

  const dispatch = useDispatch();

  const handleRegionChange = (value) => {
    setSelectedRegion(value);
  };

  const handleLoadMap = () => {
    // Implement logic to load the map based on the selected region
    dispatch(setRegion(selectedRegion));
  };

  return (
    <div>
      <Select style={{ width: 200 }} value={selectedRegion} onChange={handleRegionChange}>
        <Option value="United States">United States</Option>
        <Option value="India">India</Option>
        <Option value="United Kingdom">United Kingdom</Option>
      </Select>
      <Button type="primary" onClick={handleLoadMap}>
        Load
      </Button>
    </div>
  );
};

export default Form;
