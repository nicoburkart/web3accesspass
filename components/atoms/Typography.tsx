import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};

export const Title = ({ children, className }: Props) => {
  return (
    <h1
      className={
        'text-zinc-800 text-3xl sm:text-4xl font-semibold mb-4 font-poppins' +
        ' ' +
        className
      }
    >
      {children}
    </h1>
  );
};

export const SubTitle = ({ children, className }: Props) => {
  return (
    <h2 className={'text-zinc-800 text-lg font-medium mb-3' + ' ' + className}>
      {children}
    </h2>
  );
};

export const Paragraph = ({ children, className }: Props) => {
  return (
    <h2
      className={
        'text-zinc-800 text-base font-semibold leading-relaxed' +
        ' ' +
        className
      }
    >
      {children}
    </h2>
  );
};
