<script setup>

</script>

<template>
  <div>
  <form  @submit.prevent="send" action="">

<input type="text" v-model="mehsullar.ad" placeholder="Mehsul adi"  class="form-control"/>
<br/>
<input type="number" v-model="mehsullar.price"  placeholder="Mehsul qiymeti" class="form-control"/>
<br>
<button class="btn btn-success">Gonder</button>

  </form>
  </div>
</template>


<script>
export default {
  data(){
    return {
      mehsullar : {
        ad : "",
        price : null
      }
    }
  },


  methods : {
    send(){
      this.$store.dispatch('sendData', this.mehsullar);
    }
  }
}
</script>