import request from '@/utils/request'

export function getList() {
  return request({
    url: '/history',
    method: 'get',
  })
}
