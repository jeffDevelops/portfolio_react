import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { PropTypes } from 'prop-types';

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
const LanguagesPie = ({ languageData }) => {

  console.log(languageData);

  const data = languageData
    .map(repo => repo[Object.keys(repo)[0]])
    .reduce((accumulatingObj, currentVal) => {
      console.log('Accumulator: ', accumulatingObj);
      console.log('Current val: ', currentVal);
      Object.keys(currentVal)
        .forEach(key => {
          return accumulatingObj[key]
            ? accumulatingObj[key] += currentVal[key]
            : accumulatingObj[key] = currentVal[key]
        });
      return accumulatingObj;
    }, {});

  console.log(data);

  return null;
    {/* <ResponsivePie
        data={ data }
        margin={{
            "top": 25,
            "right": 25,
            "bottom": 80,
            "left": 25
        }}
        sortByValue={true}
        innerRadius={0.85}
        padAngle={1}
        colors="category10"
        colorBy={function(e){return e.color}}
        borderColor="#000000"
        radialLabelsSkipAngle={5}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={36}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor="inherit"
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        tooltip={function(e){return d.a.createElement(en,{style:{color:e.color}},d.a.createElement(tn,null,"id"),d.a.createElement(an,null,e.id),d.a.createElement(tn,null,"value"),d.a.createElement(an,null,e.value),d.a.createElement(tn,null,"label"),d.a.createElement(an,null,e.label),d.a.createElement(tn,null,"color"),d.a.createElement(an,null,e.color))}}
        legends={[
            {
                "anchor": "bottom",
                "direction": "row",
                "translateY": 56,
                "itemWidth": 100,
                "itemHeight": 18,
                "itemTextColor": "#999",
                "symbolSize": 18,
                "symbolShape": "circle",
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemTextColor": "#000"
                        }
                    }
                ]
            }
        ]}
    /> */}
  // )
}

LanguagesPie.propTypes = {
  languageData: PropTypes.object.isRequired,
}

export default LanguagesPie;