const routes = [{
    path: '/test',
    component: {
        template: '<keep-alive><router-view></router-view></keep-alive>'
    },
    meta: {
        type: 'index'
    },
    children: [

        //618活动
        {
            path: 'app618',
            component: () =>
                import (
                    /* webpackChunkName: "pages/test" */
                    '../pages/test'),
            meta: {
                // 可直接访问
                directVisit: 1,
                header: {
                    title: '汽车分会场'
                },
                beforeEnterLoading: false
            }
        },
    ]
}

]

export default routes;