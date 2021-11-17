const fs = require('fs')
const path = require('path')

module.exports = function (query, res) {
  if (
    !query.level ||
    !query.instinct ||
    !query.instinct_atk ||
    !query.instinct_hp
  ) {
    res.send('Error: Invalid query.').status(400)
    return false
  }

  const dataFile = fs.readFileSync(path.resolve(__dirname, '../data/tsv/units.tsv')).toString()
  const unitsData = tsvToJson(dataFile)

  const result = []

  for (const unit of unitsData) {
    const obj = {}

    level = Number(query.level)

    // IDを3ケタにする
    unit[0] = ('00' + unit[0]).slice(-3)

    // ........................................

    let B
    if (level < 2) {
      B = 0
    } else if (level < 10) {
      B = (unit[5] / 100) * (level - 1)
    } else {
      B = (unit[5] / 100) * 9
    }

    let C
    if (level < 10) {
      C = 0
    } else if (level < 20) {
      C = (unit[6] / 100) * (level - 10)
    } else {
      C = (unit[6] / 100) * 10
    }

    let D
    if (level < 20) {
      D = 0
    } else if (level < 30) {
      D = (unit[7] / 100) * (level - 20)
    } else {
      D = (unit[7] / 100) * 10
    }

    let E
    if (level < 30) {
      E = 0
    } else if (level < 40) {
      E = (unit[8] / 100) * (level - 30)
    } else {
      E = (unit[8] / 100) * 10
    }

    let F
    if (level < 40) {
      F = 0
    } else if (level < 50) {
      F = (unit[9] / 100) * (level - 40)
    } else {
      F = (unit[9] / 100) * 10
    }

    let G
    if (level < 50) {
      G = 0
    } else if (level < 60) {
      G = (unit[10] / 100) * (level - 50)
    } else {
      G = (unit[10] / 100) * 10
    }

    let H
    if (level < 60) {
      H = 0
    } else if (level < 70) {
      H = (unit[11] / 100) * (level - 60)
    } else {
      H = (unit[11] / 100) * 10
    }

    let I
    if (level < 70) {
      I = 0
    } else if (level < 80) {
      I = (unit[12] / 100) * (level - 70)
    } else {
      I = (unit[12] / 100) * 10
    }

    let J
    if (level < 80) {
      J = 0
    } else if (level < 90) {
      J = (unit[13] / 100) * (level - 80)
    } else {
      J = (unit[13] / 100) * 10
    }

    let K
    if (level < 90) {
      K = 0
    } else if (level < 100) {
      K = (unit[14] / 100) * (level - 90)
    } else {
      K = (unit[14] / 100) * 10
    }

    let L
    if (level < 100) {
      L = 0
    } else if (level < 110) {
      L = (unit[15] / 100) * (level - 100)
    } else {
      L = (unit[15] / 100) * 10
    }

    let M
    if (level < 110) {
      M = 0
    } else if (level < 120) {
      M = (unit[16] / 100) * (level - 110)
    } else {
      M = (unit[16] / 100) * 10
    }

    let N
    if (level < 120) {
      N = 0
    } else if (level < 130) {
      N = (unit[17] / 100) * (level - 120)
    } else {
      N = (unit[17] / 100) * 10
    }

    let O
    if (level < 130) {
      O = 0
    } else if (level < 140) {
      O = (unit[18] / 100) * (level - 130)
    } else {
      O = (unit[18] / 100) * 10
    }

    let P
    if (level < 140) {
      P = 0
    } else if (level < 150) {
      P = (unit[19] / 100) * (level - 140)
    } else {
      P = (unit[19] / 100) * 10
    }

    let Q
    if (level < 150) {
      Q = 0
    } else if (level < 160) {
      Q = (unit[20] / 100) * (level - 150)
    } else {
      Q = (unit[20] / 100) * 10
    }

    let R
    if (level < 160) {
      R = 0
    } else if (level < 170) {
      R = (unit[21] / 100) * (level - 160)
    } else {
      R = (unit[21] / 100) * 10
    }

    let S
    if (level < 170) {
      S = 0
    } else if (level < 180) {
      S = (unit[22] / 100) * (level - 170)
    } else {
      S = (unit[22] / 100) * 10
    }

    let T
    if (level < 180) {
      T = 0
    } else if (level < 190) {
      T = (unit[23] / 100) * (level - 180)
    } else {
      T = (unit[23] / 100) * 10
    }

    let U
    if (level < 190) {
      U = 0
    } else if (level < 200) {
      U = (unit[24] / 100) * (level - 190)
    } else {
      U = (unit[24] / 100) * 10
    }

    // prettier-ignore
    const V = B + C + D + E + F + G + H + I + J + K + L + M + N + O + P + Q + R + S + T + U

    // ........................................

    // unitId
    obj.unitId = unit[0]

    // 形態
    obj.form = unit[1]

    // id
    obj.id = unit[0] + '-' + unit[1]

    // キャラ名
    obj.name = unit[2]

    // レアリティ
    obj.rarity = unit[3]

    // Lv.
    obj.level = level

    // 最大Lv.
    obj.maxLv = unit[4]

    // HP
    obj.hp =
      Math.floor(Math.round(V * unit[25] + Number(unit[25])) * 2.5) *
      (Number(query.instinct_hp) !== 0 && unit[139] > 0
        ? 1 + ((unit[139] / 100) * Number(query.instinct_hp)) / 10
        : 1)

    // 攻撃力
    const X =
      Math.floor(Math.round(V * unit[26] + Number(unit[26])) * 2.5) *
      (Number(query.instinct_atk) !== 0 && unit[138] > 0
        ? 1 + ((unit[138] / 100) * Number(query.instinct_atk)) / 10
        : 1)
    const Y =
      Math.floor(Math.round(V * unit[27] + Number(unit[27])) * 2.5) *
      (Number(query.instinct_atk) !== 0 && unit[138] > 0
        ? 1 + ((unit[138] / 100) * Number(query.instinct_atk)) / 10
        : 1)
    const Z =
      Math.floor(Math.round(V * unit[28] + Number(unit[28])) * 2.5) *
      (Number(query.instinct_atk) !== 0 && unit[138] > 0
        ? 1 + ((unit[138] / 100) * Number(query.instinct_atk)) / 10
        : 1)

    obj.atk = X + Y + Z

    // 移動速度
    obj.speed =
      query.instinct === 'true' && unit[135] !== 0
        ? Number(unit[135])
        : Number(unit[29])

    // KB
    obj.kb = Number(unit[30])

    // 攻撃発生F
    obj.atkOccurrence = Number(unit[31])

    // 攻撃頻度F
    obj.atkFrequency = Number(unit[32])

    // DPS
    obj.dps =
      !obj.atk || !obj.atkFrequency
        ? 0
        : Math.round((obj.atk / obj.atkFrequency) * 30)

    // 攻撃範囲
    obj.reach = unit[33]

    // 射程
    obj.range = Number(unit[34])

    // 攻撃範囲(最短)
    obj.shortRange = unit[35] > 0 ? Number(unit[35]) : null

    // 攻撃範囲(最長)
    obj.longRange = unit[36] > 0 ? Number(unit[36]) : null

    // コスト
    obj.cost =
      query.instinct === 'true' && unit[133] !== 0
        ? Number(unit[133])
        : Number(unit[37])

    // 再生産
    obj.reproduction =
      query.instinct === 'true' && unit[134] !== 0
        ? Number(unit[134])
        : Number(unit[38])

    // 連続攻撃
    obj.continuousAttack = unit[39] > 1

    // 攻撃力(１撃目)
    obj.atk1 = unit[39] > 1 ? X : null

    // 攻撃発生(１撃目)
    obj.atk1Occurrence = unit[39] > 1 ? Number(unit[31]) : null

    // 攻撃力(２撃目)
    obj.atk2 = unit[39] > 1 ? Y : null

    // 攻撃発生(２撃目)
    obj.atk2Occurrence = unit[39] > 1 ? Number(unit[40]) : null

    // 攻撃力(３撃目)
    obj.atk3 = unit[39] > 1 ? Z : null

    // 攻撃発生(３撃目)
    obj.atk3Occurrence = unit[39] > 1 ? Number(unit[41]) : null

    // 連続攻撃特性付与制限
    obj.continuousAttackLimit = unit[42]

    if (
      (unit[39] === 2 && unit[42] === 1 && unit[43] === 1) ||
      (unit[39] === 3 && unit[42] === 1 && unit[43] === 1 && unit[44] === 1) ||
      unit[39] < 2
    ) {
      obj.continuousAttackLimit = null
    } else {
      obj.continuousAttackLimit = []

      if (unit[42] === 1) {
        obj.continuousAttackLimit.push(1)
      }
      if (unit[43] === 1) {
        obj.continuousAttackLimit.push(2)
      }
      if (unit[44] === 1) {
        obj.continuousAttackLimit.push(3)
      }
    }

    // 待機時間
    obj.wait = unit[45]

    // のけぞり時間
    obj.backSwing = unit[46]

    // 波動確率
    obj.waveProbability =
      query.instinct === 'true' && unit[126] !== 0
        ? Number(unit[126])
        : Number(unit[47])

    // 波動レベル
    obj.waveLevel =
      query.instinct === 'true' && unit[127] !== 0
        ? Number(unit[127])
        : Number(unit[48])

    // 小波動
    obj.smallWave = unit[49] !== 0

    // 烈波確率
    obj.raggingWaveProbability =
      query.instinct === 'true' && unit[159] !== 0
        ? Number(unit[159])
        : Number(unit[50])

    // 烈波レベル
    obj.raggingWaveLevel =
      query.instinct === 'true' && unit[160] !== 0
        ? Number(unit[160])
        : Number(unit[51])

    // 烈波射程(最短)
    obj.raggingWaveShortRange =
      query.instinct === 'true' && unit[161] !== 0
        ? Number(unit[161])
        : Number(unit[52])

    // 烈波射程(最長)
    obj.raggingWaveLongRange =
      query.instinct === 'true' && unit[162] !== 0
        ? Number(unit[162])
        : Number(unit[53])

    // ........................................

    result.push(obj)
  }

  return result
}

function tsvToJson(tsv) {
  return tsv.split('\n').map((line) => line.split('\t'))
}
