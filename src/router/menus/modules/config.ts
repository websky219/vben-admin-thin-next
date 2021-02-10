import type {MenuModule} from '/@/router/types';
import {t} from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 2,
  menu: {
    path: '/config',
    name: t('routes.config.home'),
    children: [{
      name:t('routes.config.setting'),
      path: 'setting'
    },{
      name:t('routes.config.code'),
      path: 'code'
    }]
  },
};
export default menu;
