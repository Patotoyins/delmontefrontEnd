"use client";

import { useState } from 'react';

export default function Stepper() {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        { id: 1, name: "Personal Information" },
        { id: 2, name: "Step 2" },
        { id: 3, name: "Step 3" },
       
    ];

    const nextStep = () => {
        setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev));
    };

    const prevStep = () => {
        setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const apply = () => {
        alert('Applied!'); // Add your apply logic here
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <div className="flex items-center justify-between mb-8">
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`flex-1 text-center relative ${step.id <= currentStep ? "text-white" : "text-gray-500"
                            }`}
                    >
                        <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 mb-2 rounded-full border-2 flex items-center justify-center ${step.id <= currentStep ? "border-blue-500 bg-blue-500" : "border-gray-500 bg-gray-800"}`}>
                                <span>{step.id}</span>
                            </div>
                            <span>{step.name}</span>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`absolute top-4 w-full h-0.5 ${step.id < currentStep ? "bg-blue-500" : "bg-gray-500"}`} style={{ left: '10%', transform: 'translateX(50%)' }}></div>
                        )}
                    </div>
                ))}
            </div>

            <div className="bg-gray-800 text-white p-8 rounded-lg text-center">
                <p>{`Step ${currentStep}`}</p>
                {currentStep === 1 && (
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label>Last name </label>
                            <input type="text" placeholder="Input Last Name" className="w-full p-2 rounded" />
                        </div>
                        <div>
                            <label>First name </label>
                            <input type="text" placeholder="Input First Name" className="w-full p-2 rounded" />
                        </div>
                        <div>
                            <label>Middle name </label>
                            <input type="text" placeholder="Input Middle Name" className="w-full p-2 rounded" />
                        </div>
                        <div>
                            <label>Contact number </label>
                            <input type="text" placeholder="Input Contact Number" className="w-full p-2 rounded" />
                        </div>
                        <div>
                            <label>Alternate Contact </label>
                            <input type="text" placeholder="Input Alternate Contact" className="w-full p-2 rounded" />
                        </div>
                        <div>
                            <label>Alternate Email </label>
                            <input type="email" placeholder="Input Alternate Email" className="w-full p-2 rounded" />
                        </div>
                        <div>
                            <label>Present Address </label>
                            <input type="text" placeholder="Input Present Address" className="w-full p-2 rounded" />
                        </div>
                        <div>
                            <label>Permanent Address </label>
                            <input type="text" placeholder="Input Permanent Address" className="w-full p-2 rounded" />
                        </div>
                        <div>
                            <label>Date of Birth </label>
                            <input type="text" placeholder="Pick a date" className="w-full p-2 rounded" />
                        </div>
                        <div>
                            <label> Gender </label>
                            <input type="text" placeholder="Select a Gender" className="w-full p-2 rounded" />
                        </div>
                        <div>
                            <label>SSS No. </label>
                            <input type="text" placeholder="Input SSS No." className="w-full p-2 rounded" />
                        </div>
                        <div>
                            <label> TIN No. </label>
                            <input type="text" placeholder="Input TIN No." className="w-full p-2 rounded" />
                        </div>
                        <div>
                            <label>Philhealth No. </label>
                            <input type="text" placeholder="Input Philhealth No." className="w-full p-2 rounded" />
                        </div>
                        <div>
                            <label>Email Address </label>
                            <input type="text" placeholder="Input Email Address" className="w-full p-2 rounded" />
                        </div>
                        <div>
                            <label>Password </label>
                            <input type="text" placeholder="Input Password" className="w-full p-2 rounded" />
                        </div>
                    </div>
                )}
                {/* Repeat similar structure for Step 2 and Step 3 */}
            </div>

            <div className="mt-4 flex justify-end space-x-2">
                <button
                    onClick={prevStep}
                    className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
                    disabled={currentStep === 1}
                >
                    Prev
                </button>
                {currentStep === steps.length ? (
                    <button
                        onClick={apply}
                        className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                        Apply
                    </button>
                ) : (
                    <button
                        onClick={nextStep}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}
