import React, { useState, useCallback } from 'react';
import { Calculator, Check, Sparkles } from 'lucide-react';

function App() {
  const [wordCount, setWordCount] = useState<number>(1000);
  const [docCount, setdocCount] = useState<number>(5);
  const baseRate = 0.5; // $0.5 per word in market
  const savings = 0.12; // $0.12 per word with Veraty
  const subscription = 499; // monthly subscription price

  const calculatePrice = useCallback((words: number) => {
    return (words * baseRate).toFixed(2);
  }, []);

  const calculateSavings = useCallback((words: number) => {
    return (words * savings).toFixed(2);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Starter</h2>
            <Sparkles className="w-8 h-8" />
          </div>
          <p className="mt-2 opacity-90">Best suited for businesses without in-house expertise</p>
          <div className="mt-6">
            <span className="text-4xl font-bold">A${(Number(subscription))}</span>
            <span className="text-lg ml-2">per month</span>
          </div>
        </div>
        
        <div className="p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>No Lock In (Pay as you Go)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>Discounted Cyber and Legal Advice</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>Up to 50 Team Members Included</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>Try for free</span>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Calculate how much you could save on advice
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Calculator className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                min="0"
                value={wordCount}
                onChange={(e) => setWordCount(Math.max(0, parseInt(e.target.value) || 0))}
                className="block w-full rounded-md border-0 py-3 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter average word count of each document for review"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500 sm:text-sm">words in average doc/question</span>
              </div>
            </div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Calculator className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                min="0"
                value={docCount}
                onChange={(e) => setdocCount(Math.max(0, parseInt(e.target.value) || 0))}
                className="block w-full rounded-md border-0 py-3 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter average number of documents to review each month"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500 sm:text-sm">docs / questions per month</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Est Cost without Veraty:</span>
                <span className="font-semibold">${Number(docCount)*Number(calculatePrice(wordCount))}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Est Cost with Veraty:</span>
                <span className="font-semibold text-green-600">${Number(docCount)*Number(calculateSavings(wordCount))}</span>
              </div>
              <div className="h-px bg-gray-200 my-2"></div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Savings with Veraty:</span>
                <span className="font-bold text-indigo-600">
                  ${(Number(docCount)*(-(Number(calculateSavings(wordCount)) - Number(calculatePrice(wordCount))))).toFixed(0)}
                </span>
              </div>
              
            </div>
          </div>

          <button className="mt-8 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Try for Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;