export const getDeviceWidth = () => {
  if (typeof window === 'undefined') {
    return 0
  }

  return document.documentElement.clientWidth
}

export const addComma = (x: number) => {
  return x.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
