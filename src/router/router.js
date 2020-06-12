import Vue from 'vue';
import Router from 'vue-router';


import Home from '../components/home';
import NewNote from '../components/new-note';


Vue.use(Router);


const router = new Router({
    routes:[
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/createnote',
            component: NewNote,
            name: 'newNote',
            props: true
        },
        {
            path: '/selectnote',
            component: NewNote,
            name: 'selectNote',
            props: true
        }
    ]
});


export default router;