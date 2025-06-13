import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import { Car } from '@/models/Car' 
import { dbConnect } from '@/lib/mongodb' 

export async function GET(req: Request) {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const vehicle = searchParams.get('vehicle');
    const condition = searchParams.get('condition');
    const search = searchParams.get('search');

    const query: any = {};

    if (vehicle && vehicle !== 'all') {
        query['model'] = { $regex: vehicle, $options: 'i' };

    }

    if (condition && condition !== 'all') {
        query['condition'] = condition;
    }

    if (search) {
        query['$or'] = [
            { brand: { $regex: search, $options: 'i' } },
            { model: { $regex: search, $options: 'i' } }
        ];
    }

    try {
        const cars = await Car.find(query).limit(20);
        return NextResponse.json(cars);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erro ao buscar os carros' }, { status: 500 });
    }
}

export async function POST(req: Request) {

  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");


  try {
    await dbConnect(); 

    const body = await req.json();

    const requiredFields = ['hatch', 'sedan', 'suv', 'picape', 'caminhao', 'van', 'conversivel', 'esportivo', 'outro'];

    for (const field of requiredFields) {
      if (!body.bodyType[field]) {
        console.log(field)
        return NextResponse.json(
          { error: `Campo obrigatório: ${field}` },
          { status: 400 }
        );
      }
    }

    const newCar = await Car.create({
      ...body,
      userId
    });

    return NextResponse.json(newCar, { status: 201 });

  } catch (error) {
    console.error("Erro ao cadastrar carro:", error);
    return NextResponse.json({ error: 'Erro ao cadastrar carro' }, { status: 500 });
  }
}
