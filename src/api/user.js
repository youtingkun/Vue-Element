import request from '@/plugin/axios'

export function getUser (data) {
  return request({
    url: '/getUser',
    method: 'get',
    data
  })
}

export function addUser (data) {
  return request({
    url: '/addUser',
    method: 'post',
    data
  })
}

export function editUser (data) {
  return request({
    url: '/editUser',
    method: 'post',
    data
  })
}

export function delUser (data) {
    return request({
      url: '/delUser',
      method: 'post',
      data
    })
  }
