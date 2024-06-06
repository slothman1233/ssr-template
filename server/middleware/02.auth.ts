export default defineEventHandler((event) => {
  event.context.auth = { user: 123 };
  // console.log(10010101101,JSON.stringify(event.context));
});
