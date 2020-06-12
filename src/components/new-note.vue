<template>
  <div>
      <div class="title">
        <p v-if="edit">{{selectNote.title}} <i class="fas fa-edit" @click="toggleEdit"></i></p>
        <div v-else><input v-model="selectNote.title" type="text"><i class="fas fa-save" @click="toggleEdit"></i></div>
      </div>
      <hr>
      <div class="buttons">
        <button class="add" @click="addTask" type="button"><i class="fas fa-plus"></i>Додати завдання</button>
        <router-link :to="{name: 'home'}">
          <button class="note-save" @click="save(selectNote, indexNote)" type="button">
            <i class="fas fa-save"></i>
            Зберегти та вийти
        </button>
        </router-link>
        
        <button @click="toggleDialogue" class="cancel" type="button"><i class="fas fa-ban"></i>Повернутися до всіх заміток</button>
      </div>
      <div class="task">
        <p v-if="!selectNote.task[0]">Завдання відсутні</p> 
        <div v-else class="flex">
          <tag-new-task v-for="(item, index) in selectNote.task" :key="index" :task="item" :index="index" :emitDeleteTask="emitDeleteTask" :emitEditTask="emitEditTask" :editComplite="editComplite"></tag-new-task>
        </div>
      </div>
      <tag-dialogue v-show="dialogue" @yes="toggleDialogue" @no="toggleDialogue" :text="'відмінити редагування не зберігшись'"></tag-dialogue>
  </div>
</template>

<script>
import NewTask from './new-task';
import Bg from './dialogue';
export default {
  components:{
    'tag-new-task':NewTask,
    'tag-dialogue': Bg
  },
  data () {
    return {
      edit: true,
      selectNote: this.note,
      dialogue: false,
      saveNote: false
    }
  },
  methods:{
    toggleDialogue(){
      this.dialogue = !this.dialogue;
    },
    toggleEdit(){
      this.edit = !this.edit
    },
    emitDeleteTask(index){
      this.selectNote.task.splice(index, 1);
    },
    emitEditTask(index, newTask){
      this.selectNote.task[index].textNote = newTask;
    },
    editComplite(index){
      this.selectNote.task[index].checked = !this.selectNote.task[index].checked;
    },
    addTask(){
      this.selectNote.task.push({id: Date.now().toString(), checked: false, textNote: "Нове завдання"})
    }
  },
  props:['note', 'indexNote', 'save']
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
