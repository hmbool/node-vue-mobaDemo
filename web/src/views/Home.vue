<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide>
                <img class="w-100" src="../assets/images/31d1fcc668dcd72ac11cb08a505efb15.jpeg">
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/images/3e13861bd289704dfbcb88e9ead3bedc.jpeg">
            </swiper-slide>
                <swiper-slide>
                    <img class="w-100" src="../assets/images/4669a126b9b350d3b8660816c406e246.jpeg">
                </swiper-slide>
                <div class="swiper-pagination pagination-home text-right px-3 pb-1" 
                slot="pagination"></div>
        </swiper>
    </div>
</template>


<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".pagination-home"
        }
      }
    };
  },
  
};
</script>

<style lang="scss">
@import '../assets/scss/_variable.scss';

.pagination-home {
    .swiper-pagination-bullet {
        opacity: 1;
        border-radius: 0.1538rem;
        background: map-get($colors, 'white' );
        &.swiper-pagination-bullet-active {
            background: map-get($colors, 'info');
        }
    }
}

</style>
