import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "Top Altcoin of the Week: Expert insights on a standout altcoin.",
    "Market Trends: Real-time analyses for staying ahead.",
    "Crypto Education: Beginner-friendly guides for knowledge boost.",
    "Investor's Picks: Recommended resources for your journey.",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
