export function isEmpty(str) {
  return !str || str.length === 0 || !str.trim();
}

export function isMobile() {
  return (
    window.innerWidth <= 768 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  );
}
