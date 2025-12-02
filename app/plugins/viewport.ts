import { throttle } from 'throttle-debounce';

export default defineNuxtPlugin({
  name: 'viewport',
  setup(app) {
    const device = useDevice();

    const viewCookie = useCookie<{ width: number, height: number } | null>('viewport');

    const viewport = {
      mobile: {
        width: 390,
        height: 844,
      },
      tablet: {
        width: 820,
        height: 1180,
      },
      desktop: {
        width: 1366,
        height: 1024,
      },
    };

    app.hook('app:mounted', () => {
      function setSize() {
        viewCookie.value = {
          width: window.innerWidth,
          height: window.innerHeight,
        };
      }

      const setSizeFn = throttle(1000, setSize);
      setSizeFn();
      window.addEventListener('resize', setSizeFn);
    });

    const activeDevice = device.isMobile ? 'mobile' : device.isTablet ? 'tablet' : 'desktop';

    if(!viewCookie.value) {
      viewCookie.value = viewport[activeDevice];
    }

    const ssrViewport = viewCookie.value;

    const thresholds = {
      md: 700,
      lg: 1000,
      xl: 1200,
    };

    return {
      provide: {
        thresholds,
        ssrViewport,
        activeDevice,
      }
    }
  }
});
