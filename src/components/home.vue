<template>
  <div>
    <h1>ToDo</h1>
    <hr>
      <router-link :to="{name: 'newNote',params:{note:{id: Date.now().toString(), title:'Нова примітка', task:[]}, save: save}}">
        <div class="new-note">
          Створити нову примітку
        </div>
      </router-link>
      <p v-if="!note[0]">Примітки відсутні</p>
      <div v-else class="note">
        <tag-all-note @noteDelete="noteDelete"  v-for="(note,index) in note" :key="index" :note="note" :index="index" :save="save">
        </tag-all-note>
      </div>
      
  </div>
</template>

<script>

// [{id: 1, title: "Заметка 1",task: [{id: 1, checked: false, textNote: "todo"}]}]

import AllNote from './note-home';
export default {
  data () {
    return {
      note: JSON.parse(localStorage.getItem('note')),
      i: 0
    }
  },
  components:{
    'tag-all-note': AllNote
  },
  methods:{
    noteDelete(index){
      this.note.splice(index,1);
      localStorage.setItem('note', JSON.stringify(this.note));
    },
    save(editNote, indexNote){
      if(indexNote != undefined){
      this.note[indexNote] = editNote;
      } else {
        if(!this.i){
          this.i++;
          this.note.push(editNote);
        }
      }
      localStorage.setItem('note', JSON.stringify(this.note));
    }
  }
}
</script>

<style>
a{
  text-decoration: none;
}
.new-note{
  padding: 5px;
  border: 1px solid grey;
  border-radius: 4px;
  width: 175px;
}
h1{
  margin: auto;
  text-align: center;
}
.note{
  display: flex;
  flex-wrap: wrap;
}
</style>
