const isProd = process.env.NODE_ENV === 'production';

import commonConfig from './configs/common.js';
import devConfig from './configs/dev.js';
import prodConfig from './configs/prod.js';

//浅拷贝即可
const config = { ...commonConfig };

if (isProd) {
  Object.assign(config, prodConfig);
} else {
  Object.assign(config, devConfig);
}

export default config;
