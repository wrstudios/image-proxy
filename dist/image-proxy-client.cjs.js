'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function swapProtocol(url) {
  if (typeof url !== 'string') return url;
  return url.replace('http://', 'https://');
}

var baseImageUrl = 'https://images.cloudagentsuite.com';

function proxy(url) {
  if (typeof url !== 'string') return url;
  return "".concat(baseImageUrl, "/").concat(url.replace(/https?:\/\//, ''));
}

/**
 * Get proxied url given photo proxy strategy
 * @param {string} strategy - the name of the proxy strategy, one of [ "proxy", "swap", "none" ]
 * @param {string} url - the original url of the image
 */

function getProxiedImageUrl(_ref) {
  var strategy = _ref.strategy,
      url = _ref.url;

  switch (strategy) {
    case "proxy":
      return proxy(url);

    case "swap":
      return swapProtocol(url);

    case "none":
    default:
      return url;
  }
}

exports.getProxiedImageUrl = getProxiedImageUrl;
