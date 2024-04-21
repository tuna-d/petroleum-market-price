import React from 'react'

export const Main = () => {
    return (
        <main>
            <div className="flex mx-10">
                <section className="w-1/2">
                    <h3>Required Data:</h3>
                    <div className="flex flex-col w-96 text-base gap-2">
                        <div className="flex justify-between">
                            <label htmlFor="api">Crude Oil API:</label>
                            <input className="border border-slate-400" type="text" id="api" />
                        </div>

                        <div className="flex justify-between">
                            <label htmlFor="freight">Freight cost ($/tone):</label>
                            <input className="border border-slate-400" type="text" id="freight" />
                        </div>

                        <div className="flex justify-between">
                            <label htmlFor="discount">Discount (%):</label>
                            <input className="border border-slate-400" type="text" id="discount" />
                        </div>

                        <div className="flex justify-between items-center">
                            <label htmlFor="fee">Any transportation fees ($/tone):</label>
                            <input className="border border-slate-400 h-[26px]" type="text" id="fee" />
                        </div>

                        <div className="flex justify-between">
                            <label htmlFor="insurance">Insurance rate (%):</label>
                            <input className="border border-slate-400" type="text" id="insurance" />
                        </div>
                    </div>
                </section>

                <section>
                    <h3>Solution</h3>

                </section>
            </div>
        </main>
    )
}
