import { ComponentLoader } from 'adminjs';

const componentLoader = new ComponentLoader();

componentLoader.add = function (name, path) {
  this[name] = path;
  return this[name];
};

const Components = {
    Dashboard: componentLoader.add('Dashboard', './dashboard'),
    // other custom components
    MyInput: componentLoader.add('MyInput', './components/my-input'),
};

export const bundleFile = (key, path) => {
  loader.add(key, path, 'bundleFile'); // `bundleFile` is the name of this function
};

export { Components };
export default componentLoader;
