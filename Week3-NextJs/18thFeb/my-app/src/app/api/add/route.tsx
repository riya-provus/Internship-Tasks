import { NextResponse } from "next/server";
import { ApiResponse,Item } from "../../models/items";
import { 
  CreateItemSchema,
  UpdateItemSchema,
  DeleteItemSchema
} from "@/src/schemas/item.schema";
// Temporary in-memory data (acts like DB)

let items :Item[]= [];
let idCounter = 1;

/* ---------------- CREATE (POST) ---------------- */
export async function POST(request:Request) {
  const data= await request.json();
  console.log(data);  
  const parseResult=CreateItemSchema.safeParse(data);

  if(!parseResult.success){
    console.log("errror");
    
    return NextResponse.json(
      {success:false,message:"Invalid data"}
    )
  }

  const newItem = {
    id: idCounter++,
    name: data.name,
  };

  items.push(newItem);

  return NextResponse.json({
    success: true,
    message: "Item created",
    data: newItem,
  });
}

/* ---------------- READ (GET) ---------------- */
export async function GET() {
  return NextResponse.json({
    success: true,
    data: items,
  });
}

/* ---------------- UPDATE (PUT) ---------------- */
export async function PUT(request:Request) {
  const data = await request.json();

  const parseResult=UpdateItemSchema.safeParse(data);

  if(!parseResult.success){
    return NextResponse.json(
      {success:false,message:"Invalid data"}
    )
  }

  const { id, name } = data;

  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    return NextResponse.json(
      { success: false, message: "Item not found" },
      { status: 404 }
    );
  }

  items[index].name = name;

  return NextResponse.json({
    success: true,
    message: "Item updated",
    data: items[index],
  });
}

/* ---------------- DELETE (DELETE) ---------------- */
export async function DELETE(request:Request) {
  const data = await request.json();

  const parseResult=DeleteItemSchema.safeParse(data);

  if(!parseResult.success){
    return NextResponse.json(
      {success:false,message:"Invalid data"}
    )
  }

  const { id } = data;

  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    return NextResponse.json(
      { success: false, message: "Item not found" },
      { status: 404 }
    );
  }

  const deletedItem = items.splice(index, 1);

  return NextResponse.json({
    success: true,
    message: "Item deleted",
    data: deletedItem[0],
  });
}
