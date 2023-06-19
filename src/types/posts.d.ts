import type { FirestoreDocument } from "./common/firebase";

export interface PostType extends FirestoreDocument {
  title?: string;
  perex?: string;
  content?: string;
  published: boolean;
}
