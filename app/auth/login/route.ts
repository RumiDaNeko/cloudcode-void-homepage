import { cookies, headers } from 'next/headers'
export const runtime = 'edge';
export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('cloudcode_user')
  const headersList = await headers()
  const host = headersList.get('host') || ''
  const protocol = headersList.get('x-forwarded-proto') || 'https'
  
  const baseUrl = `${protocol}://${host}/auth/login`

  if (token) {
    return Response.redirect('/dashboard')
  }
 const params = new URLSearchParams({
    client_id: "951862828116082698",
    redirect_uri: baseUrl,
    response_type: "code",
    scope: "identify guilds.join email"
  });
  return Response.redirect(`https://discord.com/oauth2/authorize?${params}`, 302);
}