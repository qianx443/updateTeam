/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_key=AAJfq0VHADB6iVjoOnYIkCPJzMtMf58CpMWz-a5cpJ0Q2vXr8idIINcAZClHCkWwO0ciw6nc1BI; pt_pin=qiaxin;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJfoUVfADBLnPNyEKtBEuAxgqSHQDG-pX2FYWQy7xQ99r30OG07Gsy_Yf9HpVFCjINgIOl8k6k;pt_pin=jd_7a1a001a78f22;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_key=AAJfoUljADCGLjkOj81jJrkmtEE83cNP4r-3cmOS5-8lICj1-WclLvHPr3rAlmOQkfkFWETclGw;pt_pin=jd_5a634a62049ab;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_key=AAJfoUoPADBscVk0_G9Rjme9uolIOdjyFWHmKCjGT-jdjgiU7pGEixJ-10u13MlP44i20zVSMK4;pt_pin=jd_57ec3b52e65d4;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]

// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = process.env.JD_COOKIE.split();
  }
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
