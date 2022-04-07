<template>
    <div class="buttons-container">
      <div class="buttons-row">
        <div class="button-card">
          <span class="button-card-text">Nível</span>
        </div>
        <div class="button-card margin-left">
          <span class="button-card-text">Ranking</span>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MrButtons',
});
</script>

<style scoped>
.buttons-container {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  margin-bottom: 20px;
}
.buttons-row {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  margin: 0 30px;
}
.button-card {
  align-items: end;
  justify-content: center;
  display: flex;
  height: 20.5vh;
  background-color: var(--ion-color-primary-contrast);
  border-radius: 8px;
  width: 100%;
  margin-right: 10px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
}
.margin-left {
  margin-right: 0px;
  margin-left: 10px;
}
.button-card-text {
  font-size: 24px;
  font-weight: normal;
  color: rgb(115, 115, 115);
  padding-top: 13px;
  padding-bottom: 13px;
  line-height: 1.5;
}
</style>