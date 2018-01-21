import request from '@/utils/request'

export function getSectionGroups() {
  return request({
    url: '/section_groups',
    method: 'get'
  })
}

export function setSendSchedule(groupId, message, sendTime, title) {
  return request({
    url: '/send_schedule',
    method: 'post',
    data: {
      groupId,
      message,
      sendTime,
      title
    }
  })
}
