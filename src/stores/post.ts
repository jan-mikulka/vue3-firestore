import { db } from "@/firebase";
import type {
  EditableStoreActions,
  EditableStoreState,
  FirestoreDocumentStore,
} from "@/types/common/store";
import form from "@/views/posts/PostForm.vue";
import { doc, type DocumentData } from "firebase/firestore";
import {
  defineStore,
  type StateTree,
  type Store,
  type _GettersTree,
} from "pinia";
import { markRaw, ref, type Ref } from "vue";
import { useUserStore } from "./user";

export interface PostStoreState
  extends FirestoreDocumentStore,
    EditableStoreState {}

interface Getters extends _GettersTree<StateTree> {
  post: () => Ref<DocumentData | null>;
}

interface Actions extends EditableStoreActions {}

export interface PostStore {
  state: PostStoreState;
  getters: Getters;
  actions: Actions;
}

export const usePostStore = (
  postId: string,
  collectionPath: string = "posts"
): Store => {
  const path: string = `${collectionPath}/${postId}`;

  return defineStore<string, PostStoreState, Getters, Actions>(path, {
    state: (): PostStoreState => ({
      firestoreRef: markRaw(doc(db, path)),
      document: ref(null),
      form: markRaw(form),
    }),
    getters: {
      post: (state: PostStoreState) => state.document,
    },
    actions: {
      edit() {
        const userStore = useUserStore();
        userStore.$patch({ editingStore: this });
      },
    },
  })();
};
