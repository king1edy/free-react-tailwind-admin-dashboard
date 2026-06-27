import React from "react";
import GridShape from "../../components/common/GridShape";
import { Link } from "react-router";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid">
          <div className="relative flex items-center justify-center z-1">
            {/* <!-- ===== Common Grid Shape Start ===== --> */}
            <GridShape />
            <div className="flex flex-col items-start max-w-lg px-10">
              <Link to="/" className="block mb-8 flex items-center gap-3">
                <div className="bg-brand-500 p-2 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10V14M18 10V14M9 8V16M15 8V16M2 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-2xl font-bold text-white">GymMateHub</span>
              </Link>
              
              <h1 className="mb-4 text-5xl font-bold text-white">
                Hi, Welcome <span className="text-brand-400">back</span>
              </h1>
              <p className="mb-10 text-lg text-gray-300">
                Your comprehensive gym management platform for streamlined operations and enhanced member experiences.
              </p>

              <div className="flex flex-col gap-6 w-full">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-3 rounded-lg bg-brand-500/20 text-brand-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Member Management</h3>
                    <p className="text-sm text-gray-400">Track memberships, health metrics, and fitness goals with AI-powered recommendations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-3 rounded-lg bg-brand-500/20 text-brand-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Smart Scheduling</h3>
                    <p className="text-sm text-gray-400">Real-time class booking, waitlist management, and automated reminders</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-3 rounded-lg bg-brand-500/20 text-brand-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Business Intelligence</h3>
                    <p className="text-sm text-gray-400">Comprehensive analytics, revenue tracking, and data-driven insights</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-3 rounded-lg bg-brand-500/20 text-brand-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1"><span className="text-brand-400 text-xl font-bold">25-40%</span> increase in retention</h3>
                    <p className="text-sm text-gray-400">With GymMateHub's AI-powered engagement tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Content Form Context */}
        <div className="flex w-full items-center justify-center lg:w-1/2 bg-gray-50 dark:bg-gray-900 border-l border-gray-100 dark:border-gray-800">
          <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-2xl dark:shadow-none sm:shadow-theme-xl">
            {children}
          </div>
        </div>
        
        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}
