import { DotBackground } from "~/components/backgrounds/dot-bg";
import { StickyScrollRevealDemo } from "./_components/features";


export default function HomePage() {
  return (
    <DotBackground>
      <section className="space-y-16 py-32">
        <div className="space-y-5">
          <h1 className="text-6xl font-bold">
            CashCraft
          </h1>

          <p className="w-[70vw] text-2xl">
            Empower your financial journey with CashCraft, where managing your expenses becomes a seamless and insightful experience. Our mission is to simplify your financial life, providing you with the tools you need to achieve your goals, big or small.
          </p>
        </div>


        <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            Why CashCraft?
          </h1>

          <p className="w-[50vw]">
            At CashCraft, we understand that every penny counts. Whether you're a small business owner managing expenses, or an individual striving for financial wellness, CashCraft is here for you. Our intuitive expense tracking solution is designed to:
          </p>

          <StickyScrollRevealDemo />
        </div>

      </section>
    </DotBackground>
  );
}
