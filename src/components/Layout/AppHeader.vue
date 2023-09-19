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
              <img style="width: 40px" src="@/assets/header/TF.png" />
            </div>
            <div style="line-height: 20px">
              <div class="header__logo--elegant">Elegant</div>
              <div class="header__logo--shoes">shoes</div>
            </div>
          </div>
        </router-link>
        <div class="header__right">

          <div class="header__right--phone">
            <div>
              <b-icon  href="tel:998900707211" style="color: #4e60ff" icon="telephone"></b-icon>
            </div>
            <a
              href="tel:998900707211"
              style="text-decoration: none; color: black"
              >+998-90-070-72-11</a
            >
          </div>

          
          <div class="header__right--place">
            <div>
              <b-icon   target="_blank"
              href="https://www.google.com/maps/place/40%C2%B043'57.4%22N+72%C2%B009'42.9%22E/@40.7326151,72.1593418,17z/data=!3m1!4b1!4m4!3m3!8m2!3d40.7326111!4d72.1619167?entry=ttu" style="color: #4e60ff" icon="geo-alt"></b-icon>
            </div>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/40%C2%B043'57.4%22N+72%C2%B009'42.9%22E/@40.7326151,72.1593418,17z/data=!3m1!4b1!4m4!3m3!8m2!3d40.7326111!4d72.1619167?entry=ttu"
              style="text-decoration: none; color: black"
              >{{ $t("Manzil") }}</a
            >
          </div>

         
          <div class="header__right--lang">
            <b-icon style="color: #4e60ff" icon="globe"></b-icon>
          </div>
          <!-- <div class="header__right--lang">
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
          </div> -->


        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { BDropdown, BDropdownItem, BIcon } from "bootstrap-vue";

export default {
  comments: { BDropdown, BDropdownItem, BIcon },
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
      console.log(this.langvalue);
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
.Select {
  width: 48px;
  height: auto;
  cursor: pointer;
  color: #4d5fff;
  border-radius: 5px;
  border: 1px solid #4d5fff;
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
        & > div {
          margin-right: 2px;
          background-color: #edeef2;
          padding: 12px;
          border-radius: 12px;
        }

        a {
          display: none;
        }
      }

      &--phone {
        margin-right: 10px;
        & > div {
          margin-right: 2px;
          background: #edeef2;
          padding: 12px;
          border-radius: 12px;
        }
        a {
          display: none;
        }
      }

      &--lang {
        background: #edeef2;
        padding: 12px;
        border-radius: 12px;
        margin-right: 10px;
      }

      &--mobileMenuIcon {
        display: block;
        background: #edeef2;
        padding: 12px;
        border-radius: 12px;
      }
    }
  }

  .categoryCard {
    display: block;
  }
}
</style>
