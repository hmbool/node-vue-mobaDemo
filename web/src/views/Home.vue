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
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
      <!-- end of nav icons -->
    </div>
    <m-card icon="cc-menu-circle" title="新闻资讯">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">热门</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper>
          <swiper-slide v-for="m in 5" :key="m">
            <div class="py-2" v-for="n in 5" :key="n">
              <span>[新闻]</span>
              <span>|</span>
              <span>元宵福利到 峡谷好热闹！</span>
              <span>02/06</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>
    <m-list-card icon="cc-menu-circle" title="新闻资讯" :categories="newCats">
      <template #items="{category}">
        <div class="py-2" v-for="(news, i) in category.newsList" :key="i">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span>{{news.date}}</span>
        </div>
      </template>
    </m-list-card>
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
      },
      newCats: [
        {
          name: "热门",
          newsList: new Array(5).fill(1).map(() => ({
            categoryName: "公告",
            title: "元宵福利到 峡谷好热闹！",
            date: "02/06"
          }))
        },
        {
          name: "热门",
          newsList: new Array(5).fill(1).map(() => ({
            categoryName: "公告",
            title: "元宵福利到 峡谷好热闹！",
            date: "02/06"
          }))
        },
        {
          name: "热门",
          newsList: new Array(5).fill(1).map(() => ({
            categoryName: "公告",
            title: "元宵福利到 峡谷好热闹！",
            date: "02/06"
          }))
        },
        {
          name: "热门",
          newsList: new Array(5).fill(1).map(() => ({
            categoryName: "公告",
            title: "元宵福利到 峡谷好热闹！",
            date: "02/06"
          }))
        },
        {
          name: "热门",
          newsList: new Array(5).fill(1).map(() => ({
            categoryName: "公告",
            title: "元宵福利到 峡谷好热闹！",
            date: "02/06"
          }))
        },
        // {
        //   name: "热门",
        //   newList: new Array(5).fill(1).map(v => ({
        //     categoryName: "公告",
        //     title: "元宵福利到 峡谷好热闹！",
        //     date: "02/06"
        //   }))
        // }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variable.scss";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
