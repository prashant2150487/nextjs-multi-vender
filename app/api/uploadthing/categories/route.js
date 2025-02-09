import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, description, imageUrl } = await request.json();
    const newCategory = { title, slug, description, imageUrl };
    console.log(newCategory);
    return NextResponse.json({ newCategory }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create new category",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
