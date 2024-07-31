import React from 'react'

import { SvgProps } from './types'

const SvgQuality = ({ size = 32, fill = '#FB741C' }: SvgProps) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width={size} height={size} viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill={fill} stroke="none">
        <path d="M2440 4916 c-86 -24 -136 -54 -315 -187 -226 -167 -271 -194 -353
        -213 -37 -8 -166 -20 -287 -26 -317 -17 -396 -41 -516 -160 -92 -91 -115 -147
        -182 -432 -80 -339 -63 -311 -392 -628 -151 -145 -190 -200 -220 -315 -37
        -145 -16 -233 124 -513 60 -120 116 -242 125 -272 22 -73 20 -151 -9 -385 -14
        -110 -25 -225 -25 -255 0 -174 109 -350 269 -433 36 -19 143 -67 236 -107 191
        -80 240 -107 297 -158 21 -19 103 -132 181 -251 181 -273 248 -335 402 -376
        124 -32 183 -23 490 73 175 55 183 56 295 56 114 0 118 -1 335 -68 300 -93
        392 -98 541 -27 100 47 161 115 317 351 179 271 188 278 451 391 105 44 221
        97 257 116 140 72 240 213 262 367 9 65 7 107 -16 308 -30 251 -33 320 -17
        383 6 22 65 150 130 285 97 199 122 259 132 317 17 103 1 202 -47 301 -33 68
        -55 93 -179 212 -328 314 -313 290 -391 618 -30 125 -61 247 -70 272 -37 103
        -137 215 -238 264 -85 42 -160 54 -392 66 -228 12 -318 26 -384 59 -20 11
        -123 83 -227 161 -197 147 -256 182 -345 205 -65 18 -177 18 -239 1z m338
        -737 c115 -14 289 -59 397 -103 541 -223 926 -719 1005 -1297 15 -108 15 -330
        0 -438 -74 -541 -415 -1013 -904 -1250 -194 -94 -386 -145 -595 -159 -669 -45
        -1279 299 -1582 894 -194 382 -226 875 -82 1279 91 256 265 511 466 684 367
        316 807 448 1295 390z"/>
        <path d="M2450 4029 c-682 -49 -1236 -559 -1346 -1239 -20 -122 -20 -338 0
        -460 104 -643 604 -1135 1250 -1230 110 -16 323 -14 436 4 680 110 1189 664
        1239 1348 65 900 -678 1642 -1579 1577z m885 -833 c60 -28 77 -46 106 -111 25
        -56 22 -130 -6 -185 -27 -53 -933 -960 -980 -981 -46 -21 -102 -24 -160 -8
        -33 9 -87 58 -313 283 -150 149 -282 285 -293 303 -25 40 -34 116 -20 168 14
        53 65 113 115 136 50 23 134 24 184 4 23 -10 105 -84 218 -196 l180 -180 373
        377 c264 266 385 381 414 395 57 25 121 24 182 -5z"/>
      </g>
    </svg>
  )
}

export default SvgQuality
