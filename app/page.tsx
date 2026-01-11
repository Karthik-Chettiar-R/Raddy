"use client"

import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-6 sm:p-10">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero */}
        <section className="text-center pt-8">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Disciplined Equity Investing for Long-Term Wealth Creation
          </h1>
          <p className="text-muted-foreground mt-3">
            Actively managed equity mutual funds backed by research-driven
            strategies.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild>
              <a href="/calculators">Explore Funds</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#strategy">Know Our Strategy</a>
            </Button>
          </div>
        </section>

        {/* Trust & Credibility Strip */}
        <section className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-muted p-4 rounded-md">
          <div className="text-sm font-medium">₹8,500 Cr AUM | 15+ Years Experience | 1.2M Investors</div>
          <div className="text-sm">SEBI Reg. No: ABCD1234</div>
          <div className="text-xs text-muted-foreground">Risk Disclaimer: Mutual funds are subject to market risks. Read all scheme related documents carefully.</div>
        </section>

        {/* Our Funds */}
        <section id="funds">
          <h2 className="text-xl font-semibold">Our Funds</h2>
          <p className="text-sm text-muted-foreground">Select a fund to view details.</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Large Cap Fund</CardTitle>
                <CardDescription>Objective: Long-term capital growth</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Risk: Moderate</div>
                <Button variant="ghost" asChild>
                  <a href="#">View Fund Details</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mid/Small Cap Fund</CardTitle>
                <CardDescription>Objective: High growth potential</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Risk: High</div>
                <Button variant="ghost" asChild>
                  <a href="#">View Fund Details</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Flexi / Multi Cap Fund</CardTitle>
                <CardDescription>Objective: Flexible allocation</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Risk: Moderate</div>
                <Button variant="ghost" asChild>
                  <a href="#">View Fund Details</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ELSS (Tax-saving) Fund</CardTitle>
                <CardDescription>Objective: Tax-efficient growth</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Risk: Moderate-High</div>
                <Button variant="ghost" asChild>
                  <a href="#">View Fund Details</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Strategy */}
        <section id="strategy">
          <h2 className="text-xl font-semibold">Investment Philosophy</h2>
          <p className="text-sm text-muted-foreground mt-2">How we manage money</p>
          <ul className="mt-3 list-disc list-inside space-y-1">
            <li>Long-term compounding with valuation discipline</li>
            <li>Research-driven stock selection</li>
            <li>Risk-adjusted portfolio construction</li>
            <li>Continuous risk monitoring</li>
          </ul>
          <div className="mt-3 text-sm text-muted-foreground">Research → Stock Selection → Portfolio Construction → Risk Monitoring</div>
        </section>

        {/* Performance (text only) */}
        <section>
          <h2 className="text-xl font-semibold">Performance Snapshot</h2>
   
          <div className="mt-2 text-xs text-muted-foreground">Disclaimer: Past performance is not indicative of future results. Returns are subject to market risk.</div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-xl font-semibold">Why Choose Us</h2>
          <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
            <li>Experienced fund managers with skin-in-the-game</li>
            <li>Low turnover, long-term focused portfolios</li>
            <li>Transparent reporting and regular updates</li>
            <li>Strong downside protection history</li>
          </ul>
        </section>

        {/* Fund Managers */}
        <section>
          <h2 className="text-xl font-semibold">Fund Managers</h2>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Rahul Mehra</CardTitle>
                <CardDescription>Chief Portfolio Manager — 18 years experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm">"Focus on durable business models and valuation discipline."</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sneha R.</CardTitle>
                <CardDescription>Co-Manager — 12 years experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm">"Risk management and portfolio construction drive long-term returns."</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Insights */}
        <section>
          <h2 className="text-xl font-semibold">Education & Insights</h2>
          <p className="text-sm text-muted-foreground mt-2">Market insights, guides and quarterly outlooks to help you make informed decisions.</p>
          <div className="mt-3 flex gap-3">
            <Button variant="ghost" asChild>
              <a href="#">Read Insights</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#">Learn Before You Invest</a>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="text-lg font-semibold">Ready to get started?</h3>
          <div className="mt-4 flex justify-center gap-3">
            <Button asChild>
              <a href="#">Start Investing</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:advisors@example.com">Schedule a Call</a>
            </Button>
          </div>
        </section>

        {/* Footer / Compliance */}
        <footer className="pt-6 border-t">
          <div className="text-sm text-muted-foreground space-y-2">
            <div>Risk Disclaimer: Mutual fund investments are subject to market risks. Please read the offer document carefully before investing.</div>
            <div>SEBI Registration No: ABCD1234 | Privacy Policy | Terms</div>
            <div>Contact: contact@example.com | LinkedIn</div>
          </div>
        </footer>
      </div>
    </main>
  )
}
