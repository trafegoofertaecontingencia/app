import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import { Car } from '@/models/Car'  // ajuste o caminho conforme seu projeto
import dbConnect from '@/lib/mongodb' // função de conexão com o banco

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
  try {
    await dbConnect();  // Certifique-se que sua função conecta ao MongoDB

    const body = await req.json();

    const requiredFields = [
      'brand', 'model', 'yearFabrication', 'yearModel', 
      'mileage', 'color', 'transmission', 'fuel', 'price',
      'location', 'seller'
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Campo obrigatório: ${field}` },
          { status: 400 }
        );
      }
    }

    const newCar = await Car.create(body);

    return NextResponse.json(newCar, { status: 201 });

  } catch (error) {
    console.error("Erro ao cadastrar carro:", error);
    return NextResponse.json({ error: 'Erro ao cadastrar carro' }, { status: 500 });
  }
}
