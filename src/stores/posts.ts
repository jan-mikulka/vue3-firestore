import { postConverter } from "@/converters/post";
import { db } from "@/firebase";
import { useFirestore } from "@vueuse/firebase";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { usePostStore } from "./post";

const firestoreRef = computed(() =>
  query(
    collection(db, `posts`).withConverter(postConverter),
    orderBy("createdAt", "desc"),
    limit(documentsCount.value)
  )
);

const perPage: number = 5;
const documentsCount = ref(perPage);

const posts = useFirestore(firestoreRef);
watch(posts, (newPosts) => {
  newPosts?.forEach((post) => {
    const postStore = usePostStore(post.id);
    postStore.$patch({ document: post });
  });
});

function fetchMore() {
  documentsCount.value = documentsCount.value + perPage;
}

export const usePostsStore = defineStore(`posts`, {
  state: () => ({
    posts,
    documentsCount,
    perPage,
  }),
  actions: {
    fetchMore,
  },
});
