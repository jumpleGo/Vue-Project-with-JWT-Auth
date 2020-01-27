<template>
    <div class="add-button">
        <span class="add-button--text">Добавить посылку</span>
    </div>
</template>

<script>
export default {
    name: 'AddButton'
}
</script>

<style lang="scss" scoped>
   
    .add-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px dashed #bbbbbb;
  border-radius: 6px;
  padding: 20px;

  &:hover {
    cursor: pointer;
  }
   &--text{
    font-size: 18px;
    margin: 0;
    color: #bbbbbb;
    padding: 0;
    text-align: center;
  }
}
</style>