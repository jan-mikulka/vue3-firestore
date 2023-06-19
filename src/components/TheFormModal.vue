<script setup lang="ts">
/**
 * This is a common component for diplaying Edit Form or deleting  the database item from anywhere in the app. The contents of the Form are attached to the Pinia store
 */
import { useUserStore } from "@/stores/user";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";

import TheConfirmRemoveDialog from "./TheConfirmRemoveDialog.vue";

const userStore = useUserStore();
const { editingStore } = storeToRefs(userStore);

const id = computed(() => editingStore?.value?.$id.split("/")[1]) || null;
const hasStoreToEdit = computed(() =>
  Boolean(editingStore && editingStore.value)
);

const showingRemoveDialog = ref(false);
const showRemoveDialog = () => (showingRemoveDialog.value = true);
const closeRemoveDialog = () => (showingRemoveDialog.value = false);

const closeDialog = () =>
  userStore.$patch({
    editingStore: null,
  });

const remove = () => {
  // TODO delete item from database and close dialog
  // editingStore.value.remove();
  closeRemoveDialog();
  closeDialog();
};
</script>

<template>
  <Dialog
    as="div"
    :open="hasStoreToEdit"
    @close="closeDialog"
    class="relative z-10 w-full"
  >
    <DialogPanel
      :open="true"
      class="fixed inset-0 min-h-full w-full transform items-center justify-center overflow-hidden overflow-y-auto rounded-2xl bg-white p-4 align-middle shadow-xl transition-all"
    >
      <DialogTitle as="h3" class="text-gray-900 text-lg font-medium leading-6">
        Edit item
      </DialogTitle>

      <template v-if="id">
        <component :is="editingStore?.form" :id="id" />

        <div>
          <button class="btn bg-red text-white" @click="showRemoveDialog">
            {{ "common.delete" }}
          </button>
          <button class="btn btn-secondary" @click="closeDialog">
            {{ "common.close" }}
          </button>
        </div>
      </template>
      <template v-else>
        The document store does not have an ID and cannot be edited
      </template>
    </DialogPanel>

    <TheConfirmRemoveDialog
      :isOpen="showingRemoveDialog"
      @cancel="closeRemoveDialog"
      @confirm="remove"
    />
  </Dialog>
</template>
