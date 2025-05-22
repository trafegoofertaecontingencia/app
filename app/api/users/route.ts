import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { User } from '@/models/User';

export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();

    const user = await User.create(body);

    return NextResponse.json(user, { status: 201 });
  } catch (err: any) {
    console.error('ERRO AO CRIAR USUÁRIO:', err);
    return NextResponse.json({ error: 'Erro ao criar usuário', details: err.message }, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();

  try {
    const users = await User.find({});
    return NextResponse.json(users, { status: 200 });
  } catch (err: any) {
    console.error('ERRO AO BUSCAR USUÁRIOS:', err);
    return NextResponse.json({ error: 'Erro ao buscar usuários', details: err.message }, { status: 500 });
  }
}
