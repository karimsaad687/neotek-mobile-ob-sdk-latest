/* eslint-disable prettier/prettier */
import React from 'react';
import Header from '../baseComponents/Header/Header';
const withHeader = (Component: React.ComponentType<any>) => {
  return (props: any) => (
    <>
      <Header  title={""}/>
      <Component {...props} />
    </>
  );
};

export default withHeader;
