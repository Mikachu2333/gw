# MIRR

计算一组现金流的修正内部收益率。

## 语法

```typescript
function MIRR(ValueArray: number[], FinanceRate: number, ReinvestRate: number): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ValueArray | 必选 | number[] | 现金流数组，按时间顺序排列。必须包含至少2个值且至少一个负值。 |
| FinanceRate | 必选 | number | 融资利率（小数形式），用于折现负现金流。 |
| ReinvestRate | 必选 | number | 再投资利率（小数形式），用于计算正现金流的再投资终值。 |

## 返回值

修正内部收益率（小数形式）。

## 说明

修正内部收益率（MIRR）改进了 [IRR](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/IRR) 的计算方式——IRR 假设所有现金流按同一利率再投资，而 MIRR 使用两个独立的利率：FinanceRate 用于折现支出（负现金流），ReinvestRate 用于计算收入（正现金流）的再投资终值。
现金流数组必须包含至少一笔支出和至少两个值，按时间顺序排列。返回值为小数形式的利率。

## 示例

```javascript
/* 计算项目的修正收益率 */
function test() {
  const cashflows = [-120000, 39000, 30000, 21000, 37000, 46000]
  const rate = MIRR(cashflows, 0.10, 0.12)
  Debug.Print("MIRR：" + (rate * 100).toFixed(2) + "%")
}
```
