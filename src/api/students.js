import { $get, $post } from './students'
export const studentList = () => {
  return $get({
    url: '/student/getInfo'
  })
}
export const studentAdd = ({ data }) => {
  return $post({
    url: '/student/add',
    data
  })
}