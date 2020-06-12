<template>
    <div class="bg">
        <div class="dialogue">
          <p>Ви впевнені що хочете {{text}}?</p>
          <div class="dialogue-button">
            <button v-if="text !='відмінити редагування не зберігшись'" @click="$emit('yes')" class="yes">Так</button>
            
              <router-link v-else :to="{name: 'home'}">
                <button @click="$emit('yes')" class="yes">
                  Так
                </button>
                </router-link>
            <button @click="$emit('no')" class="no">Ні</button>
          </div>
          
        </div>
    </div>
</template>

<script>
export default {
  props:['text'],
data () {
    return {
      
    }
  }
}
</script>

<style>
.bg{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.315);
    display: flex;
    justify-content: center;
    align-items: center;
}
.dialogue{
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
}
.dialogue-button{
  text-align: center;
}
.dialogue-button button{
  margin: 10px;
  outline: none;
}
.yes{
  background-color: rgb(48, 182, 35);
}
.no{
  background-color: rgb(185, 51, 51);
}
</style>