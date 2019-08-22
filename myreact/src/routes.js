import Home from './views/Home';
import Error from './views/Error';
import Login from './views/Login';
import Register from './views/Register';
import Detail from './views/Detail';
import Classify from './views/Classify';
import ClassifyList from './views/ClassifyList';
import Ranking from './views/Ranking';
import NewBook from './views/NewBook';
import FinishBook from './views/FinishBook';
import MyCenter from './views/MyCenter';
import BookShelf from './views/BookShelf';

const routes = [
    {
        path: '/home',
        key: 'home',
        component: Home,
        exact: true
    },
    {
        path: '/classify',
        key: 'classify',
        component: Classify
    },
    {
        path: '/classifylist/:type',
        key: 'classifylist',
        component: ClassifyList
    },
    {
        path: '/ranking',
        key: 'ranking',
        component: Ranking
    },
    {
        path: '/newbook',
        key: 'newbook',
        component: NewBook
    },
    {
        path: '/finishbook',
        key: 'finishbook',
        component: FinishBook
    },

    {
        path: '/detail/:id',
        key: 'detail',
        component: Detail
    },
    {
        path: '/mycenter',
        key: 'mycenter',
        component: MyCenter
    },
    {
        path: '/bookshelf',
        key: 'bookshelf',
        component: BookShelf
    },
    {
        path: '/user/login',
        key: 'login',
        component: Login
    },
    {
        path: '/user/register',
        key: 'register',
        component: Register
    },

    {
        path: '',
        key: 'error',
        component: Error
    }

]

export default routes