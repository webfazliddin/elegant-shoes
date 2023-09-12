<template>
  <footer>
    <div class="container">
      <div class="content">
        <div>
          <img style="width: 100px" src="@/assets/header/TF.png" />
        </div>
        <div>
          <h3>Biz haqimizda</h3>
          <p>Chegirmalar</p>
          <p>Yangiliklar</p>
          <p>Katalog</p>
        </div>
        <div>
          <h3>Asosiy</h3>
          <p>Bosh sahifa</p>
          <p>Chegirmalar</p>
          <p>Yangiliklar</p>
          <p>Katalog</p>
        </div>
        <div>
          <h3>Kontakt</h3>
          <p>+9989-90-7072-11</p>
          <p>info@elegant_shoes.uz</p>
        </div>
        <div></div>
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
  padding: 90px 0;
}

.content {
  display: flex;
  align-items: center;
  gap: 300px;
  font-family: $base-font;
  color: $color-grey-light;
}

.content h3 {
  margin-bottom: 20px;
}

.content img {
  cursor: pointer;
}

.content p {
  color: $color-grey;
  letter-spacing: 0.4px;
  margin-top: 8px;
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
