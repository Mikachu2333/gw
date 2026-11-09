# SYD

使用年数总和法计算资产在指定期间的折旧额。

## 语法

```typescript
function SYD(Cost: number, Salvage: number, Life: number, Period: number): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cost | 必选 | number | 资产的初始成本（原值）。 |
| Salvage | 必选 | number | 资产在使用寿命结束时的残值。 |
| Life | 必选 | number | 资产的使用寿命期数。 |
| Period | 必选 | number | 要计算折旧的期数，从 `1` 开始。 |

## 返回值

指定期间的折旧额。

## 说明

年数总和法（Sum-of-Years'-Digits）是一种加速折旧方法——前期折旧多，后期折旧少。
每期折旧比例 = 剩余寿命年数 / 年数总和，其中年数总和 S = Life × (Life + 1) / 2。
第 Period 期的折旧比例为 (Life - Period + 1) / S。

与 [SLN](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/SLN)（直线法，每期相同）和 [DDB](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/DDB)（双倍余额递减法，衰减更快）相比，SYD 的折旧速度介于两者之间。三种方法的总折旧额相同（= Cost - Salvage），只是各期分配不同。
Life 不能为 `0` 或 `-1`。

## 示例

```javascript
/* 查看资产前三年的折旧递减趋势 */
function test() {
  for (let i = 1; i <= 3; i++) {
    Debug.Print("第" + i + "年折旧：" + SYD(100000, 10000, 10, i).toFixed(2))
  }
}
```

```javascript
/* 计算资产全寿命的累计折旧 */
function test() {
  let total = 0
  const life = 5
  for (let i = 1; i <= life; i++) {
    total += SYD(80000, 8000, life, i)
  }
  Debug.Print("累计折旧：" + total.toFixed(2))
}
```
