# Rate

计算在等额付款条件下的每期利率。

## 语法

```typescript
function Rate(NPer: number, Pmt: number, PV: number, FV?: number, Due?: number, Guess?: number): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NPer | 必选 | number | 总付款期数。 |
| Pmt | 必选 | number | 每期付款金额（支出为负数）。 |
| PV | 必选 | number | 现值。 |
| FV | 可选 | number | 终值。省略时默认为 `0`。 |
| Due | 可选 | number | 付款时机：`0` 期末付款（默认），非零值期初付款。 |
| Guess | 可选 | number | 利率的估计值。省略时默认为 `0.1`（10%）。 |

## 返回值

每期利率（小数形式）。

## 说明

通过牛顿-拉弗森迭代法求解年金方程中的利率。已知总期数、每期付款和现值（可选终值），计算使方程平衡的每期利率。
迭代最多进行 100 次，收敛精度为 1e-14。收敛后还会回代验证结果是否满足原方程，确保结果可靠。
如果使用提供的 Guess 无法收敛，会自动使用默认初始值 `0.1` 再试一次。

## 示例

```javascript
/* 计算贷款的月利率 */
function test() {
  const monthlyRate = Rate(360, -2000, 400000)
  Debug.Print("月利率：" + (monthlyRate * 100).toFixed(4) + "%")
  Debug.Print("年利率：" + (monthlyRate * 12 * 100).toFixed(2) + "%")
}
```

```javascript
/* 使用初始猜测值提高收敛速度 */
function test() {
  const rate = Rate(120, -1500, 100000, 0, 0, 0.005)
  Debug.Print("月利率：" + (rate * 100).toFixed(4) + "%")
}
```
