# NPer

计算在固定利率和等额付款条件下达到目标金额所需的期数。

## 语法

```typescript
function NPer(Rate: number, Pmt: number, PV: number, FV?: number, Due?: number): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Rate | 必选 | number | 每期利率。必须大于 `-1`。 |
| Pmt | 必选 | number | 每期付款金额（支出为负）。 |
| PV | 必选 | number | 现值。 |
| FV | 可选 | number | 目标终值。省略时默认为 `0`。 |
| Due | 可选 | number | 付款时机：`0` 期末付款（默认），非零值期初付款。 |

## 返回值

所需的期数。

## 说明

基于固定利率和每期等额付款，计算从当前现值到达目标终值所需的总期数。
遵循现金流符号约定：支出为负数，收入为正数。
Rate 不能等于 0 且 Pmt 也同时等于 0。

## 示例

```javascript
/* 计算还清贷款所需月数 */
function test() {
  const months = NPer(0.05 / 12, -500, 20000)
  Debug.Print("还清贷款需要 " + Math.ceil(months) + " 个月")
}
```

```javascript
/* 计算存够目标金额所需月数 */
function test() {
  const months = NPer(0.04 / 12, -1000, 0, 100000)
  Debug.Print("存够10万需要 " + Math.ceil(months) + " 个月")
}
```
