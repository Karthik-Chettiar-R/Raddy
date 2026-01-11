"use client"
import React, { useEffect, useState } from 'react'
import {Button} from '@/components/ui/button';
export default function App() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(25000);
  const [interestRate, setInterestRate] = useState<number>(12);
  const [years, setYears] = useState<number>(10);
  const [totalInvestment, setTotalInvestment] = useState<string>('0.00');
  const [totalReturn, setTotalReturn] = useState<string>('0.00');
  const [totalValue, setTotalValue] = useState<string>('0.00');

  
  const calculateSIP = (
    monthly: number,
    annualRate: number,
    yrs: number
  ) => {
    const P = monthly
    const n = yrs * 12 // months
    const r = annualRate / 100 / 12
    const investedAmount = P * n
    const futureValue = P * (((1 + r) ** n - 1) / r) * (1 + r)
    const estimatedReturn = futureValue - investedAmount

    setTotalInvestment(investedAmount.toFixed(2))
    setTotalReturn(estimatedReturn.toFixed(2))
    setTotalValue(futureValue.toFixed(2))
  }

  useEffect(() => {
    calculateSIP(monthlyInvestment, interestRate, years)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMonthlyInvestementChangeNumber = (v: number) => {
    const monthlyRange = v * 10000
    setMonthlyInvestment(monthlyRange)
    calculateSIP(monthlyRange, interestRate, years)
  }

  const handleInterestRateChangeNumber = (v: number) => {
    setInterestRate(v)
    calculateSIP(monthlyInvestment, v, years)
  }

  const handleYearChangeNumber = (v: number) => {
    const yearRange = v / 2
    setYears(yearRange)
    calculateSIP(monthlyInvestment, interestRate, yearRange)
  }

  return (
    <div>
      <a href="/calculators"><div className=" max-w-20vh pt-5 pl-5"><Button > Go back</Button></div></a>
      <div className='text-3xl font-semibold mt-10 ml-20'>
        SIP Calculator
      </div>

      <div className='flex justify-center'>
        <div className='border border-slate-400 rounded-lg mt-10 min-w-[40vw] min-h-[80vh] p-8'>

          <div>
            <div className='flex justify-between'>
              <div className='font-semibold text-md'>
                Monthly Investment
              </div>

              <div className='bg-blue-100 p-1 px-2 min-w-[80px] rounded-md font-semibold text-blue-700 flex justify-end'>
                ₹ <span className='ml-2'>{monthlyInvestment}</span>
              </div>
            </div>

            <div className='mt-4'>
              <input
                type="range"
                min={1}
                max={100}
                value={monthlyInvestment / 10000}
                onChange={(e) =>
                  handleMonthlyInvestementChangeNumber(Number(e.target.value))
                }
                className="w-full"
              />
            </div>
          </div>

          <div className='mt-20'>
            <div className='flex justify-between'>
              <div className='font-semibold text-md'>
                Expected Return Rate (per annum)
              </div>

              <div className='bg-blue-100 p-1 px-2 min-w-[80px] rounded-md font-semibold text-blue-700 flex justify-end'>
                <span className='mr-1'>{interestRate}</span> %
              </div>
            </div>

            <div className='mt-4'>
              <input
                type="range"
                min={0}
                max={30}
                value={interestRate}
                onChange={(e) => handleInterestRateChangeNumber(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div className='mt-20'>
            <div className='flex justify-between'>
              <div className='font-semibold text-md'>
                Time Period
              </div>

              <div className='bg-blue-100 p-1 px-2 min-w-[80px] rounded-md font-semibold text-blue-700 flex justify-end'>
                <span className='mr-1'>{years}</span> Yr
              </div>
            </div>

            <div className='mt-4'>
              <input
                type="range"
                min={2}
                max={40}
                value={years * 2}
                onChange={(e) => handleYearChangeNumber(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div className='mt-20'>
            <div className='flex justify-between'>
              <div className='text-md'>
                Invested Amount
              </div>

              <div className='p-1 px-2 min-w-[80px] rounded-md font-semibold flex justify-end'>
                ₹ <span className='mr-1'>{totalInvestment}</span>
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <div className='flex justify-between'>
              <div className=''>
                Est. Return
              </div>

              <div className='p-1 px-2 min-w-[80px] rounded-md font-semibold flex justify-end'>
                ₹ <span className='mr-1'>{totalReturn}</span>
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <div className='flex justify-between'>
              <div className=''>
                Total Value
              </div>

              <div className='p-1 px-2 min-w-[80px] rounded-md font-semibold flex justify-end'>
                ₹ <span className='mr-1'>{totalValue}</span>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}