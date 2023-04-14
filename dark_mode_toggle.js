javascript:(function(){
  const DARK_PERCENT = 88;
  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  window.dark_counter = window.dark_counter ?? 0;
  window.dark_counter++;
  let percent = 0;
  if (window.dark_counter % 2 !== 0) percent = DARK_PERCENT;
  let css = `html {
  -webkit-filter: invert(${percent}%);
  -moz-filter: invert(${percent}%);
  -o-filter: invert(${percent}%);
  -ms-filter: invert(${percent}%);
  }`;
  style.type = 'text/css';
  if (style.styleSheet) style.styleSheet.cssText = css;
  else style.appendChild(document.createTextNode(css));
  head.appendChild(style);
})()
