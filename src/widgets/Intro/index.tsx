import { Button } from '@/shared/ui/Button';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import './index.scss';

export const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__main">
          <h1 className="intro__title">
            One more friend <br /> <span>Thousands more fun!</span>
          </h1>
          <p className="intro__text">
            Having a pet means you have more joy, a new friend, a happy person who will always be
            with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          <div className="intro__buttons">
            <Button
              to="#"
              as="link"
              theme="primary"
              scale="l"
              view="outline"
              rounded="pill"
              iconAfter={<SvgIcon iconId="caret-circle-right" />}
            >
              View Intro
            </Button>
            <Button to="#" as="link" theme="primary" scale="l" view="default" rounded="pill">
              Explore Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
