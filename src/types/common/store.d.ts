import type { DocumentReference } from "firebase/firestore";

export interface FirestoreDocumentStore {
  firestoreRef: Ref<DocumentReference>;
  document: Ref<DocumentData | null>;
}

export interface EditableStoreState {
  form: object;
}

export interface EditableStoreActions {
  edit(): void;
}
