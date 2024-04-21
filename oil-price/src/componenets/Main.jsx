import React, { useState } from 'react'

export const Main = () => {

    const [inputs, setInputs] = useState({
        api: 0,
        freight: 0,
        discount: 0,
        fee: 0,
        insurance: 0
    })

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const constants = {
        refAPI: 26,
        arabHeavy: 27.5,
        arabMedium: 31,
        arabHeavyPrice: 60.455,
        arabMediumPrice: 80,
        conversationFactor: 7.0135,
        centDiff: 0.2
    }

    const [calcData, setCalcData] = useState({
        marketPrice: 0,
        diff: 0,
        corrPrice: 0,
        freight: 0,
        totFreight: 0,
        totInsurance: 0
    })

    function calculateMarketPrice() {
        if (inputs.api === 0 || inputs.freight === 0 || inputs.discount === 0 || inputs.fee === 0 || inputs.insurance === 0) {
            alert("Please enter all required data")
        }
        else {
            if (inputs.api < constants.refAPI) {
                setCalcData(prevData => ({
                    ...prevData,
                    diff: inputs.api - constants.arabHeavy
                }))
                setCalcData(prevData => ({
                    ...prevData,
                    corrPrice: constants.arabHeavyPrice + (prevData.diff * constants.centDiff)
                }))
                setCalcData(prevData => ({
                    ...prevData,
                    freight: (inputs.freight * inputs.discount) / constants.conversationFactor
                }))
                setCalcData(prevData => ({
                    ...prevData,
                    totFreight: inputs.fee / constants.conversationFactor + prevData.freight
                }))
                setCalcData(prevData => ({
                    ...prevData,
                    totInsurance: (prevData.corrPrice + prevData.totFreight) * inputs.insurance / 100
                }))
                setCalcData(prevData => ({
                    ...prevData,
                    marketPrice: prevData.corrPrice + prevData.totFreight + prevData.totInsurance
                }))
            }
            else {
                setCalcData(prevData => ({
                    ...prevData,
                    diff: inputs.api - constants.arabMedium
                }))
                setCalcData(prevData => ({
                    ...prevData,
                    corrPrice: constants.arabMediumPrice + (prevData.diff * constants.centDiff)
                }))
                setCalcData(prevData => ({
                    ...prevData,
                    freight: (inputs.freight * inputs.discount) / constants.conversationFactor
                }))
                setCalcData(prevData => ({
                    ...prevData,
                    totFreight: inputs.fee / constants.conversationFactor + prevData.freight
                }))
                setCalcData(prevData => ({
                    ...prevData,
                    totInsurance: (prevData.corrPrice + prevData.totFreight) * inputs.insurance / 100
                }))
                setCalcData(prevData => ({
                    ...prevData,
                    marketPrice: prevData.corrPrice + prevData.totFreight + prevData.totInsurance
                }))
            }
        }
    }

    return (
        <main>
            <div className="flex mx-10 my-4">
                <section className="w-1/2">
                    <h3 className="text-2xl">Required Data:</h3>
                    <form className="flex flex-col w-96 text-base gap-2 mt-4">
                        <div className="flex justify-between">
                            <label htmlFor="api">Crude Oil API:</label>
                            <input className="px-1 rounded-lg border border-slate-400" type="number" id="api" name="api" value={inputs.api} onChange={handleChange} />
                        </div>

                        <div className="flex justify-between">
                            <label htmlFor="freight">Freight cost ($/tone):</label>
                            <input className="px-1 rounded-lg border border-slate-400" type="number" id="freight" name="freight" value={inputs.freight} onChange={handleChange} />
                        </div>

                        <div className="flex justify-between">
                            <label htmlFor="discount">Discount (%):</label>
                            <input className="px-1 rounded-lg border border-slate-400" type="number" id="discount" name="discount" value={inputs.discount} onChange={handleChange} />
                        </div>

                        <div className="flex justify-between items-center">
                            <label htmlFor="fee">Any transportation fees ($/tone):</label>
                            <input className="px-1 rounded-lg border border-slate-400 h-[26px]" type="number" id="fee" name="fee" value={inputs.fee} onChange={handleChange} />
                        </div>

                        <div className="flex justify-between">
                            <label htmlFor="insurance">Insurance rate (%):</label>
                            <input className="px-1 rounded-lg border border-slate-400" type="number" id="insurance" name="insurance" value={inputs.insurance} onChange={handleChange} />
                        </div>
                    </form>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active:scale-95" onClick={calculateMarketPrice}>Calculate</button>
                </section>

                <section>
                    <h3 className="text-2xl">Solution</h3>
                    <p className="mt-4 text-3xl">Market Price: {calcData.marketPrice}</p>
                </section>
            </div>
        </main>
    )
}
