"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend } from "@/components/ui/chart"
import { PieChart, Pie } from "recharts"

function formatCurrency(value: number) {
	return new Intl.NumberFormat(undefined, {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0,
	}).format(value)
}

export default function EMICalculatorPage() {
	const [principal, setPrincipal] = React.useState(500000)
	const [downPayment, setDownPayment] = React.useState(50000)
	const [annualRate, setAnnualRate] = React.useState(7.5)
	const [tenureYears, setTenureYears] = React.useState(10)

	const loanAmount = Math.max(0, principal - downPayment)
	const months = Math.max(1, Math.round(tenureYears * 12))
	const monthlyRate = annualRate / 12 / 100

	const emi = React.useMemo(() => {
		if (monthlyRate === 0) return loanAmount / months
		const r = monthlyRate
		const n = months
		const numerator = loanAmount * r * Math.pow(1 + r, n)
		const denominator = Math.pow(1 + r, n) - 1
		return denominator === 0 ? loanAmount / n : numerator / denominator
	}, [loanAmount, monthlyRate, months])

	const totalPayment = emi * months
	const totalInterest = Math.max(0, totalPayment - loanAmount)

	const pieData = [
		{ name: "Principal", value: loanAmount, fill: "var(--chart-1)" },
		{ name: "Interest", value: totalInterest, fill: "var(--chart-2)" },
	]

	return (
        
		<div className="space-y-6">
            <a href="/calculators"><div className=" max-w-20vh pt-5 pl-5" ><Button > Go back</Button></div></a>
			<Card>
				<CardHeader>
					<CardTitle>EMI Calculator</CardTitle>
					<CardDescription>Calculate monthly EMI and view principal vs interest</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-6 md:grid-cols-2">
					<div className="space-y-4">
						<div>
							<Label>Principal Amount</Label>
							<div className="flex items-center gap-3">
								<input
									type="range"
									min={10000}
									max={20000000}
									step={1000}
									value={principal}
									onChange={(e) => setPrincipal(Number(e.target.value))}
									className="w-full"
								/>
								<Input
									value={principal}
									onChange={(e) => setPrincipal(Number(e.target.value || 0))}
									className="w-40"
								/>
							</div>
						</div>

						<div>
							<Label>Down Payment</Label>
							<div className="flex items-center gap-3">
								<input
									type="range"
									min={0}
									max={principal}
									step={1000}
									value={downPayment}
									onChange={(e) => setDownPayment(Number(e.target.value))}
									className="w-full"
								/>
								<Input
									value={downPayment}
									onChange={(e) => setDownPayment(Number(e.target.value || 0))}
									className="w-40"
								/>
							</div>
						</div>

						<div>
							<Label>Annual Interest Rate (%)</Label>
							<div className="flex items-center gap-3">
								<input
									type="range"
									min={0}
									max={20}
									step={0.1}
									value={annualRate}
									onChange={(e) => setAnnualRate(Number(e.target.value))}
									className="w-full"
								/>
								<Input
									value={annualRate}
									onChange={(e) => setAnnualRate(Number(e.target.value || 0))}
									className="w-28"
								/>
							</div>
						</div>

						<div>
							<Label>Tenure (Years)</Label>
							<div className="flex items-center gap-3">
								<input
									type="range"
									min={1}
									max={30}
									step={1}
									value={tenureYears}
									onChange={(e) => setTenureYears(Number(e.target.value))}
									className="w-full"
								/>
								<Input
									value={tenureYears}
									onChange={(e) => setTenureYears(Number(e.target.value || 0))}
									className="w-28"
								/>
							</div>
						</div>
					</div>

					<div className="space-y-4">
						<div className="grid gap-2">
							<div className="flex items-center justify-between">
								<span className="text-sm text-muted-foreground">Loan Amount</span>
								<span className="font-medium">{formatCurrency(loanAmount)}</span>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm text-muted-foreground">Monthly EMI</span>
								<span className="font-medium">{formatCurrency(Math.round(emi))}</span>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm text-muted-foreground">Total Payment</span>
								<span className="font-medium">{formatCurrency(Math.round(totalPayment))}</span>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm text-muted-foreground">Total Interest</span>
								<span className="font-medium">{formatCurrency(Math.round(totalInterest))}</span>
							</div>
						</div>

						<div>
							<ChartContainer
								config={{ principal: { label: "Principal", color: "var(--chart-1)" }, interest: { label: "Interest", color: "var(--chart-2)" } }}
								className="mx-auto aspect-square max-h-[280px]"
							>
								<PieChart>
									<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
									<Pie data={pieData} dataKey="value" nameKey="name" stroke="0" />
									<ChartLegend />
								</PieChart>
							</ChartContainer>
						</div>
					</div>
				</CardContent>
				<CardFooter className="flex-col items-start gap-2">
					<div className="text-sm">EMI computed with monthly compounding.</div>
				</CardFooter>
			</Card>
		</div>
	)
}

