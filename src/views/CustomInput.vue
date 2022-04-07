<template>
  <fieldset>
    <form @submit.prevent="$emit('addValueToList', msg)">
      <div class="input-group mb-3">
        <input
          type="text"
          v-model="msg"
          name=""
          class="form-control"
          placeholder="Enter Something...."
          required
        />
        <div class="btn">
          <button type="submit" name="" class="btn">
            <span class="fa fa-plus"></span>
          </button>
        </div>
      </div>
    </form>
  </fieldset>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    msg: String,
  },
  emits: ["addValueToList"],
  data() {
    return {};
  },
};
</script>

<style scoped>
button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: orange;
  color: white;
}
</style>
