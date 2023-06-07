import { get, set, debounce, assign } from "radash";
import { computed } from "vue";
import { setDoc } from "firebase/firestore";
import type { AnyFirestoreValue } from "@/types/common/firebase";
import type { DocumentReference } from "firebase/firestore";

type UpdatePayload = {
  updatedAt: Date;
  [key: string]: object;
};

export function updateDB({
  firestoreRef,
  data,
}: {
  firestoreRef: DocumentReference;
  data: object;
}) {
  const newData = set(data, "updatedAt", new Date());
  console.log({ newData });
  setDoc(firestoreRef, newData, { merge: true });
}

type FieldType = {
  store: StoreDefinition;
  fieldName: string;
  delay: number;
};

export function useField({ store, fieldName, delay = 0 }: FieldType) {
  console.log({ store });
  const { firestoreRef } = store;
  const debouncedUpdate = debounce({ delay }, updateDB);
  const value = computed(() => get(store, `document.${fieldName}`) || ""); //?

  const updateDebounced = (value: AnyFirestoreValue) =>
    debouncedUpdate({
      firestoreRef,
      data: set({}, fieldName, value),
    });

  const update = (value: AnyFirestoreValue) =>
    updateDB({
      firestoreRef,
      data: set({}, `${fieldName}`, value),
    });

  return {
    value,
    update,
    updateDebounced,
  };
}
