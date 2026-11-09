# Pmt

计算在固定利率和等额付款条件下的每期付款金额。

## 语法

```typescript
function Pmt(Rate: number, NPer: number, PV: number, FV?: number, Due?: number): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Rate | 必选 | number | 每期利率（小数形式）。 |
| NPer | 必选 | number | 总付款期数。 |
| PV | 必选 | number | 现值（贷款本金或初始投资额）。 |
| FV | 可选 | number | 终值。省略时默认为 `0`。 |
| Due | 可选 | number | 付款时机：`0` 期末付款（默认），非零值期初付款。 |

## 返回值

每期付款金额（支出为负数）。

## 说明

计算一笔贷款或投资在固定利率、固定期数下的每期等额付款金额，包含本金和利息。
返回值遵循现金流符号约定——支出（如还款）为负数，收入为正数。
当 Rate 为 0 时，简化为 Pmt = -(PV + FV) / NPer。

## 示例

```javascript
/* 计算房贷月供 */
function test() {
  const payment = Pmt(0.05 / 12, 360, 500000)
  Debug.Print("月供：" + Math.abs(payment).toFixed(2) + " 元")
}
```

```javascript
/* 计算每月需存入的金额以达到目标 */
function test() {
  const deposit = Pmt(0.04 / 12, 60, 0, -200000)
  Debug.Print("每月存入：" + deposit.toFixed(2) + " 元")
}
```
