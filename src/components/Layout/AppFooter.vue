<template>
  <footer>
    <div class="container">
      <div class="content">
        <div>
          <img style="width: 100px" src="@/assets/header/TF.png" />
        </div>

        <div>
          <h6>Biz haqimizda</h6>
          <ul>
            <li><a class="socialLinkText" href="#">Chegirmalar</a></li>
            <li><a class="socialLinkText" href="#">Yangiliklar</a></li>
            <li><a class="socialLinkText" href="#">Katalog</a></li>
          </ul>
        </div>

        <div>
          <h6>Bog'lanish</h6>
          <ul>
            <li>
              <a href="#">
                <b-icon style="color: #fff" icon="telephone"> </b-icon>
                <span class="socialLinkText">+998-90-070-72-11</span>
              </a>
            </li>
            <li>
              <a href="#">
                <b-icon style="color: #fff" icon="house-door"> </b-icon>
                <span class="socialLinkText">Andijon, Shaxrixon 96-uy</span>
              </a>
            </li>
            <li>
              <a href="#">
                <b-icon style="color: #fff" icon="briefcase"> </b-icon>
                <span class="socialLinkText">info@elegant_shoes.uz</span>
              </a>
            </li>
            <li>
              <a href="#">
                <b-icon style="color: #fff" icon="telegram"> </b-icon>
                <span class="socialLinkText">Telegram_Bot</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6>Bizning ishtimoiy tarmoqlar</h6>
          <ul>
            <li>
              <a href="#">
                <b-icon style="color: #fff" icon="telegram"> </b-icon>
                <span class="socialLinkText">Telegram</span>
              </a>
            </li>
            <li>
              <a href="#">
                <b-icon style="color: #fff" icon="instagram"> </b-icon>
                <span class="socialLinkText">Instagram </span>
              </a>
            </li>

            <li>
              <a href="#">
                <b-icon style="color: #fff" icon="facebook"> </b-icon>
                <span class="socialLinkText">Facebook</span>
              </a>
            </li>

            <li>
              <a href="#">
                <b-icon style="color: #fff" icon="youtube"> </b-icon>
                <span class="socialLinkText">YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { BIcon } from "bootstrap-vue";
export default {
  comments: { BIcon },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
footer {
  background-color: $color-dark;
  padding: 70px 0 90px 0;
}
.contact {
  color: $color-grey;
}
.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-family: $base-font;
  color: $color-grey-light;
}

h6 {
  text-transform: uppercase;
  font-size: 15px;
}

ul li a {
  color: $color-grey;
  letter-spacing: 0.4px;
  line-height: 10px;
  text-decoration: none;
}

ul li a:hover .socialLinkText {
  color: #fff;
  margin-left: 10px;
}

ol,
ul {
  padding: 0;
}

li {
  margin-bottom: 6px;
}

.socialLinkText {
  margin-left: 6px;
  transition: all 0.5s;
}

.socialLinkText:hover {
  color: #fff;
  margin-left: 10px;
  transition: all 0.5s;
}
</style>
