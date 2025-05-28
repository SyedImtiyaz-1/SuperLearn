import { NextResponse } from 'next/server'

export async function GET() {
  // In a real application, this would fetch from a database
  const stats = {
    linkedinFollowers: 1000,
    whatsappCommunity: 500,
  }

  return NextResponse.json(stats)
} 