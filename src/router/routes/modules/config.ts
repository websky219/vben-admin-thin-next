import type {AppRouteModule} from '/@/router/types';

import {LAYOUT} from '/@/router/constant';
import {t} from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/config',
  name: 'Config',
  component: LAYOUT,
  redirect: '/config/setting',
  meta: {
    icon: 'bx:bx-home',
    title: t('routes.config.home'),
  },
  children: [
    {
      path: 'setting',
      name: 'setting',
      component: () => import('/@/views/config/setting/index.vue'),
      meta: {
        title: t('routes.config.setting'),
        affix: true,
        icon: 'bx:bx-home',
      },
    },
    {
      path: 'code',
      name: 'code',
      component: () => import('/@/views/config/code/index.vue'),
      meta: {
        title: t('routes.config.code'),
        affix: true,
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
