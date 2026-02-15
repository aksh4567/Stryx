export async function GET(
  req: Request,
  { params }: { params: Promise<{ symbol: string }> },
) {
  try {
    // ✅ await params (required in Next.js 15+)
    const { symbol } = await params;

    const { searchParams } = new URL(req.url);
    const range = searchParams.get("range") || "1mo";

    const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=${range}&interval=1d`;

    const response = await fetch(yahooUrl);

    if (!response.ok) {
      return Response.json(
        { error: "Yahoo fetch failed" },
        { status: response.status },
      );
    }

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    console.error("Yahoo API error:", error);

    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
