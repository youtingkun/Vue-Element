import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/',
    method: 'get',
    data
  })
}
