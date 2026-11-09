# SLN

使用直线法计算资产每期的折旧额。

## 语法

```typescript
function SLN(Cost: number, Salvage: number, Life: number): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cost | 必选 | number | 资产的初始成本（原值）。 |
| Salvage | 必选 | number | 资产在使用寿命结束时的残值。 |
| Life | 必选 | number | 资产的使用寿命期数。 |

## 返回值

每期折旧额。

## 说明

直线法将资产的可折旧金额（原值减残值）平均分摊到使用寿命的每一期，每期折旧额相同。
适用于资产价值随时间均匀消耗的场景。如果资产前期价值消耗较快，应考虑使用 [SYD](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/SYD)（年数总和法）或 [DDB](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/DDB)（双倍余额递减法）。
Life 不能为 `0`。

## 示例

```javascript
/* 计算办公设备的年折旧额 */
function test() {
  const depreciation = SLN(50000, 5000, 5)
  Debug.Print("每年折旧：" + depreciation + " 元")
}
```

```javascript
/* 比较三种折旧方法第一年的结果 */
function test() {
  const cost = 100000, salvage = 10000, life = 10
  Debug.Print("直线法：" + SLN(cost, salvage, life))
  Debug.Print("年数总和法：" + SYD(cost, salvage, life, 1))
  Debug.Print("双倍余额递减法：" + DDB(cost, salvage, life, 1))
}
```
