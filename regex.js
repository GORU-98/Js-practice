// const regex=/wh[a-x]{3}/g
// const regex=/(where)+/g
// const regex=/where|are|.e./g
const regex=/\dwhere?/g
const text="hey Goru 8where where areare you";

console.log(text.replace(regex,"WHERE"));