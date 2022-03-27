import type { FC } from 'react';
import { AboutMeCtn } from '@/features/resume/blocks/about-me/about-me.style';

export type AboutMeProps = {
  className?: string;
  children?: never;
};

export const AboutMe: FC<AboutMeProps> = (props) => {
  const { className } = props;

  return (
    <AboutMeCtn className={className}>
      <h1 className={'font-serif text-4xl'}>About me</h1>
      <p>
        I'm a passionate developer with more than 15 years experience in backend
        and frontend technologies. Over the years I acquired some acquaintance
        with best practices, testing, q&a, architecture,... and really like to
        think 'how do we do this ?'. "this" being not exclusively related to
        tech. I live in Brussels, and believe that not every{' '}
        <a
          title="Credits #belgiansolutions"
          href={'https://www.instagram.com/p/2ZBIQwIW19/'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          solution
        </a>{' '}
        is an answer to a problem ;)
      </p>
    </AboutMeCtn>
  );
};
