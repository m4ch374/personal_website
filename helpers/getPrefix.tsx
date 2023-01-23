const isProd = process.env.NODE_ENV === 'production'

const getPrefix: Function = () => {
  return isProd ? "/personal_website" : ""
}

export default getPrefix
