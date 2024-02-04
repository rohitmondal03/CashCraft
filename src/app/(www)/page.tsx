import { routes } from "~/lib/route-config";
import { DotBackground } from "~/components/backgrounds/dot-bg";
import { Features } from "./_components/features";
import { FunctionSection } from "./_components/functioning-section";


export default function HomePage() {
  return (
    <DotBackground>
      <section>
        <div className="space-y-5">
          <h1 className="text-6xl font-bold">
            CashCraft
          </h1>

          <p className="w-[70vw] text-2xl">
            Empower your financial journey with CashCraft, where managing your expenses becomes a seamless and insightful experience. Our mission is to simplify your financial life, providing you with the tools you need to achieve your goals, big or small.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-bold">
            Why CashCraft?
          </h1>

          <p className="w-[50vw]">
            At CashCraft, we understand that every penny counts. Whether you're a small business owner managing expenses, or an individual striving for financial wellness, CashCraft is here for you. Our intuitive expense tracking solution is designed to:
          </p>

          <Features />
        </div>


        <div>
          <h1 className="text-2xl">
            How CashCraft Works ?
          </h1>

          <p>
            Getting started with CashCraft is easy, and taking control of your finances has never been more straightforward. Here's a quick guide on how CashCraft works:
          </p>

          <FunctionSection />
        </div>
      </section>
    </DotBackground>
  );
}
