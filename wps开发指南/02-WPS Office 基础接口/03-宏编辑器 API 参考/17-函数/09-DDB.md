# DDB

计算资产在指定期间的双倍余额递减法折旧值。

## 语法

```typescript
function DDB(Cost: number, Salvage: number, Life: number, Period: number, Factor?: number): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cost | 必选 | number | 资产原值（初始成本）。 |
| Salvage | 必选 | number | 资产残值（使用寿命结束时的价值）。 |
| Life | 必选 | number | 资产使用寿命（总期数）。 |
| Period | 必选 | number | 要计算折旧的期间（从1开始）。 |
| Factor | 可选 | number | 折旧率倍数。省略时默认为 `2`（双倍余额递减法）。 |

## 返回值

指定期间的折旧值。

## 说明

使用双倍余额递减法（或指定 Factor 的加速折旧法）计算资产在某一期间的折旧值。
折旧率 = Factor / Life，每期折旧 = 期初账面价值 × 折旧率。当折旧后的账面价值低于残值时，自动减少折旧使账面价值不低于残值；折旧值不会为负数。
Factor 默认为 2（双倍），设为 3 则为三倍余额递减法，设为 1 则为直线法率的加速折旧。

## 示例

```javascript
/* 计算第一年折旧 */
function test() {
  const dep = DDB(10000, 1000, 5, 1)
  Debug.Print("第1年折旧：" + dep)
}
```

```javascript
/* 计算各期折旧 */
function test() {
  for (let i = 1; i <= 5; i++) {
    Debug.Print("第" + i + "年折旧：" + DDB(10000, 1000, 5, i))
  }
}
```

```javascript
/* 使用三倍余额递减法 */
function test() {
  const dep = DDB(10000, 1000, 5, 1, 3)
  Debug.Print("三倍法第1年折旧：" + dep)
}
```
