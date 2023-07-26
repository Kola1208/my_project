import React from 'react';
import { Button } from 'antd';

const Header = () => {
  return (
    <div>
      <Button type="primary">Login</Button>
      <Button type="primary">Logout</Button>
      <Button type="primary">Profile</Button>
    </div>
  );
};

export default Header;
