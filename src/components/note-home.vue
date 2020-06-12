<template>
  <div class="all-note">
    <h4 class="title-home-note">{{note.title}}</h4>
      <div class="see-note">
        <div v-if="note.task[0]">
          <tag-one-note v-for="(item, index) in note.task" :key="index" :note="item"></tag-one-note>
        </div>
        <div class="task-0" v-else>
          Завдання відсутні
        </div>
        
      </div>

      <div class="note-home-but">
        <router-link :to="{name: 'selectNote', params:{note:note, indexNote:index, save:save}}">
        <button class="save">Редагувати</button>
      </router-link>
        
        <button @click="noteDelete" class="delete">Видалити</button>
      </div>
      <tag-dialogue v-show="dialogue" @yes="$emit('noteDelete', index)" @no="noteDelete" :text="'видалити замітку'"></tag-dialogue>
  </div>
</template>

<script>
import OneNote from './one-note';
import Bg from './dialogue';
export default {
  props:['note', 'index', 'save'],
  data () {
    return {
      dialogue: false
    }
  },
  methods:{
   noteDelete(){
     this.dialogue = !this.dialogue;
   }
  },
  components:{
    'tag-one-note': OneNote,
    'tag-dialogue': Bg
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
.task-0{
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: rgba(3, 77, 77, 0.219);
  margin-top: 20px;
}
</style>
