import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const filePath = path.join(process.cwd(), 'data', 'waitlist.json')
    let waitlist: { email: string; joinedAt: string }[] = []

    if (fs.existsSync(filePath)) {
      waitlist = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }

    if (!waitlist.some((e) => e.email === email)) {
      waitlist.push({ email, joinedAt: new Date().toISOString() })
      fs.writeFileSync(filePath, JSON.stringify(waitlist, null, 2))
    }

    console.log(`[Waitlist] ${email} — total: ${waitlist.length}`)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
