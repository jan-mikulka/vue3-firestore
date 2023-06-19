<script setup lang="ts">
import { useField } from "@/composables/field";
import type { AnyFirestoreValue } from "@/types/common/firebase.d.ts";
import type { Store } from "pinia";
import { ref, type ComputedRef } from "vue";
import { Switch } from "@headlessui/vue";

const props = defineProps<{
  store: Store;
  fieldName: string;
}>();

// eslint-disable-next-line vue/no-setup-props-destructure
const { store, fieldName } = props;

const {
  value,
  update,
}: {
  value: ComputedRef<AnyFirestoreValue>;
  update: (value: AnyFirestoreValue) => void;
} = useField({
  store,
  fieldName,
  delay: 0,
});

const newValue = ref(value.value);

const updateValue = (newVal: any) => {
  console.log({ newVal });
  update(newVal);
};
</script>

<template>
  <Switch
    v-model:model-value="newValue"
    v-bind="$attrs"
    @update:model-value="updateValue"
    class="relative inline-flex h-6 w-11 items-center rounded-full ui-checked:bg-primary ui-not-checked:bg-grey"
  >
    <span class="sr-only">SR Help text</span>
    <span
      class="inline-block h-4 w-4 transform rounded-full bg-white transition ui-checked:translate-x-6 ui-not-checked:translate-x-1"
    ></span>
  </Switch>
</template>
