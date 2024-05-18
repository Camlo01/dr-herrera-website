/* eslint-disable no-shadow */
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
    { name: 'bajo', value: 48.33, color: '#21A6F3' },
    { name: 'normal', value: 32.55, color: '#40BC64' },
    { name: 'sobrepeso', value: 24.17, color: '#FC5448' },
    { name: 'obesidad1', value: 25.15, color: '#D4453B' },
    { name: 'obesidad2', value: 24.16, color: '#A5332B' },
    { name: 'obesidad3', value: 25.64, color: '#84261F' },
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
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                {needle(calculateAngle(imc), data, cx, cy, iR, oR, '#3F3E3F')}
            </PieChart>
        );
    }
}
export default Measurer;

function calculateAngle(imc) {
    const max = 45
    const min = 15

    // Default values
    if (imc < min) {
        return 180;
    } else if (imc > max) {
        return 0;
    }

    const difference = max - imc;

    const percentage = (difference * 100) / 36.5

    const angle = (percentage * 180) / 100

    return angle
}