# Choose

根据索引从数组中选取一个值并返回。

## 语法

```typescript
function Choose(Index: number, ParamArray: any[]): any
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number | 1-based索引，指定返回数组中的第几个元素。 |
| ParamArray | 必选 | any[] | 待选择的值数组。 |

## 返回值

数组中索引位置对应的值，保持原始类型。

## 说明

传入一个1-based索引和一个值数组，返回数组中对应位置的元素。索引1返回第一个元素，索引2返回第二个，依此类推。
索引小于1或超过数组长度时抛出错误。

## 示例

```javascript
/* 根据编号选择名称 */
function test() {
  const name = Choose(2, ["苹果", "香蕉", "橙子"])
  Debug.Print(name) // "香蕉"
}
```

```javascript
/* 根据条件选择操作 */
function test() {
  const level = 3
  const desc = Choose(level, ["低", "中", "高", "极高"])
  Debug.Print("当前等级：" + desc)
}
```
