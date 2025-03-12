import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
export const useCountStore = defineStore("count", () => {
  const num = ref(1); //state為定義的資料
  const user = reactive({
    id: 5,
    name: "shao",
  });

  //gatter如要進行state的計算或重新組成資料不可改變資料
  const sum = computed(() => {
    return "總和" + num.value;
  });

  //改變state透過action
  //不使用x.value= 0 直接改變
  const add = () => {
    num.value += 1;
  };

  //盡量把定義的所有東西都return
  return {
    num,
    user,
    sum,
    add,
  };
});
