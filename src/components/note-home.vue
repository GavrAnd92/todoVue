<template>
  <div class="all-note">
    <h4 class="title-home-note">{{note.title}}</h4>
      <div class="see-note">
        <tag-one-note v-for="(item, index) in note.task" :key="index" :note="item"></tag-one-note>
      </div>

      <div class="note-home-but">
        <router-link :to="{name: 'selectNote', params:{note:note, indexNote:index, taskDelete: taskDelete, editTask: editTask}}">
        <button class="save">Редагувати</button>
      </router-link>
        
        <button @click="$emit('noteDelete', index)" class="delete">Видалити</button>
      </div>
      
  </div>
</template>

<script>
import OneNote from './one-note';
export default {
  props:['note', 'index', 'taskDelete', 'editTask'],
  data () {
    return {
      
    }
  },
  methods:{
   
  },
  components:{
    'tag-one-note': OneNote
  }
}
</script>

<style>
h4{
  margin: 0;
}
.see-note{
  height: 100px;
  box-shadow: 0px 0px 29px -2px rgba(0,0,0,0.25);
  overflow-y: scroll;
  overflow: -moz-scrollbars-none;
}
.see-note::-webkit-scrollbar { width: 0; }
.all-note{
  width: 250px;
  min-height: 280px;
  margin: 20px;
  border: solid grey 1px;
  border-radius: 6px;
  box-shadow: 0px 0px 29px -2px rgba(0,0,0,0.25);
}
.title-home-note{
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  color: rgb(59, 146, 64);
  margin: 20px;
}
.save{
  background-color: rgb(43, 59, 151);
}
.delete{
  background-color: rgb(136, 20, 20);
}
button{
  color: azure;
  cursor: pointer;
  border-radius: 6px;
  border-color: rgba(240, 255, 255, 0.281);
  font-size: 18px;
}
.note-home-but{
  margin: 40px 7%;
  margin-bottom: 0;
}
</style>
