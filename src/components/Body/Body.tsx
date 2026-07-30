import * as React from 'react';
import './Body.scss';

export interface IBodyProps {
    children?: React.ReactNode;
}

const Body = (props: IBodyProps) => {
  return (
    <div className="body">
      {props.children}
    </div>
  );
}

export default Body