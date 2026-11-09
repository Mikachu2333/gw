# IRR

计算一组现金流的内部收益率。

## 语法

```typescript
function IRR(ValueArray: number[], Guess?: number): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ValueArray | 必选 | number[] | 现金流数组，按时间顺序排列。必须包含至少2个值。 |
| Guess | 可选 | number | 迭代的初始猜测值。省略时默认为 `0`。必须大于 `-1`。 |

## 返回值

内部收益率（小数形式）。

## 说明

内部收益率（IRR）是使一组现金流的净现值（NPV）等于零的折现率。现金流数组必须包含至少一笔支出（负值）和至少一笔收入（正值），且按时间顺序排列——第一个值通常是初始投资（负数），后续值是各期回报。
如果使用默认 Guess 无法收敛，可以尝试提供一个更接近预期结果的初始猜测值。如果算法无法求解则抛出错误。
返回值为小数形式的利率，例如 0.05 表示 5%。

## 示例

```javascript
/* 计算投资回报率 */
function test() {
  const cashflows = [-100000, 30000, 35000, 40000, 45000]
  const rate = IRR(cashflows)
  Debug.Print("IRR：" + (rate * 100).toFixed(2) + "%")
}
```

```javascript
/* 提供初始猜测值 */
function test() {
  const cashflows = [-50000, 10000, 15000, 20000, 25000]
  const rate = IRR(cashflows, 0.15)
  Debug.Print("IRR：" + (rate * 100).toFixed(2) + "%")
}
```
