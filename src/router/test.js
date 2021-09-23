const routes = [{
    path: '/test',
    component: () => 
        import (
            /* webpackChunkName: "pages/test" */
            '../pages/test'),
        
    },]


export default routes;