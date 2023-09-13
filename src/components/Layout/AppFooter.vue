<template>
  <footer>
    <div class="container">
      <div class="content">
        <div>
          <img style="width: 100px" src="@/assets/header/TF.png" />
        </div>
        <div>
          <h6>Biz haqimizda</h6>
          <p>Chegirmalar</p>
          <p>Yangiliklar</p>
          <p>Katalog</p>
        </div>
        <div>
          <h6>Bog'lanish</h6>
          <p><a class="contact" href="tel:998900707211" style="text-decoration: none;">+998-90-070-72-11</a></p>
          <p>Andijon, Shaxrixon 96-uy</p>
          <p>info@elegant_shoes.uz</p>
          <p>Telegram_Bot</p>
        </div>
        <div>
          <h6>Bizning ishtimoiy tarmoqlar</h6>
          <b-icon style="color:#FFF" icon="telegram"> </b-icon>
          <p>Telegram</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>YouTube</p>
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
  padding: 70px 0 90px;
}
.contact{
  color: $color-grey;
}
.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-family: $base-font;
  color: $color-grey-light;
}

.content img {
  cursor: pointer;
}

.content h6 {
  margin-bottom: 12px;
  color: #FFF;
}


.content p {
  color: $color-grey;
  letter-spacing: 0.4px;
  line-height: 10px;
  // position: relative;
  // cursor: pointer;
}
.content p:hover{
  color: #FFF;
}
.content p a:hover{
  color: #FFF;
}
// .content p::before {
//   content: "";
//   background-color: #f2d500;
//   position: absolute;
//   left: 0;
//   bottom: -0.3rem;
//   height: 2px;
//   width: 0;
//   transition: 0.3s ease-in-out;
// }

// .content p:hover::before {
//   content: "";
//   background-color: #f2d500;
//   position: absolute;
//   left: 0;
//   bottom: -0.3rem;
//   height: 2px;
//   width: 100%;
// }
</style>
