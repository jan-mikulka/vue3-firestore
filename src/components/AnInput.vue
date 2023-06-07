<script setup lang="ts">
import { useField } from "@/composables/field";
import type { AnyFirestoreValue } from "@/types/common/firebase.d.ts";
import type { Store } from "pinia";
import { ref, type ComputedRef } from "vue";

const props = defineProps<{
  store: Store;
  fieldName: string;
  delay?: number;
}>();

// eslint-disable-next-line vue/no-setup-props-destructure
const { store, fieldName, delay } = props;

const {
  value,
  updateDebounced,
  update,
}: {
  value: ComputedRef<AnyFirestoreValue>;
  update: (value: AnyFirestoreValue) => void;
  updateDebounced: (value: AnyFirestoreValue) => void;
} = useField({
  store,
  fieldName,
  delay: 0,
});

let typing = ref(value?.value?.slice());

const updateTyping = (newValue: string) => {
  typing.value = newValue;
  if (delay) {
    updateDebounced(newValue);
  } else {
    update(newValue);
  }
};
</script>

<template>
  <input
    :model-value="typing"
    v-bind="$attrs"
    @input="(e) => updateTyping(e.currentTarget?.value)"
    @blur="(e) => update(e.target?.value)"
  />
</template>
