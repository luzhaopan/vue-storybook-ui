<template>
  <div class="equipment-task">
    <Equipment />
  </div>
</template>

<script>
import Equipment from "@/components/EquipmentInfo";

export default {
  name: "EquipmentTask",
  components: {
    Equipment,
  },
};
</script>

<style lang="scss" scope>
.equipment-task {
  width: 100%;
  // height: calc(100vh - 80px);
  height: 100%;
}
</style>
