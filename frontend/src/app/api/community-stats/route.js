import { NextResponse } from 'next/server'

export async function GET() {
  // In a real application, this would fetch from a database
  const stats = {
    linkedinFollowers: 14003,
    whatsappCommunity: 4642,
  }

  return NextResponse.json(stats)
} 