<template>
    <div class="container">
      <div class="row">
        <div class="card">
            <slot></slot>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MrCard',
});
</script>

<style scoped>
.container {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
}
.row {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  margin: 0 var(--mr-side-margin);
}
.card {
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: var(--ion-color-primary-contrast);
  border-radius: 8px;
  width: 100%;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
}
</style>