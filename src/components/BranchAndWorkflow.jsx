import React from 'react'
import './BranchAndWorkflow.css'
import { FaArrowDown } from 'react-icons/fa';

function BranchAndWorkflow() {
    const steps = [
        'Contact',
        'Register',
        'Tell About The Project',
        'You Will Get Proposal',
        'Involve And Track Project Development',
        'Get Ready With Your Project',
        'Get Support For Report Preparation',
    ];
    return (
        <div className='d-flex  justify-content-evenly align-items-center align-content-center mt-3 mb-5 BranchAndWorkflowmain'>
            <div className='BranchAndWorkflow_domains p-4 text-dark'>
                <h2 className='text-center'>Projects Offer For</h2>
                <h4 className='mt-3'>Engineering(BE & B.Tech)</h4>
                <ul className=''>
                    <li>Computer science</li>
                    <li>Information Science</li>
                    <li>Information Technology</li>
                    <li>AI & ML</li>
                </ul>
                <h4 className='mt-3'>BCA</h4>
                <h4 className='mt-3'>BSc</h4>
                <ul>
                    <li>Information Technology</li>
                    <li>Computer science</li>
                </ul>
                <h4 className='mt-3'>PUC(cs)</h4>
            </div>

            <div className='BranchAndWorkflow_workflow'>
                <h2 className='text-center'>What You Have To Do</h2>

                <div className="flex flex-col  mt-4 ">
                    {steps.map((step, index) => (
                        <div key={index} className="d-flex flex-column justify-content-center align-items-center align-content-center">
                            <div className="bg-primary text-white border rounded-pill border-gray-300 shadow-lg px-4 py-2 rounded-lg  text-center w-72 font-medium">
                                {step}
                            </div>
                            <div>
                                {index < steps.length - 1 && (
                                    <FaArrowDown className="text-gray-600 text-2xl my-2 " />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default BranchAndWorkflow
