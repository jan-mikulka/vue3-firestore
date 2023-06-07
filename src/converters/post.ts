import type {
  SnapshotOptions,
  DocumentData,
  WithFieldValue,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import type { PostType } from "@/types/posts";
import { updateDoc } from "@/firebase";

class Post implements PostType {
  id: string;
  title?: string | undefined;
  perex?: string | undefined;
  content?: string | undefined;
  createdAt: Date;
  updatedAt?: Date;

  constructor(post: DocumentData) {
    this.id = post.id;
    this.title = post.title;
    this.perex = post.perex;
    this.content = post.content;
    this.createdAt = post.createdAt.toDate();
    this.updatedAt = post.updatedAt?.toDate();
  }

  getEntries() {
    return Object.entries(this);
  }

  update(payload: object, collectionPath: string = "posts"): void {
    updateDoc({
      firestorePath: `${collectionPath}/${this.id}`,
      payload: Object.assign({}, payload),
    });
  }
}

export const postConverter = {
  toFirestore(post: WithFieldValue<Post>): DocumentData {
    return post;
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Post {
    const data = snapshot.data(options)!;
    return new Post(data);
  },
};
