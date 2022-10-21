import { FunctionComponent, ReactNode } from 'react';

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
}

const ExternalLink: FunctionComponent<ExternalLinkProps> = (props) => {
  const { children, href } = props;

  return (
    <a href={href} target="_blank" rel="noreferrer">{children}</a>
  );
};

export default ExternalLink;
