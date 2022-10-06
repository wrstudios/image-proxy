const baseImageUrl = 'https://images.cloudagentsuite.com'

function proxy(url) {
  if (typeof url !== 'string') return url
  return `${baseImageUrl}/${url.replace(/https?:\/\//, '')}`
}

export default proxy
