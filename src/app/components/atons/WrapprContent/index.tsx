import { HTMLAttributes, ReactNode } from 'react';

interface WrapperContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const WrapperContent = ({ children, className = '', ...res }: WrapperContentProps) => (
  <div className={`w-11/12 m-auto md:px-7.30% ${className}`} {...res}>{children}</div>
);

export default WrapperContent;
