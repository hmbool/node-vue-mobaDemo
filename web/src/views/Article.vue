<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-fanhui text-blue"></div>
      <strong class="flex-1 text-blue pl-2">
        {{model.title}}
      </strong>
      <div class="text-gray fs-xs">
        2020-02-06
      </div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center"> 
        <i class="iconfont icon"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
    </div>
    <div class="pt-2 ">
      <router-link
      class="py-1"
      tag="div"
      :to="`/articles/${item._id}`"
      v-for="item in model.related"
      :key="item._id">
      {{item.title}}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: { required: true }
  },
  watch: {
    id: 'fetch'
  },
  data () {
    return {
      model: null
    }
  },
  methods: {
    async fetch() {
      const res =  await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created () {
    this.fetch()
  }
};
</script>
<style lang="scss">
  .page-article {
    .body {
      .icon-fanhui {
        font-size: 1.6923rem;
      }
      img {
        width: 100%;
        height: auto;
      }
      iframe {
         width: 23.0769rem;
         height: 23.0769rem;
      }
    }
  }

</style>
