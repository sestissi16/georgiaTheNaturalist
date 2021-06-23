import React , { Component } from 'react'
import Navigation from '../Components/navigation'
import flowerDivider from '../Media/blackFlowerDivider-Transparent-Cropped.png'
import Table from 'react-bootstrap/Table'
import websiteInfo from '../websiteData'
import './Pricing.css'

class Pricing extends Component {
    render () {
        const { headers, details, notes } = websiteInfo.pricing
        return (
            <div className="Pricing">
                <Navigation variant="light" />
                <div id="pricingContent">
                    <header id="pricingHeader">
                        <h1 id="pricingTitle">Pricing</h1>
                        <img src={flowerDivider} id="pricingFlowerDivider" alt="Flowery dividing line" />
                    </header>
                    <div id="pricingTableDiv">
                        <Table responsive="xl">
                            <thead>
                                <tr>
                                    { headers ? 
                                        Object.keys(headers).map((key, index) => {
                                            var header = headers[key]
                                            // var idName = "header" + index.toString()
                                            return <th className="pricingTableHeader">{header}</th>
                                        }) 
                                        : <p>Pricing coming soon</p>
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                { details ? 
                                    Object.keys(details).map((key, index) => {
                                        var row = details[key]
                                        var rowInfo = row.info
                                        // var idName = "header" + index.toString()
                                        return <tr>
                                            <td className="pricingTableRow">{row.title}</td>
                                            { rowInfo ? 
                                                Object.keys(rowInfo).map((key, index) => {
                                                    var info = rowInfo[key]
                                                    return <td className="pricingTableRow">{info}</td>
                                                }) 
                                                : <p>Pricing coming soon</p>
                                            }
                                        </tr>
                                    }) 
                                    : <p>Pricing coming soon</p>
                                }
                            </tbody>
                        </Table>
                    </div>
                    <div id="pricingNotesDiv">
                        { notes ? 
                            Object.keys(notes).map((key, index) => {
                                var note = notes[key]
                                return <p className="pricingNote">{note}</p>
                            }) 
                            : <p>Pricing coming soon</p>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;
