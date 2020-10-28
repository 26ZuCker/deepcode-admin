import colors from 'vuetify/es5/util/colors';

import minifyCssString from 'minify-css-string';

/**
 * 导出vuetify在nuxt.config.js内的配置选项
 * 有两种配置options的方式，建议采用顶级选项即可：https://go.nuxtjs.dev/config-vuetify
 */
const options =  {
  //customVariables: ['~/assets/variables.scss'],
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
    }, 
    options: {
    //禁止自动生成的九种基本样式
    variations: false,
    customProperties: false,
    //禁止自动创建样式表
    disable: true,
    minifyCssString,
  }
  },
},;

export default options;
