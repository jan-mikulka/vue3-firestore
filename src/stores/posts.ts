import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { doc, collection, query, orderBy, limit } from 'firebase/firestore'
import { db } from '@/firebase'
import { useFirestore } from '@vueuse/firebase'

export const usePostsStore = () => {
  const perPage: number = 6
  const postsCount = ref(perPage)

  const postsQuery = computed(() => query(collection(db, `posts`), 
    orderBy("createdAt", 'desc'), 
    limit(postsCount.value)
  ))
  
  const posts = useFirestore(postsQuery)  

  return defineStore(`posts`, {
    state: () => ({
        posts,
        postsCount,
        perPage
    }),
    getters: {},
    actions: {
      fetchMore() {
        this.postsCount = this.postsCount + this.perPage
      }
    }
  })()
}
