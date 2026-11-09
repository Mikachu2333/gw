# PPmt

计算指定期数的贷款本金偿还部分。

## 语法

```typescript
function PPmt(Rate: number, Per: number, NPer: number, PV: number, FV?: number, Due?: number): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Rate | 必选 | number | 每期利率（小数形式）。 |
| Per | 必选 | number | 要计算本金的期数，从 `1` 开始。 |
| NPer | 必选 | number | 总付款期数。 |
| PV | 必选 | number | 现值（贷款本金）。 |
| FV | 可选 | number | 终值。省略时默认为 `0`。 |
| Due | 可选 | number | 付款时机：`0` 期末付款（默认），非零值期初付款。 |

## 返回值

指定期的本金偿还金额（支出为负数）。

## 说明

每期总付款由利息部分（[IPmt](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/IPmt)）和本金部分（PPmt）组成。PPmt 返回的是指定期的本金偿还金额。
遵循现金流符号约定：支出为负数，收入为正数。
Per 必须在 `1` 到 NPer 之间。当 Rate 为 0 时，每期本金等于总付款（无利息）。
期初付款时，第 1 期的本金部分等于全额付款。

## 示例

```javascript
/* 查看贷款第1期和最后1期的本金构成 */
function test() {
  const rate = 0.06 / 12
  const nper = 120
  const pv = 100000
  Debug.Print("第1期本金：" + PPmt(rate, 1, nper, pv).toFixed(2))
  Debug.Print("第120期本金：" + PPmt(rate, 120, nper, pv).toFixed(2))
}
```

```javascript
/* 计算一段时间内的本金累计偿还额 */
function test() {
  let totalPrincipal = 0
  for (let i = 1; i <= 12; i++) {
    totalPrincipal += PPmt(0.05 / 12, i, 240, 300000)
  }
  Debug.Print("前12个月累计本金：" + Math.abs(totalPrincipal).toFixed(2))
}
```
