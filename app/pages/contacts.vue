<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <div class="text-wrap">
        <div class="h-col">
          <h1 class="h1">Звоните.<br/>Пишите.<br/>Приезжайте.</h1>
        </div>
        <div class="phone-col">
          <div class="phone-wrap">
            <a class="phone-link" :href="`tel:${contacts.phone}`">
              <span class="phone-link__code">{{ phoneParts[0] }}&nbsp;{{ phoneParts[1] }}</span>&nbsp;<span class="phone-link__number">{{ phoneParts[2] }}</span>
            </a>
          </div>
          <div class="worktime">
            <div class="worktime__row">
              <div class="worktime__day">Пн-пт</div>
              <div class="worktime__period">9:00 – 21:00</div>
            </div>
            <div class="worktime__row">
              <div class="worktime__day">Сб-вс</div>
              <div class="worktime__period">10:00 – 17:00</div>
            </div>
          </div>
        </div>
        <div class="address-col">
          <p class="h1">ТРЦ «Покровский»</p>
          <p class="address-text">
            Покровское, Московская обл. ул.<br>Центральная,&nbsp;27/2<br>143582
          </p>
        </div>
      </div>
      <div class="map-wrap">
        <ContactsOfficeMap />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  useBreadcrumbsStore().setPathsNames('index', 'contacts');

  const contacts = useAppConfig().contacts;

  const phoneParts = computed(() => {
    return contacts.phone.split(' ');
  });
</script>

<style scoped lang="scss">
  .phone-link {
    font-size: 33px;
    line-height: 1;
    letter-spacing: -0.02em;

    @include lg {
      font-size: 36px;
    }

    &:hover &__number {
      opacity: 0.5;
    }

    &__code {
      opacity: 0.5;
    }
  }

  .text-wrap {
    @include row();
    @include gap(0px, 0px);
    @include gap-lg(40px, 0px);
  }

  .h-col, .address-col, .phone-col {
    @include col();
    @include size(100%);
  }

  .h-col {
    padding-bottom: 48px;
    @include size-lg(25%);

    @include lg {
      padding-bottom: 0px;
    }
  }

  .h-col, .phone-col {
    border-bottom: 1px solid var(--color-black-1-2);

    @include lg {
      border-bottom-width: 0;
    }
  }

  .address-col {
    padding-top: 22px;
    @include size-lg(35%);

    @include lg {
      padding-top: 0px;
    }
  }

  .phone-col {
    padding: 17px 0 65px;
    @include size-lg(40%);

    @include lg {
      padding: 0px;
    }
  }

  .phone-col, .address-col {
    @include lg {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }

  .phone-wrap {
    margin-bottom: 16px;

    @include lg {
      padding-bottom: 16px;
      border-bottom: 1px solid var(--color-black-1-2);
    }
  }

  .worktime {
    &__row {
      display: flex;
      gap: 12px;
      font-size: 15px;
      line-height: 1.2;
      letter-spacing: -0.01em;

      & + & {
        margin-top: 4px;
      }
    }

    &__day {
      min-width: 54px;
    }

    &__period {
      text-align: right;
      min-width: 110px;
    }
  }

  .address-text {
    margin-top: 16px;
    font-size: 15px;
    line-height: 1.4;
    letter-spacing: -0.01em;

    @include lg {
      text-align: right;
    }
  }

  .map-wrap {
    margin-top: 24px;
    height: 400px;

    @include lg {
      margin-top: 42px;
      height: 600px;
    }
  }
</style>
