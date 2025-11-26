export default defineNuxtPlugin(() => {
  const date = new Date();

  return {
    provide: {
      dates: {
        currentYear: date.getFullYear(),
      }
    }
  }
});
