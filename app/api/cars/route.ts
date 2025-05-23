import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Car } from '@/models/Car';

// POST /api/cars
export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();
    const car = await Car.create(body);

    return NextResponse.json({ message: 'Carro cadastrado!', car }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro ao cadastrar carro' }, { status: 500 });
  }
}

// GET /api/cars
export async function GET() {
  await dbConnect();

  try {
    const cars = await Car.find({});
    return NextResponse.json(cars, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro ao listar carros' }, { status: 500 });
  }
}
