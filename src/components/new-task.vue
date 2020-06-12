<template>
  <div class="new-task" :class="[task.checked ? 'strikebg' : '']">
      <div class="header">
        <input type="checkbox" name="" v-model="task.checked" @click="editComplite(index)">
        <p :class="[task.checked ? 'strike' : '', 'text-task']" v-if="!editTask">{{this.task.textNote}}</p><input class="task-input" v-else v-model="selectTask" type="text">
      </div>
      <div class="footer">
          <button class="save" v-if="!editTask" @click="toggleEditTask">Редагувати</button>
          <button v-else class="save" @click="selectTaslMethod()">Ок</button>
          <button class="delete" @click="emitDeleteTask(index)">Видалити</button>
      </div>

  </div>
</template>

<script>
export default {
  props:['task', 'index', 'emitDeleteTask', 'emitEditTask', 'editComplite'],
  data () {
    return {
      selectTask: '',
      editTask: false
    }
  },
  methods:{
    toggleEditTask(){
        this.editTask = !this.editTask;
        this.selectTask = this.task.textNote;
    },
    selectTaslMethod(){
      this.editTask = !this.editTask;
      this.emitEditTask(this.index, this.selectTask);
    }
  },
  components:{
    
  }
}
</script>

<style>
.text-task{
  font-weight: bold;
  width: 100%;
}
.new-task{
    padding: 10px;
    width: 220px;
    background-color: rgba(204, 63, 63, 0.644);
    box-shadow: 0px 0px 29px -2px rgba(0,0,0,0.45);
    margin: 10px;
    margin-right: 20px;
}
.header{
    display: flex;
    align-items: baseline;
}
button{
    font-size: 18px;
}
.task-input{
    margin: 13px 0;
}
.strike{
    text-decoration:line-through;
}
.strikebg{
  background-color: rgb(30, 161, 25);
}
.save{
  min-width: 110px;
  background-color: rgb(43, 59, 151);
}
.delete{
  background-color: rgb(136, 20, 20);
}
</style>
