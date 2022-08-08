<script setup>

import { mapGetters } from 'vuex';
</script>


<template>
  <div class="about">
<table class="table table-primary">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Ad</th>
      <th scope="col">Price</th>
      <th scope="col">Id</th>
      <th scope="col">Emeliyyatlar</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product, index in gonderData" :key="product">
      <th scope="row">{{index + 1}}</th>
      <td> {{ product.ad }} </td>
      <td>{{ product.price }}</td>
      <td>{{product.key}}</td>
      <td> 
        <button class="btn btn-danger btn-sm" @click="sil(product.key)">Sil</button> 
        <button type="button" @click="update(product.key)" class="btn btn-primary btn-sm ms-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
Redakte et
</button>
        
        </td>
    </tr>
  </tbody>
</table>




<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
       <form action="">
      <div class="modal-body">
       

<input type="text" v-model="gonderUpdate.ad" placeholder="Mehsul adi"  class="form-control"/>
<br/>
<input type="number" v-model="gonderUpdate.price" placeholder="Mehsul qiymeti" class="form-control"/>
<br>



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="SaveUpDate" >Save changes</button>
      </div>
        </form>
    </div>
  </div>
</div>


  </div>
</template>



<script>
export default {
  computed : {
    ...mapGetters(['gonderData', 'gonderUpdate'])
  },


  methods: {
    sil(id){
      this.$store.dispatch('silData', id);
    },

      update(id){
      this.$store.dispatch('updateGet', id);
    },

    SaveUpDate(){
      this.$store.dispatch('updatePatch', this.gonderUpdate);
    }

  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
