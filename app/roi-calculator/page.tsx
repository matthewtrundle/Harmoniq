'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import FooterMinimal from '@/components/FooterMinimal'
import { cn } from '@/lib/utils'

interface ROIInputs {
  practiceSize: number
  monthlyPatients: number
  avgPatientValue: number
  currentNoShowRate: number
  adminHoursPerWeek: number
  avgHourlyWage: number
  currentTechSpend: number
  serviceTier: number
}

interface ROIResults {
  newPatients: number
  revenueIncrease: number
  timeSavings: number
  costSavings: number
  totalROI: number
  paybackPeriod: number
  fiveYearValue: number
}

const SERVICE_COSTS = {
  1: 30000,
  2: 50000,
  3: 65000,
  4: 100000,
  5: 125000
}

export default function ROICalculatorPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeStep, setActiveStep] = useState(1)
  const [showResults, setShowResults] = useState(false)

  const [inputs, setInputs] = useState<ROIInputs>({
    practiceSize: 5,
    monthlyPatients: 500,
    avgPatientValue: 150,
    currentNoShowRate: 15,
    adminHoursPerWeek: 40,
    avgHourlyWage: 25,
    currentTechSpend: 2000,
    serviceTier: 2
  })

  const [results, setResults] = useState<ROIResults>({
    newPatients: 0,
    revenueIncrease: 0,
    timeSavings: 0,
    costSavings: 0,
    totalROI: 0,
    paybackPeriod: 0,
    fiveYearValue: 0
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const calculateROI = () => {
    // ROI Calculations based on service tier
    const tierMultipliers = {
      1: { patients: 0.2, efficiency: 0.15, noShow: 0.3 },
      2: { patients: 0.35, efficiency: 0.25, noShow: 0.6 },
      3: { patients: 0.4, efficiency: 0.3, noShow: 0.5 },
      4: { patients: 0.45, efficiency: 0.35, noShow: 0.4 },
      5: { patients: 0.5, efficiency: 0.4, noShow: 0.7 }
    }

    const multiplier = tierMultipliers[inputs.serviceTier as keyof typeof tierMultipliers]
    const serviceCost = SERVICE_COSTS[inputs.serviceTier as keyof typeof SERVICE_COSTS]

    // Calculate new patients from improved acquisition
    const newPatientsMonthly = Math.round(inputs.monthlyPatients * multiplier.patients)
    const newPatientsAnnual = newPatientsMonthly * 12

    // Calculate revenue from new patients
    const newPatientRevenue = newPatientsAnnual * inputs.avgPatientValue

    // Calculate savings from reduced no-shows
    const reducedNoShows = (inputs.currentNoShowRate * multiplier.noShow) / 100
    const savedAppointments = inputs.monthlyPatients * 12 * reducedNoShows
    const noShowSavings = savedAppointments * inputs.avgPatientValue

    // Calculate time savings
    const weeklyTimeSaved = inputs.adminHoursPerWeek * multiplier.efficiency
    const annualTimeSaved = weeklyTimeSaved * 52
    const timeCostSavings = annualTimeSaved * inputs.avgHourlyWage

    // Total annual benefit
    const totalAnnualBenefit = newPatientRevenue + noShowSavings + timeCostSavings

    // ROI calculation
    const firstYearROI = ((totalAnnualBenefit - serviceCost) / serviceCost) * 100
    const paybackMonths = serviceCost / (totalAnnualBenefit / 12)
    const fiveYearNet = (totalAnnualBenefit * 5) - serviceCost

    setResults({
      newPatients: newPatientsAnnual,
      revenueIncrease: newPatientRevenue,
      timeSavings: annualTimeSaved,
      costSavings: timeCostSavings + noShowSavings,
      totalROI: firstYearROI,
      paybackPeriod: paybackMonths,
      fiveYearValue: fiveYearNet
    })

    setShowResults(true)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <>
      <Navigation isScrolled={isScrolled} />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ROI Calculator
              <span className="block text-3xl md:text-4xl mt-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                See Your Practice&apos;s Potential
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Calculate your expected return on investment with our healthcare technology solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={cn(
                      "flex items-center",
                      step < 3 && "flex-1"
                    )}
                  >
                    <button
                      onClick={() => setActiveStep(step)}
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all",
                        activeStep >= step
                          ? "bg-primary-600 text-white"
                          : "bg-gray-200 text-gray-500"
                      )}
                    >
                      {step}
                    </button>
                    {step < 3 && (
                      <div className={cn(
                        "flex-1 h-1 mx-4 transition-all",
                        activeStep > step ? "bg-primary-600" : "bg-gray-200"
                      )} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Practice Info</span>
                <span className="text-sm font-medium">Financial Details</span>
                <span className="text-sm font-medium">Service Selection</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {/* Step 1: Practice Information */}
              {activeStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold mb-6">Tell us about your practice</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Providers
                      </label>
                      <input
                        type="number"
                        value={inputs.practiceSize}
                        onChange={(e) => setInputs({ ...inputs, practiceSize: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Patient Volume
                      </label>
                      <input
                        type="number"
                        value={inputs.monthlyPatients}
                        onChange={(e) => setInputs({ ...inputs, monthlyPatients: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current No-Show Rate (%)
                      </label>
                      <input
                        type="number"
                        value={inputs.currentNoShowRate}
                        onChange={(e) => setInputs({ ...inputs, currentNoShowRate: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Admin Hours per Week
                      </label>
                      <input
                        type="number"
                        value={inputs.adminHoursPerWeek}
                        onChange={(e) => setInputs({ ...inputs, adminHoursPerWeek: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setActiveStep(2)}
                      className="btn-primary"
                    >
                      Next Step
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Financial Details */}
              {activeStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold mb-6">Financial Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Average Patient Value ($)
                      </label>
                      <input
                        type="number"
                        value={inputs.avgPatientValue}
                        onChange={(e) => setInputs({ ...inputs, avgPatientValue: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Average Staff Hourly Wage ($)
                      </label>
                      <input
                        type="number"
                        value={inputs.avgHourlyWage}
                        onChange={(e) => setInputs({ ...inputs, avgHourlyWage: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Monthly Technology Spend ($)
                      </label>
                      <input
                        type="number"
                        value={inputs.currentTechSpend}
                        onChange={(e) => setInputs({ ...inputs, currentTechSpend: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setActiveStep(1)}
                      className="btn-secondary"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setActiveStep(3)}
                      className="btn-primary"
                    >
                      Next Step
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Service Selection */}
              {activeStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold mb-6">Select Your Service Tier</h2>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((tier) => (
                      <label
                        key={tier}
                        className={cn(
                          "block p-4 rounded-lg border-2 cursor-pointer transition-all",
                          inputs.serviceTier === tier
                            ? "border-primary-600 bg-primary-50"
                            : "border-gray-200 hover:border-gray-300"
                        )}
                      >
                        <input
                          type="radio"
                          name="serviceTier"
                          value={tier}
                          checked={inputs.serviceTier === tier}
                          onChange={() => setInputs({ ...inputs, serviceTier: tier })}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">Tier {tier}</p>
                            <p className="text-sm text-gray-600">
                              {tier === 1 && 'Digital Foundation'}
                              {tier === 2 && 'Patient Engagement'}
                              {tier === 3 && 'Practice Intelligence'}
                              {tier === 4 && 'Multi-Location'}
                              {tier === 5 && 'Specialty Accelerator'}
                            </p>
                          </div>
                          <p className="font-bold text-primary-600">
                            {formatCurrency(SERVICE_COSTS[tier as keyof typeof SERVICE_COSTS])}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setActiveStep(2)}
                      className="btn-secondary"
                    >
                      Previous
                    </button>
                    <button
                      onClick={calculateROI}
                      className="btn-primary"
                    >
                      Calculate ROI
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results Section */}
            <AnimatePresence>
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-12"
                >
                  <h2 className="text-3xl font-bold text-center mb-8">Your ROI Analysis</h2>

                  {/* Key Metrics */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white"
                    >
                      <p className="text-sm font-medium opacity-90">First Year ROI</p>
                      <p className="text-4xl font-bold mt-2">{results.totalROI.toFixed(0)}%</p>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white"
                    >
                      <p className="text-sm font-medium opacity-90">Payback Period</p>
                      <p className="text-4xl font-bold mt-2">{results.paybackPeriod.toFixed(1)} mo</p>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white"
                    >
                      <p className="text-sm font-medium opacity-90">5-Year Value</p>
                      <p className="text-4xl font-bold mt-2">{formatCurrency(results.fiveYearValue)}</p>
                    </motion.div>
                  </div>

                  {/* Detailed Breakdown */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gray-50 rounded-2xl p-8"
                  >
                    <h3 className="text-xl font-bold mb-6">Annual Impact Breakdown</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-gray-700">New Patients Acquired</span>
                        <span className="text-xl font-bold text-green-600">+{results.newPatients}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-gray-700">Revenue from New Patients</span>
                        <span className="text-xl font-bold text-green-600">{formatCurrency(results.revenueIncrease)}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-gray-700">Operational Cost Savings</span>
                        <span className="text-xl font-bold text-green-600">{formatCurrency(results.costSavings)}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-gray-700">Admin Hours Saved</span>
                        <span className="text-xl font-bold text-blue-600">{results.timeSavings.toFixed(0)} hrs</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-center"
                  >
                    <p className="text-lg text-gray-600 mb-6">
                      Ready to achieve these results for your practice?
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Link href="/contact" className="btn-primary">
                        Get Started Today
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      <button
                        onClick={() => window.print()}
                        className="btn-secondary"
                      >
                        Download Report
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <FooterMinimal />
    </>
  )
}