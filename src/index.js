import swapProtocol from "./strategies/swapProtocol";
import proxy from "./strategies/proxy";

/**
 * Get proxied url given photo proxy strategy
 * @param {string} strategy - the name of the proxy strategy, one of [ "proxy", "swap", "none" ]
 * @param {string} url - the original url of the image
 */
export function getProxiedImageUrl({ strategy, url }) {
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
