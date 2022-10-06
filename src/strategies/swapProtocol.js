function swapProtocol(url) {
  if (typeof url !== 'string') return url
  return url.replace('http://', 'https://')
}

export default swapProtocol
