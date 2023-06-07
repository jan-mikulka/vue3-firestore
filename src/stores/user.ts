import { db } from "@/firebase";
import { useFirestore, type UseFirebaseAuthOptions } from "@vueuse/firebase";
import { doc } from "firebase/firestore";
import { defineStore, type Store } from "pinia";
import { ref, type Ref } from "vue";

export const useUserStore = (auth: UseFirebaseAuthOptions | null = null) => {
  const path = `users/${auth?.user?.value?.uid}`;
  const firestoreRef = doc(db, path);
  const user = useFirestore(firestoreRef);

  return defineStore("user", {
    firestoreRef,
    state: () => ({
      auth,
      user,
      editingStore: ref(null) as Ref<Store | null>,
    }),
  })();
};
