<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '360px', height: '250px' }"
    ></div>
  </div>
</template>
 
<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    data: function () {
      return {
        images: [
          'https://upload.wikimedia.org/wikipedia/en/3/33/L%27Arriv%C3%A9e_d%27un_train_en_gare_de_La_Ciotat.jpg',
          'https://i.ytimg.com/vi/_FrdVdKlxUk/hqdefault.jpg',
          'https://millhavenpresscom.files.wordpress.com/2018/10/ssgtr1.jpg?w=900',
          'https://i1.wp.com/moviessilently.com/wp-content/uploads/2018/05/kid-auto-races-at-venice-image-34.jpg?fit=720%2C540',
          'https://www.kozaksclassiccinema.com/wp-content/uploads/2016/11/Nosferatu-1922-Featured-Image-644x356.jpg',
          'http://www.sitemason.com/files/xcksOA/PassionOfJoanOfArcweb.jpg/main.jpg',
          'http://www.filmandtelevisionmemorabilia.com/image-cache/4/8/5/f/5/485f533bf37162ce9d109e93b331b2e56c1efe40-frankenstein-1931-boris-karloff-186757.jpeg',
          'https://imgc.allpostersimages.com/img/print/u-g-Q10TU9B0.jpg?w=550&h=550&p=0',
          'http://www.2020-movie-reviews.com/wp-content/uploads/2014/12/modern-times.jpg',
          'https://i.pinimg.com/originals/b8/b8/a6/b8b8a61665b2cf67110b86c24dfef4af.jpg',
          'https://static.cinemagia.ro/img/resize/db/movie/00/38/83/gone-with-the-wind-336937l-imagine.jpg',
          'http://thefilmspectrum.com/wp-content/uploads/2011/12/Picture-113.png',
          'http://santansun.com/wp-content/uploads/2017/01/singin-in-rain1.jpg',
          'https://cdn.britannica.com/29/175329-004-6E60D0E1.jpg',
          'https://static.rogerebert.com/uploads/blog_post/primary_image/far-flung-correspondents/a-little-black-dress-makes-the-world-go-round/primary_breakfast_at_tiffanys500pix.jpg',
          'https://www.irishtimes.com/polopoly_fs/1.3522842.1528382672!/image/image.jpg_gen/derivatives/box_620_330/image.jpg',
          'https://www.moviequotesandmore.com/wp-content/uploads/rocky-1.jpg',
          'https://d3j0sq6zklqdqq.cloudfront.net/photos/2015/06/30/53-27199-the-shining-2-1435691710.jpg',
          'https://static.toiimg.com/photo/61356642.cms',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6XYaTPf89slDI5yVcOw4m9NEwpa0rsILJIEbf7LFZwBHljCIT',
          'https://cdn-az.allevents.in/banners/082541f86e107a03fba3bc3c4ecd7031-rimg-w720-h405-gmir.jpg',
          'https://nerdist.com/wp-content/uploads/2017/12/Home-Alone.jpg',
          'https://stmed.net/sites/default/files/the-silence-of-the-lambs-wallpapers-30108-8611049.jpg',
          'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2018%2F06%2Fmcdjupa_ec032.jpg%3Fw%3D2000&w=1000&c=sc&poi=face&q=70',
          'https://top100project.files.wordpress.com/2013/03/titanic-2.jpg?w=788',
          'https://cdn3.movieweb.com/i/article/gIdrZFTvO1nsC16dRaTBMOzqaabBjj/798:50/The-Matrix-4-Reboot-Plot-Keanu-Reeves.jpg',
          'https://www.tvovermind.com/wp-content/uploads/2017/05/2003-Lord-of-the-Rings-Return-of-the-King-08.jpg',
          'https://static.toiimg.com/photo/61356642.cms',
          'https://static.businessinsider.com/image/5a12f780f914c355018b4f14.jpg',
          'http://www.asset1.net/tv/pictures/movie/300-2006/300-pod4-1.jpg',
          'https://www.syfy.com/sites/syfy/files/styles/1200x1200/public/wire/legacy/images/avatar_newposter_thumb_1.jpg?itok=NnEpJ_RV&timestamp=1497663261',
          'http://inreviewonline.com/wp-content/uploads/2015/10/Mad-Max-Fury-Road-1080x449.jpg',
          'https://boygeniusreport.files.wordpress.com/2018/04/avengers-infinity-war3.jpg?quality=98&strip=all'

        ],
        index: null
      };
    },
 
    components: {
       name: 'Home',
      'gallery': VueGallery
    },
  }
</script> 
 
<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style> 