# NPV

计算一组现金流在给定折现率下的净现值。

## 语法

```typescript
function NPV(Rate: number, ValueArray: number[]): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Rate | 必选 | number | 每期折现率（小数形式）。不能等于 `-1`。 |
| ValueArray | 必选 | number[] | 现金流数组，按时间顺序排列。正值为收入，负值为支出。 |

## 返回值

净现值。

## 说明

按 Excel 约定计算净现值——所有现金流从第 1 期开始折现，即 NPV = Σ(Values[i] / (1 + Rate)^(i+1))。
这与标准金融学定义（从第 0 期折现）不同。如果初始投资发生在当前时点（第 0 期），应将其单独加到 NPV 结果上，而不是放入 ValueArray 中。
Rate 不能等于 `-1`。

## 示例

```javascript
/* 计算项目净现值（初始投资在第0期） */
function test() {
  const initialInvestment = -100000
  const cashflows = [25000, 30000, 35000, 40000]
  const npv = NPV(0.10, cashflows) + initialInvestment
  Debug.Print("净现值：" + npv.toFixed(2))
}
```

```javascript
/* 直接计算从第1期开始的现金流现值 */
function test() {
  const revenues = [10000, 20000, 30000]
  const pv = NPV(0.08, revenues)
  Debug.Print("折现总额：" + pv.toFixed(2))
}
```
