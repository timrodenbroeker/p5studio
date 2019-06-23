<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{label}}</label>
    </div>
    <div class="controller-controller">
      <div
        :class="['dropzone-area', dragging ? 'dragenterClass' : '']"
        drag-over="handleDragOver"
        @dragenter="dragging=true"
        @dragend="uploadFile"
        @dragleave="dragging=false"
        @drop="dragging=false"
      >{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropzone",
  props: {
    label: String,
    text: String
  },
  mounted() {},
  data() {
    return {
      image: "",
      dragging: false
    };
  },
  methods: {
    uploadFile(e) {
      e.preventDeafult();
      dragging = false;
      console.log("dddd");
    }
  }
};
</script>

<style scoped lang="scss">
.dropzone-area {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed $uiFG;

  color: $uiFG;

  &.dragenterClass {
    border: 1px solid $uiSecondary;
    color: $uiSecondary;
  }
}
</style>
