<template>
  <header :class="scrolled ? 'scroll' : ''" class="header" style="z-index:1000">
    <div class="container">
      <div class="header__wrapper">
        <router-link style="text-decoration: none" link to="/">
          <div class="header__logo">
            <div>
              <img style="width: 40px" src="@/assets/header/TF.png" />
            </div>
            <div style="line-height: 20px;">
              <div class="header__logo--elegant">Elegant</div>
              <div class="header__logo--shoes">shoes</div>
            </div>
          </div>
        </router-link>
        <div class="header__right">
          <div class="header__right--place">
            <div><img style="margin-top:-10px" src="../../assets/header/location.png" /></div>
             <a href="https://www.google.com/maps/place/40%C2%B043'57.4%22N+72%C2%B009'42.9%22E/@40.7326151,72.1593418,17z/data=!3m1!4b1!4m4!3m3!8m2!3d40.7326111!4d72.1619167?entry=ttu" style="text-decoration: none; color: black;">Manzil</a>
          </div>

          <div class="header__right--phone">
            <div><img src="../../assets/header/contact.png" /></div>
            <a href="tel:998900707211" style="text-decoration: none; color: black;">+998-90-070-72-11</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      scrolled: false,
    };
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss">
.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  min-height: 80px;
  background-color: $color-white;
  border-bottom: 1px solid $color-primary-light;
  transition: box-shadow 0.25s ease-in-out;

  &__wrapper {
    font-family: $base-font;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 15px;
    font-family: $base-font;
    font-size: 19px;
    letter-spacing: 1.5px;

    &--elegant {
      color: $color-dark;
    }

    &--shoes {
      color: $color-primary;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    font-family: $base-font;

    &--place {
      display: flex;
      align-items: center;
      margin-right: 30px;
      cursor: pointer;

      & > div > img {
        margin-right: 6px;
      }
    }
    &--phone {
      display: flex;
      align-items: center;
      margin: -3px 0 0 5px;
      cursor: pointer;

      & > div > img {
        margin-right: 6px;
      }
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
}
.scroll {
  box-shadow: 0 0 10px rgba(168, 168, 168, 0.4);
}

// =========Mobile breakpoint==========
// @media screen and (max-width: 768px) {
//   .header {
//     &__menu {
//       position: relative;
//       justify-content: end;

//       &-link {
//         display: none;
//       }

//       &-card {
//         border: 2px solid $color-primary-light;

//         &:hover {
//           border: 2px solid $color-primary;
//         }
//       }
//     }
//   }
// }
</style>
