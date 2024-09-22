import { ReactNode } from 'react';

interface WrapperContentProps {
  children: ReactNode;
}
const WrapperContent = ({ children }: WrapperContentProps) => (
  <div className="w-11/12 m-auto md:px-7.30%">{children}</div>
);

export default WrapperContent;
