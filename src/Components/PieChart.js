import React from 'react'

import CanvasJSReact from './canvasjs.react';

const CanvasJS=CanvasJSReact.CanvasJS;
const CanvasJSChart= CanvasJSReact.CanvasJSChart
CanvasJS.addColorSet("NewSet",
[//colorSet Array

"#FF8D33",
"#A039F9",
"#F9E639"               
]);

export default function PieChart(month) {
    
    const options={
        colorSet:"NewSet",
        backgroundColor: "#473C56",
        color:"white",
        height: 200,
        
        title:{
            text: month.month,
            fontColor: "orange",
            fontWeight: "bold",
            fontFamily: "Roboto",
            
        },
        data: [{
            theme:"dark2",
            type: "pie",
            startAngle: 75,
            showInLegend: false,
            animationEnabled: true,
            indexLabelFontSize:"12",
            dataPoints:[
            
            
                {y: Math.random().toFixed(2)*100
                },
                {y: Math.random().toFixed(2)*100
                },
                {y: Math.random().toFixed(2)*100
                }
            ]

        }]
    }
    return (
        <div style={{marginBottom:"100px"}}>
            <CanvasJSChart options={options}/>
        </div>
    )
}
