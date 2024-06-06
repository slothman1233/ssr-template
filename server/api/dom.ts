export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const q = getQuery(event);
  // console.log(q);
  // console.log(config.githubToken);
  //   const repo = await $fetch("https://api.github.com/repos/nuxt/nuxt", {
  //     headers: {
  //       Authorization: `token ${config.githubToken}`,
  //     },
  //   });

  return { a: 1 };
});
