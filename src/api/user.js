import request from '@/plugin/axios'

export function login (data) {
  return request({
    url: '/admin/user/login',
    method: 'post',
    data
  })
}

export function getUser (data) {
  return request({
    url: '/admin/user/getUser',
    method: 'get',
    data
  })
}

export function addUser (data) {
  return request({
    url: '/admin/user/addUser',
    method: 'post',
    data
  })
}

export function editUser (data) {
  return request({
    url: '/admin/user/editUser',
    method: 'post',
    data
  })
}

export function delUser (data) {
  return request({
    url: '/admin/user/delUser',
    method: 'post',
    data
  })
}
