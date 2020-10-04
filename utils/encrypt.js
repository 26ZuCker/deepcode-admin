import md5 from 'md5'

const encrypt = ({ account, secret, timestamp, version }) =>
  upper(md5(F(md5({ account, secret, timestamp, version }))))

const F = (str) => str.slice(0, str.length - 6)

const upper = (str) => str.toLocaleUpperCase()

export default encrypt
