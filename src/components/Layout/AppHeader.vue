<template>
  <header :class="scrolled ? 'scroll' : ''" class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <router-link to="/">
            <div>
              <div class="header__logo--elegant">Elegant</div>
              <div class="header__logo--shoes">shoes</div>
            </div>
          </router-link>
        </div>

        <div class="header__right">
          <div class="header__right--place">
            <div><img src="../../assets/header/place.png"></div>
            <div>Andijon</div>
          </div>

          <div class="header__right--phone">
            <div><img src="../../assets/header/call.png"></div>
            <div>+998 99 99 99 99</div>
          </div>
          <div></div>
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

 &__right{
  display: flex;
  align-items: center;
  font-family: $base-font;


  &--place {
    display: flex;
    align-items: center;
    margin-right: 30px;
    cursor: pointer;
  }
  &--phone {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  img{
    width: 20px;
    height: 20px;
  }
 }
}
.scroll {
  box-shadow: 0 0 10px rgba(168, 168, 168, 0.4);
}

// =========Mobile breakpoint==========
@media screen and (max-width: 768px) {
  .header {
    &__menu {
      position: relative;
      justify-content: end;

      &-link {
        display: none;
      }

      &-card {
        border: 2px solid $color-primary-light;

        &:hover {
          border: 2px solid $color-primary;
        }
      }
    }
  }
}
</style>
