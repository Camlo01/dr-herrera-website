/* eslint-disable no-shadow */
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
    { id: 1, name: 'bajo', value: 50.95384615, color: '#21A6F3' },
    { id: 2, name: 'normal', value: 17.72307692, color: '#40BC64' },
    { id: 3, name: 'sobrepeso', value: 13.56923077, color: '#FF8966' },
    { id: 4, name: 'obesidad1', value: 13.56923077, color: '#FC5448' },
    { id: 5, name: 'obesidad2', value: 13.56923077, color: '#D4453B' },
    { id: 6, name: 'obesidad3', value: 27.41538462, color: '#A5332B' },
    { id: 7, name: 'obesidad4', value: 27.41538462, color: '#84261F' },
    { id: 8, name: 'obesidad5', value: 13.84615385, color: '#6B1412' },
];

const cx = 150;
const cy = 195;
const iR = 50;
const oR = 100;

const needle = (calculatedAngle = 180, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
        total += v.value;
    });

    const ang = calculatedAngle;
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
        <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
        <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
    ];
};


function Measurer({ imc }) {
    {
        return (
            <PieChart width={310} height={280}>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx={cx}
                    cy={cy}

                    innerRadius={iR}
                    outerRadius={oR}

                    // space between data
                    paddingAngle={0}
                    fill="#8884d8"
                    stroke="none"
                >
                    {data.map((entry, index) => (
                        < Cell key={`${index}`} fill={entry.color} />
                    ))}
                </Pie>
                {needle(calculateAngle(imc), data, cx, cy, iR, oR, '#3F3E3F')}
            </PieChart>
        );
    }
}
export default Measurer;

function calculateAngle(imc) {
    const max = 65
    const min = 0

    // Default values
    if (imc < min) {
        return 180;
    } else if (imc > max) {
        return 0;
    }

    const percentage = (imc * 100) / max 

    const angleNegative = (percentage * 180) / 100

    const angle = 180 - angleNegative

    return angle
}