export type UserStoreState = {
  editingStore: Store | null;
  auth: UseFirebaseAuthOptions | null;
  user: Ref<DocumentData | null>;
};
