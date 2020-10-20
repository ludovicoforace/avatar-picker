import { Avatar } from '../interfaces'

export function getAvatar(avatar: Avatar) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(avatar)
    }, 1000)
  })
}
