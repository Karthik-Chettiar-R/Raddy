"use client"
import React, { useEffect, useState } from 'react'
import {Card ,CardHeader,CardTitle,CardDescription,CardContent} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
export default function App() {
 

    return (<>
    <a href="/"><div className=" max-w-20vh pt-5 pl-5"><Button > Go back</Button></div></a>
    <div className="flex  gap-10 mt-20">
    <div className="w-[70vh]  h-[40vh]  m-auto">
      <Card>
        <CardHeader>
          <CardTitle>SIP Calculator</CardTitle>
          <CardDescription>
            A Systematic Investment Plan (SIP) calculator helps you estimate the
            future value of your investments based on your monthly contributions,
            expected rate of return, and investment duration.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <a href="/calculators/sip_calculator">
          <div className='text-center text-2xl font-semibold hover:underline cursor-pointer'>
            Click to use the SIP Calculator
            </div></a>
        </CardContent>
    </Card>
    
    
    </div>
    <div className="w-[70vh]  h-[40vh]  m-auto">
      <Card>
        <CardHeader>
          <CardTitle>EMI Calculator</CardTitle>
          <CardDescription>
            An EMI (Equated Monthly Installment) calculator helps you determine the
            monthly payment required to repay a loan over a specified tenure at a
            given interest rate.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <a href="/calculators/emi_calculator">
          <div className='text-center text-2xl font-semibold hover:underline cursor-pointer'>
            Click to use the EMI Calculator
            </div></a>
        </CardContent>
    </Card>
    
    
    </div>    </div>
  </>)

    

}