<template>
  <div class="container">
    <div>
      <img class="mainImg" src="@/assets/aboutImg/mainImg.jpg" />
    </div>
    <div>
      <b-card
        no-body
        class="overflow-hidden mt-4 Bcard"
        style="max-width: 440px; margin-left: auto; margin-right: auto"
      >
        <b-row no-gutters>
          <b-col md="6">
              <img class="founderImg" src="@/assets/aboutImg/founder.jpg" />
          </b-col>
          <b-col md="6">
            <b-card-body :title="$t('Founder')">
              <b-card-text class="fullname">
                Turg'unov Abdurashid
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="PersonCard">
      <div>
        <b-card no-body class="overflow-hidden mt-4 Bcard" style="max-width: 540px">
          <b-row no-gutters>
          <b-col md="6">
              <img class="founderImg" src="@/assets/aboutImg/founder.jpg" />
          </b-col>
          <b-col md="6">
            <b-card-body :title="$t('Buxgalter')">
              <b-card-text class="fullname">
                Turg'unov Abdurashid
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
        </b-card>
      </div>
      <div>
        <b-card no-body class="overflow-hidden mt-4 Bcard" style="max-width: 540px">
         <b-row no-gutters>
          <b-col md="6">
              <img class="founderImg" src="@/assets/aboutImg/founder.jpg" />
          </b-col>
          <b-col md="6">
            <b-card-body :title="$t('Ish boshqaruvchi')">
              <b-card-text class="fullname">
                Turg'unov Abdurashid
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
        </b-card>
      </div>
    </div>
    <div style="margin-top: 20px"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {},
};
</script>

<style>
.mainImg {
  margin-top: 20px;
  border-radius: 15px;
}
.PersonCard {
  display: flex;
  justify-content: space-between;
}
.founderImg {
 width: 200px;
 height: 200px;
}
.fullname{
  font-size: 20px;
  font-weight: 400;
}
@media screen and (max-width: 768px) {
  .mainImg {
    width: 320px;
    height: auto;
    border-radius: 5px;
  }
  .PersonCard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .Bcard{
    width: 300px;
    height: 300px;
    display: flex;
  }
  .Bcard img{
    width: 310px;
    height: 310px;
  }
}
</style>
