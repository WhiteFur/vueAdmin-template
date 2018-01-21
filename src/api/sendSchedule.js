import request from '@/utils/request'

export function getSectionGroups() {
  return request({
    url: '/section_groups',
    method: 'get'
  })
}
