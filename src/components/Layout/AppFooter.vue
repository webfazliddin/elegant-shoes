<template>
  <footer>
    <div class="container">
       <div class="content">
        <div>
          <img style="width:100px" src="@/assets/header/TF.png" />
      </div>
    <div>
      <h2>Biz haqimizda</h2>
      <p>Chegirmalar</p>
      <p>Yangiliklar</p>
      <p>Katalog</p>
    </div>
    <div>
      <h2>Asosiy</h2>
      <p>Bosh sahifa</p>
      <p>Chegirmalar</p>
      <p>Yangiliklar</p>
      <p>Katalog</p>
    </div>
    <div>
      <h2>Kontakt</h2>
        <p>+9989-90-7072-11</p>
        <p>info@elegant_shoes.uz</p>
    </div>
    <div>
    </div>
       </div>
    </div>
  </footer>
</template>

<script>
export default {
   
  data() {
    return {}
   },
    methods:{}
};
</script>

<style lang="scss">
  .content{
    display: flex;
    gap: 300px;
  }
  .content div{
    margin-top: 80px;
  }
  .content p{
   color: #D9D9D9;
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   letter-spacing: 0.4px;
   margin-top: 8px;
   position: relative;
  }
  .content p::before{
    content: "";
   background-color: #F2D500;
   position: absolute;
   left: 0;
   bottom: -0.3rem;
   height: 2px;
   width: 0;
   transition: 0.3s ease-in-out;
  }
  .content p:hover::before{
    content: "";
   background-color: #F2D500;
   position: absolute;
   left: 0;
   bottom: -0.3rem;
   height: 2px;
   width: 100%;
  }
  .content h2{
   font-size: 20px;
  }
  footer {
    width: 100%;
    height: 330px;
    background-color: #1f2b9c;
  }

</style>
