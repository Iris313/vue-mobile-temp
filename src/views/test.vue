<template>
  <div>
    <input
      placeholder="输入"
      type="text"
      v-model="iptValue"
      @keyup.enter="saveAs"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const iptValue = ref("");
    function saveAs() {
      const element = document.createElementNS(
          "http://www.w3.org/1999/xhtml",
          "a"
        ),
        ev = document.createEvent("MouseEvents"),
        urlObject = window.URL || window.webkitURL || window,
        export_blob = new Blob([iptValue.value]);
      element.href = urlObject.createObjectURL(export_blob);
      element.download = "test";
      ev.initMouseEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      element.dispatchEvent(ev);
      urlObject.revokeObjectURL(element.href);
      element.href = "";
    }
    return { iptValue, saveAs };
  },
};
</script>
