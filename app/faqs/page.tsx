import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
  return (
    <div className="p-4">
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>How to invest?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            You can start investing by getting a brokerage account with a
            reputable firm. Research different investment options, set clear
            financial goals, and consider diversifying your portfolio to manage
          </p>
          <p>
            It is advisable to consult with a financial advisor to
            create a tailored investment strategy that aligns with your goals and
            risk tolerance.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What is SIP</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Sip is a systematic investment plan that allows you to invest a fixed
            amount regularly in mutual funds. It helps in rupee cost averaging and
            disciplined investing over time.
          </p>
          <p>
            It is advisable to consult with a financial advisor to
            create a tailored investment strategy that aligns with your goals and
            risk tolerance.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Hwo to make 1 cr</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            To make 1 crore, you need to start with a clear financial plan,
            consistent savings, and smart investments. Consider diversifying
            your portfolio across stocks, mutual funds, real estate, and other
            assets.
          </p>
          <p>
            It is advisable to consult with a financial advisor to
            create a tailored investment strategy that aligns with your goals and
            risk tolerance.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion></div>
  )
}
