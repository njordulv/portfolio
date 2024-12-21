'use server'

import type { NextRequest } from 'next/server'

const GITHUB_API_TOKEN = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(
      'https://api.github.com/users/njordulv/repos?per_page=20',
      {
        headers: {
          Authorization: `Bearer ${GITHUB_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`)
    }

    const data = await response.json()
    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error: any) {
    console.error('Error fetching GitHub projects:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    })
  }
}
