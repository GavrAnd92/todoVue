<template>
  <div>
      <div class="title">
        <p v-if="edit">{{selectNote.title}} <i class="fas fa-edit" @click="toggleEdit"></i></p>
        <div v-else><input v-model="selectNote.title" type="text"><i class="fas fa-save" @click="toggleEdit"></i></div>
      </div>
      <hr>
      <div class="buttons">
        <button class="add" type="button"><i class="fas fa-plus"></i>Додати завдання</button>
        <button class="note-save" type="button"><i class="fas fa-save"></i>Зберегти</button>
        <button class="cancel" type="button"><i class="fas fa-ban"></i>Відмінити</button>
      </div>
      <div class="task">
        <p>Завдання відсутні</p> 
        <div class="flex">
          <tag-new-task v-for="(item, index) in selectNote.task" :key="index" :task="item" :index="index" :emitDeleteTask="emitDeleteTask" :emitEditTask="emitEditTask"></tag-new-task>
        </div>
      </div>
  </div>
</template>

<script>
import NewTask from './new-task';
export default {
  components:{
    'tag-new-task':NewTask
  },
  data () {
    return {
      edit: true,
      selectNote: this.note
    }
  },
  methods:{
    toggleEdit(){
      this.edit = !this.edit
    },
    emitDeleteTask(index){
      this.taskDelete(this.indexNote, index);
    },
    emitEditTask(index, newTask){
      this.editTask(this.indexNote, index, newTask);
    }
  },
  props:['note','taskDelete', 'indexNote', 'editTask']
}
</script>

<style>
.flex{
  display: flex;
  flex-wrap: wrap;
}
.title{
  width: 210px;
  margin: 40px auto;
}
input{
  margin: 0;
  margin-right: 5px;
  border-radius: 4px;
  padding: 3px;
}
.fas{
  cursor: pointer;
  color: blue;
  font-size: 22px;
}
.title p {
  font-size: 22px;
  font-weight: bold;
  color: darkgray;
}
.title div{
  display: flex;
  align-items: center;
}
button{
  color: azure;
  cursor: pointer;
  border-radius: 6px;
  border-color: rgba(240, 255, 255, 0.281);
}
button:focus{
  outline: none;
}
.add{
  background-color: rgb(38, 168, 38);
}
.note-save{
  background-color: rgb(58, 44, 180);
}
.cancel{
  background-color: rgb(180, 44, 44);
}
.fa-plus, .fa-ban{
  color: azure;
}
.buttons .fa-save{
  color: azure;
}
</style>
