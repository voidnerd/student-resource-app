import Vue from 'vue'
import Router from 'vue-router'
import ShowUsers from '@/components/ShowUsers'
import Profile from '@/components/Profile'
import CreateUser from '@/components/CreateUser'
import UpdateUser from '@/components/UpdateUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ShowUsers
    },
    {
      path: '/create',
      name: 'Create',
      component: CreateUser

    },
    {
      path: '/user/:id',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/update/:id',
      name: 'Update',
      component: UpdateUser
    }
  ]
})
