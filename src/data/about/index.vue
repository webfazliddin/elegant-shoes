<template>
  <div class="container">
    <div>
         <img class="mainImg" src="@/assets/aboutImg/mainImg.jpg" />
    </div>
    <div style="margin-top:20px"></div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data(){

  }
};
</script>

<style>
.mainImg{
 margin-top: 20px;
 border-radius: 15px;
}
@media screen and (max-width: 768px) {
.mainImg{
 width: 320px;
 height: auto;
 border-radius: 5px;
}
}
</style>
