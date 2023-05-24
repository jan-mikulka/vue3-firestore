import type { DocumentReference, CollectionReference, Query, ComputedRef } from "firebase/firestore"
import type { PiniaPluginContext } from 'pinia'
import { useFirestore } from "@vueuse/firebase"
import 'pinia'

type FirestoreRef = DocumentReference | CollectionReference | Query | ComputedRef<Query>

declare module 'pinia' {
    export interface DefineStoreOptionsBase<S, Store> {
      firestoreRef?: FirestoreRef
    }
}

function isDocument(firestoreRef: FirestoreRef): firestoreRef is DocumentReference {
    if((firestoreRef as DocumentReference).type){
      return true
    }
    return false
  }

export function sync({ store, options }: PiniaPluginContext) {
    const { firestoreRef } = options 
    if(firestoreRef) {
        if(isDocument(firestoreRef)) {
            store.$state.document = useFirestore(firestoreRef) 
        } else {
            store.$state.documents = useFirestore(firestoreRef) 
        }
    }
}
    