import { defineNuxtModule, addComponent, addImports } from '@nuxt/kit';

export default defineNuxtModule({
  setup(options, nuxt) {
    addComponent({
      name: 'Swiper',
      export: 'Swiper',
      filePath: 'swiper/vue',
    });

    addComponent({
      name: 'SwiperSlide',
      export: 'SwiperSlide',
      filePath: 'swiper/vue',
    });

    addImports([
      {
        name: 'Navigation',
        as: 'SwiperNavigation',
        from: 'swiper/modules',
      },
    ]);

    nuxt.options.css.push('swiper/css');
    nuxt.options.css.push('swiper/css/navigation');
  }
});
