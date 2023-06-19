import { get, debounce } from "radash";
import { computed } from "vue";
import { setDoc } from "firebase/firestore";
import type {
  AnyFirestoreValue,
  FirestoreDocumentUpdate,
} from "@/types/common/firebase";
import type { DocumentReference } from "firebase/firestore";

export function updateDB({
  firestoreRef,
  data,
}: {
  firestoreRef: DocumentReference;
  data: FirestoreDocumentUpdate;
}) {
  data.updatedAt = new Date();
  console.log({ data });
  setDoc(firestoreRef, data, { merge: true });
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

  const updateDebounced = (value: AnyFirestoreValue) => {
    const data: object = { [fieldName]: value };
    debouncedUpdate({
      firestoreRef,
      data,
    });
  };

  const update = (value: AnyFirestoreValue) => {
    const data = { [fieldName]: value };
    updateDB({
      firestoreRef,
      data,
    });
  };

  return {
    value,
    update,
    updateDebounced,
  };
}
