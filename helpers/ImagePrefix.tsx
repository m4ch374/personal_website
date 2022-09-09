const isProd = process.env.NODE_ENV === 'production'

const ImagePrefix: Function = () => {
  return isProd ? "/personal_website" : ""
}

export default ImagePrefix
