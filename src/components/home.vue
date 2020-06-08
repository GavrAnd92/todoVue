<template>
  <div>
    <h1>ToDo</h1>
    <hr>
      <router-link :to="{name: 'newNote',params:{note:{id: 4, title:'Нова примітка', task:[]}}}">
        <div class="new-note">
          Створити нову примітку
        </div>
      </router-link>
      <p>Примітки відсутні</p>
      <div class="note">
        <tag-all-note @noteDelete="noteDelete"  v-for="(note,index) in note" :key="index" :note="note" :index="index"
        :taskDelete="taskDelete" :editTask="editTask"></tag-all-note>
      </div>
      
  </div>
</template>

<script>
import AllNote from './note-home';
export default {
  data () {
    return {
      note:[
        {id:1, title:'Заметка 1', task:[{id:1, checked:false, textNote:'todo'}, {id:2, checked:false, textNote:'TODO2'}]},
        {id:2, title:'Заметка 2', task:[{id:1, checked:false, textNote:'todo'}, {id:2, checked:false, textNote:'TODO2'}, {id:3, checked:false, textNote:'TODO3'}, {id:4, checked:false, textNote:'TODO4'}, {id:5, checked:false, textNote:'TODO5'}]}
      ]
    }
  },
  components:{
    'tag-all-note': AllNote
  },
  methods:{
    noteDelete(index){
      this.note.splice(index,1);
    },
    taskDelete(indexNote, indexTask){
      this.note[indexNote].task.splice(indexTask, 1);
    },
    editTask(indexNote, indexTask, newTextNote){
      this.note[indexNote].task[indexTask].textNote = newTextNote;
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
}
</style>
