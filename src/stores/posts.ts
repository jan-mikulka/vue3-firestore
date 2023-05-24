import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { collection, query, orderBy, limit } from 'firebase/firestore'
import { db } from '@/firebase'

export const usePostsStore = () => {
  const perPage: number = 6
  const documentsCount = ref(perPage)

  const firestoreRef = computed(() => query(collection(db, `posts`), 
    orderBy("createdAt", 'desc'), 
    limit(documentsCount.value)
  ))
  
  return defineStore(`posts`, {
    firestoreRef,
    state: () => ({
        documents: reactive({}),
        documentsCount,
        perPage
    }),
    getters: {
      /** access firestore documents as named collection in Vue components */
      posts: state => state.documents
    },
    actions: {
      fetchMore() {
        this.documentsCount = this.documentsCount + this.perPage
      }
    }
  })()
}
