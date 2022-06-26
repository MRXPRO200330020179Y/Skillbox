<template>
<section class="page_404">
  <div class="container">
    <div class="page_404_row">
      <div class="col-sm-12 ">
        <div class="col-sm-10 col-sm-offset-1  text-center">
          <div class="four_zero_four_bg">
            <h1 class="text-center ">404</h1>
          </div>
          <div class="contant_box_404">
            <h3 class="page_list__title__h3">
              Look like you're lost
            </h3>
            <div class="page_list__text">
                  <p>the page you are looking for not avaible!</p>
            </div>
            <div class="page_list__link">
                <router-link to="/" class="link_404">Go to Home</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>



<style>
.page_list__title__h3{
    font-size: 20px;
    color:#204B63;
    text-align: center;
    line-height: 120%;
}

.page_list__text{
    font-size: 16px;
    color:#204B63;
    text-align: center;
    line-height: 120%;
}

.page_list__link{
    display: flex;
    align-items: center;
    justify-content: center;
}

.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: 'Roboto', sans-serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(@/assets/foto/fon404.gif);
  background-repeat: no-repeat;
  background-size: contain;
  height: 500px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
  text-align: center;
  color: #204B63;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.page_list__404{
    width: 100%;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
  font-weight:bold;
  border:2px solid #39bc61;
  transition:.3s ease-in-out;
  border-radius:4px;
  text-transform:uppercase;
}
.link_404:hover {
  text-decoration:none;
  border-color:#39bc61;
  background:transparent;
  color:#39bc61 !important;
}
.contant_box_404 {
  margin-top: -50px;
}

</style>

<script>
export default {
    
}
</script>