import React from 'react'

export default function stats() {
  const data = [
    { value: "56,180", label: "In property sales" },
    { value: "99%", label: "Customer satisfaction" },
    { value: "25K+", label: "Property Transaction" },
    { value: "2,918", label: "Price Reduce" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 bg-secondary py-10  gap-4  mb-20 ">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center mb-6 sm:mb-0"
              >
                <p className="text-3xl sm:text-4xl font-kufam font-bold text-primary">
                  {item.value}
                </p>
                <p className="text-link font-sans3 text-lg sm:text-xl font-normal text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
  )
}

