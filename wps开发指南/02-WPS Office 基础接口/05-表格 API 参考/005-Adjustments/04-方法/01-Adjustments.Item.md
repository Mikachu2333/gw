# Adjustments.Item

返回或设置由 **Index** 参数指定的调整值。 **Single** 型，可读写。



## 语法

**注意：**为 **Item** 赋值，须将新值追加到参数中，如下分别为赋值与取值的 TypeScript 函数声明：
```typescript
Item(Index: number, Val: number): void;
Item(Index: number): number;
```

express.**Item(Index)**

express   一个代表 **Adjustments** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | **Long** 型。调整的索引号。 |

## 返回值

number（float 精度）

## 说明


自选图形、连接符和艺术字对象最多可有八个调整。

对于线性调整，调整值 0.0 通常对应于形状的左边缘或上边缘，值 1.0 通常对应于形状的右边缘或下边缘。不过，对于某些形状，调整可以超越边界。对于径向调整，调整值 1.0 对应于形状的宽度。对于角度的调整，调整值为指定的角度。 **Item** 属性只应用于 具有调整的形状。



## 示例


```JavaScript
/*本示例显示活动工作表上第一个形状的第一个调整值。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    alert(shape.Adjustments.Item(1))
}
```


```JavaScript
/*本示例将第一张工作表上第二个形状的第一个调整值设置为 0.15。*/
function test() {
    let shape = Sheets.Item(1).Shapes.Item(2)
    shape.Adjustments.Item(1, 0.15)
}
```
