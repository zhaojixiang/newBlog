import request from './request'

export const getBlogList = () => {
  return request.get('http://localhost:3000/Get/blogList')
}

export const getFitnessProgram = (param) => {
  return request.post('http://localhost:3000/users/getPerson', param)
}