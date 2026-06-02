import { SvgIcon } from '@/shared/ui/SvgIcon';
import { Toggle } from '@/shared/ui/Toggle/Toggle';
import './index.scss';

const root = 'toggles-page';

export const TogglesPage = () => {
  return (
    <main className={root}>
      <div className={`${root}__container`}>
        <div className={`${root}__column`}>
          <div className={`${root}__column-row`}>
            <Toggle
              checked
              type="checkbox"
              element="checkbox"
              theme="primary"
              scale="m"
              icon={<SvgIcon iconId="tick" />}
            />
            <Toggle
              checked
              type="checkbox"
              element="checkbox"
              theme="primary"
              scale="m"
              icon={<SvgIcon iconId="tick" />}
            />
          </div>
          <div className={`${root}__column-row`}>
            <Toggle
              type="checkbox"
              element="checkbox"
              theme="primary"
              scale="m"
              icon={<SvgIcon iconId="tick" />}
            />
            <Toggle
              type="checkbox"
              element="checkbox"
              theme="primary"
              scale="m"
              icon={<SvgIcon iconId="tick" />}
            />
          </div>
          <div className={`${root}__column-row`}>
            <Toggle
              disabled
              type="checkbox"
              element="checkbox"
              theme="primary"
              scale="m"
              icon={<SvgIcon iconId="tick" />}
            />
            <Toggle
              disabled
              type="checkbox"
              element="checkbox"
              theme="primary"
              scale="m"
              icon={<SvgIcon iconId="tick" />}
            />
          </div>
        </div>
        <div className={`${root}__column`}>
          <div className={`${root}__column-row`}>
            <Toggle
              checked
              type="radio"
              element="radio"
              theme="primary"
              scale="m"
              icon={<SvgIcon iconId="circle-filled" />}
            />
            <Toggle
              checked
              type="radio"
              element="radio"
              theme="primary"
              scale="m"
              icon={<SvgIcon iconId="circle-filled" />}
            />
          </div>
          <div className={`${root}__column-row`}>
            <Toggle
              type="radio"
              element="radio"
              theme="primary"
              scale="m"
              icon={<SvgIcon iconId="circle-filled" />}
            />
            <Toggle
              type="radio"
              element="radio"
              theme="primary"
              scale="m"
              icon={<SvgIcon iconId="circle-filled" />}
            />
          </div>
          <div className={`${root}__column-row`}>
            <Toggle
              disabled
              type="radio"
              element="radio"
              theme="primary"
              scale="m"
              icon={<SvgIcon iconId="circle-filled" />}
            />
            <Toggle
              disabled
              type="radio"
              element="radio"
              theme="primary"
              scale="m"
              icon={<SvgIcon iconId="circle-filled" />}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
