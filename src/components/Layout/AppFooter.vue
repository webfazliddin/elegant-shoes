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
          <h6>Asosiy</h6>
          <p>Bosh sahifa</p>
          <p>Chegirmalar</p>
          <p>Yangiliklar</p>
          <p>Katalog</p>
        </div>
        <div>
          <h6>Kontakt</h6>
          <p>+9989-90-7072-11</p>
          <p>info@elegant_shoes.uz</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
footer {
  background-color: $color-dark;
  padding: 40px 0 90px;
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
}

.content p {
  color: $color-grey;
  letter-spacing: 0.4px;
  line-height: 10px;
  position: relative;
  cursor: pointer;
}

.content p::before {
  content: "";
  background-color: #f2d500;
  position: absolute;
  left: 0;
  bottom: -0.3rem;
  height: 2px;
  width: 0;
  transition: 0.3s ease-in-out;
}

.content p:hover::before {
  content: "";
  background-color: #f2d500;
  position: absolute;
  left: 0;
  bottom: -0.3rem;
  height: 2px;
  width: 100%;
}
</style>
