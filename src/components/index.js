/**
 * 公共
 */
 const components = {
	'helloworld': () => import(/* webpackChunkName: "helloworld" */ './helloworld'),
};

Object.keys(components).forEach((name) => {
	Vue.component(name, components[name]);
});

export default components;