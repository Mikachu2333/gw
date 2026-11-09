# IPmt

计算贷款在指定期间的利息部分。

## 语法

```typescript
function IPmt(Rate: number, Per: number, NPer: number, PV: number, FV?: number, Due?: number): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Rate | 必选 | number | 每期利率。 |
| Per | 必选 | number | 要计算利息的期数（从1开始，不超过 NPer）。 |
| NPer | 必选 | number | 总付款期数。 |
| PV | 必选 | number | 现值（贷款本金）。 |
| FV | 可选 | number | 终值。省略时默认为 `0`。 |
| Due | 可选 | number | 付款时机：`0` 期末付款（默认），`1` 期初付款。 |

## 返回值

指定期间的利息金额。

## 说明

基于固定利率和等额付款，计算贷款或投资在第 Per 期的付款中属于利息的部分。
每期总付款 = 利息部分（IPmt）+ 本金部分（[PPmt](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/PPmt)）。
遵循现金流符号约定：支出为负数，收入为正数。

## 示例

```javascript
/* 计算贷款第一期利息 */
function test() {
  const interest = IPmt(0.05 / 12, 1, 360, 500000)
  Debug.Print("第1期利息：" + interest)
}
```

```javascript
/* 计算各期利息 */
function test() {
  for (let i = 1; i <= 12; i++) {
    Debug.Print("第" + i + "期利息：" + IPmt(0.06 / 12, i, 24, 100000))
  }
}
```
