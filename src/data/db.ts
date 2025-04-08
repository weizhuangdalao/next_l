import { JSONFilePreset } from "lowdb/node";

interface Post {
  id: string;
  title: string;
  content: string;
}

const defaultData: { posts: Array<Post> } = { posts: [] };
const db = await JSONFilePreset("db.json", defaultData);
export type { Post };
export default db;
