import { FC, PropsWithChildren } from 'react';
import { H2, P } from '~/components/ui/typography';

interface Props extends PropsWithChildren {
  title?: string;
  description?: string;
  className?: string;
}

export const Section: FC<Props> = ({ children, description, title, className }) => {
  return (
    <div className="my-12">
      <H2 className="text-center text-primary">{title}</H2>
      <P className="text-center text-primary mb-12 mt-6">{description}</P>
      <section className={className}>{children}</section>
    </div>
  );
};
