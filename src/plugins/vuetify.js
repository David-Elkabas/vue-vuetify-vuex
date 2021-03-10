import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    iconfont: 'md',
    rtl: true,
    theme: {
        themes: {
            light: {
                primary: '#111111',
                secondary: '#92b4f4',
                warning: '#92b4f4',
                accent: '#DEF6CA',
                error: '#400406',
                info: '#2196F3',
                success: '#4CAF50',

            },
        },
    },
});
