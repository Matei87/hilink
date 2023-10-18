import { FC } from 'react';
import { IFooterColumnProps } from '@/types';

const FooterColumn: FC<IFooterColumnProps> = ({
  title,
  children,
}: IFooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  );
};

export default FooterColumn;
