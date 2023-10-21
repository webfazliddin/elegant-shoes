<template>
  <div class="container">
    <div>
      <img class="mainImg" src="@/assets/aboutImg/mainImg.jpg" />
    </div>
    <!-- <div>
      <b-card
        title="Founder"
        img-src="https://picsum.photos/500/400/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 16rem;margin-left: auto;margin-right: auto;"
        class="mb-2 mt-4"
      >
        <h6>Turg'unov Abdurashid</h6>
      </b-card>
    </div>-->
    <div>
      <b-card
        no-body
        class="overflow-hidden mt-4 Bcard"
        style="max-width: 540px;margin-left: auto;margin-right: auto;"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="$t('Founder')">
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="PersonCard">
      <div>
        <b-card no-body class="overflow-hidden mt-4" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                src="https://picsum.photos/400/400/?image=20"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body :title="$t('Founder')">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <div>
        <b-card no-body class="overflow-hidden mt-4" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                src="https://picsum.photos/400/400/?image=20"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body :title="$t('Founder')">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <div style="margin-top:20px"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {}
};
</script>

<style>
.mainImg {
  margin-top: 20px;
  border-radius: 15px;
}
.PersonCard{
    display:flex;
    justify-content: space-between;
}
@media screen and (max-width: 768px) {
  .mainImg {
    width: 320px;
    height: auto;
    border-radius: 5px;
  }
  .PersonCard{
    /* width: 300px;
    height: auto; */
    display:flex;
     flex-wrap: wrap;
    justify-content: space-between;
}
}
</style>
