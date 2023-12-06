import './cont.css';
import { ReactNode } from 'react';

interface ContainerProps {
  children?: ReactNode;
}

function Container(props: ContainerProps) {
  return <div className="container">{props.children}</div>;
}

export default Container;
