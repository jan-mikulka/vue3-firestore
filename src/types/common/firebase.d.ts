/** value being written to the Firestore database cannnot be undefined */
export type AnyFirestoreValue = object | null;

const a: AnyFirestoreValue = 

a

export interface FirestoreDocument {
  id: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface FirestoreDocumentUpdate {
  updatedAt: Date;
  [key: string]: AnyFirestoreValue;
}
