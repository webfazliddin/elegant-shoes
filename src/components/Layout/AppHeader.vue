<template>
  <header
    :class="scrolled ? 'scroll' : ''"
    class="header"
    style="z-index: 1000"
  >
    <div class="container">
      <div class="header__wrapper">
        <router-link style="text-decoration: none" link to="/">
          <div class="header__logo">
            <div>
              <img @click="mainPage" style="width: 40px" src="@/assets/header/TF.png" />
            </div>
            <div style="line-height: 20px">
              <div class="header__logo--elegant" @click="mainPage">Elegant</div>
              <div class="header__logo--shoes" @click="mainPage">shoes</div>
            </div>
          </div>
        </router-link>
        <div class="header__right">
          <div class="header__right--phone">
            <a
              href="tel:998900707211"
              style="text-decoration: none; color: black"
            >
              <b-icon
                href="tel:998900707211"
                style="color: #4e60ff"
                icon="telephone"
              ></b-icon>
              <span> +998-90-070-72-11</span></a
            >
          </div>

          <div class="header__right--place">
            <div></div>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/40%C2%B043'57.4%22N+72%C2%B009'42.9%22E/@40.7326151,72.1593418,17z/data=!3m1!4b1!4m4!3m3!8m2!3d40.7326111!4d72.1619167?entry=ttu"
              style="text-decoration: none; color: black"
            >
              <b-icon
                class="header__right--place-geoIcon"
                style="color: #4e60ff"
                icon="geo-alt"
              ></b-icon>
              <span> {{ $t("Manzil") }}</span></a
            >
          </div>

          <!-- <div class="header__right--lang">
            <b-icon style="color: #4e60ff" icon="globe"></b-icon>
          </div> -->

            <!-- <b-nav-item-dropdown right>
              <b-dropdown-item v-for="(item, index) in supportedLocales"
                :key="index"
                :value="item.id"
                @change="changeLocale"
                v-model="selectedLocale"
              >
                {{ item.name }}  
              </b-dropdown-item>
            </b-nav-item-dropdown> -->

          <div class="header__right--lang">
            <select
              class="Select"
              id="language-select"
              v-model="selectedLocale"
              @change="changeLocale"
            >
              <option
                v-for="(item, index) in supportedLocales"
                :key="index"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </select>
          </div>

        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { BNavbar, BNavbarNav, BNavItem, BNavItemDropdown, BDropdown, BDropdownItem, BIcon } from "bootstrap-vue";

export default {
  comments: { BNavbar, BNavbarNav, BNavItem, BNavItemDropdown, BDropdown, BDropdownItem, BIcon },
  name: "AppHeader",

  data() {
    return {
      scrolled: false,
      popUpMenu: false,
      langvalue: "",
      selectedLocale: 2,
      supportedLocales: [
        { id: 1, name: this.$t("uzCyrillic") },
        { id: 2, name: this.$t("uzLang") },
        { id: 3, name: this.$t("russianLanguage") },
      ],
    };
  },

  methods: {
      mainPage() {
      this.$router.push({name: "MainLayout"})
       .then(() => {window.location.reload();
      });
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    changeLocale() {
      if (this.selectedLocale == 1) {
        this.langvalue = "uzCyrillic";
      } else if (this.selectedLocale == 2) {
        this.langvalue = "uzLang";
      } else {
        this.langvalue = "russianLanguage";
      }
      this.$i18n.locale = this.langvalue;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.$i18n.locale = this.langvalue;
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

      & > div {
        margin-right: 6px;
      }
    }

    &--phone {
      display: flex;
      align-items: center;
      cursor: pointer;

      & > div {
        margin-right: 6px;
      }

      a {
        margin-right: 16px;
      }
    }

    &--lang {
      cursor: pointer;
    }

    &--mobileMenuIcon {
      display: none;
    }
  }
}
.scroll {
  box-shadow: 0 0 10px rgba(168, 168, 168, 0.4);
}
// .Select {
//   width: 48px;
//   height: auto;
//   cursor: pointer;
//   color: #4d5fff;
//   border-radius: 5px;
//   border: 1px solid #4d5fff;
// }

.Select {
  width: 48px;
  height: auto;
  border: 1px solid #fff;
}
.Select:hover, .Select:focus, .Select:active, .Select:enabled {
  border: 1px solid #fff;
}

.categoryCard {
  display: none;
}

// =========Mobile breakpoint==========
@media screen and (max-width: 768px) {
  .header {
    &__logo {
      &--elegant {
        display: none;
      }
      &--shoes {
        display: none;
      }
    }

    &__right {
      &--place {
        margin-right: 10px;
        & > a {
          margin-right: 2px;
          background-color: #edeef2;
          padding: 8px;
          border-radius: 10px;
        }

        span {
          display: none;
        }
      }

      &--phone {
        margin-right: 10px;
        & > a {
          margin-right: 2px;
          background: #edeef2;
          padding: 8px;
          border-radius: 8px;
        }

        span {
          display: none;
        }
      }

      &--lang {
        background: #edeef2;
        padding: 8px;
        border-radius: 8px;
        margin-right: 10px;
      }

      &--mobileMenuIcon {
        display: block;
        background: #edeef2;
        padding: 8px;
        border-radius: 8px;
      }
    }
  }

  .categoryCard {
    display: block;
  }
}
</style>
