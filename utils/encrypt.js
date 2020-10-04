import md5 from 'md5'

//加密用户所有信息以获取token
const encrypt = ({ account, secret, timestamp, version }) =>
  upper(md5(F(md5({ account, secret, timestamp, version }))))

const F = (str) => str.slice(0, str.length - 6)

const upper = (str) => str.toLocaleUpperCase()

//两层加密用户直接输入的密码避免明文传输
const md5Password = (password) => md5(md5(password))

export default encrypt

export { md5Password }
