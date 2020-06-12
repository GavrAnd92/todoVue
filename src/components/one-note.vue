<template>
  <div>
    <p :class="[note.checked ? 'checked' : '', 'text-note']">{{note.textNote}}</p>      
  </div>
</template>

<script>
export default {
  props:['note'],
  data () {
    return {
      
    }
  },
  methods:{
   
  }
}
</script>

<style>
.text-note{
  width: 80%;
  height: 30px;
  border: teal 1px solid;
  border-radius: 6px;
  margin: 8px auto;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(22, 21, 21);
}
.checked{
  background-color: rgb(30, 161, 25);
  text-decoration:line-through;
}
</style>
