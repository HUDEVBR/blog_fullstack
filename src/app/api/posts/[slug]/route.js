import { NextResponse } from "next/server"
import connect from '@/utils/db'
import Post from "@/models/Post"

export const GET = async (request, { params }) => { 
    const { slug } = params;

    try {
        await connect();

        const post = await Post.findById(slug);

        return new NextResponse(JSON.stringify(post), {status: 200});
    } catch (error) {
        return new NextResponse('Database Error!', {status: 500});
    }
}

export const DELETE = async (request, { params }) => { 
    const { slug } = params;

    try {
        await connect();

        await Post.findByIdAndDelete(slug);

        return new NextResponse('Post has been deleted', {status: 200});
    } catch (error) {
        return new NextResponse('Database Error!', {status: 500});
    }
}