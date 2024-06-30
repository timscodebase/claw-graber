import pb from "$lib/pb";

// /api/newsletter GET

export async function GET() {
  return await pb.collection("users").getFullList();
}
