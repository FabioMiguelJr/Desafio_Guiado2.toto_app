<template>
  <div class="todo-list">
    <div class="todo-item" v-for="(todo, index) in todos" :key="index">
      <label class="todo-label">
        {{ todo.description }}
      </label>
      <ButtonVue
        icon="pi pi-pencil"
        class="p-button-rounded p-button-text"
        v-on:click="$emit('editTodo', index)"
      ></ButtonVue>
      <ButtonVue
        icon="pi pi-trash"
        class="p-button-rounded p-button-text"
        v-on:click="$emit('deleteTodo', index)"
      ></ButtonVue>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    todos: Array,
  },
};
</script>

<style scoped>
.todo-list {
  margin: 1rem;
}
.todo-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
}
.todo-label {
  flex-grow: 1;
}
</style>