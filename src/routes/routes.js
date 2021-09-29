import BodyHome from '../components/BodyHome'
import Buying from '../components/Buying'

const routes = [
    // dynamic segments start with a colon
    { 
        path: '/buying', 
        alias: '/quan-jean-nu-lung-cao-dinh-3-nut-co-duong-ke-ca-tinh-900-1',
        component: Buying,
        name: 'buying'
    },
    { 
        path: '/',
        component: BodyHome,
        name: 'home'
    },
]

export default routes;