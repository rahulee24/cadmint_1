export async function GET() {
  return Response.json({
    status: 'ok',
    service: 'cadmint-api',
    timestamp: new Date().toISOString(),
  })
}
