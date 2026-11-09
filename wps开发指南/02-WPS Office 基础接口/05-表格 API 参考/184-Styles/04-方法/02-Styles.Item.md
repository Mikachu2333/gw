# Styles.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Styles** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

Style

## 示例


```JavaScript
/*此示例通过设置“常规”样式的 Bold 属性来更改活动工作簿中的该样式。*/
function test() {
    Application.ActiveWorkbook.Styles.Item("Normal").Font.Bold = true
}
```


```JavaScript
/*本示例显示活动工作簿第一个样式是否包含合并的单元格。*/
function test() {
    alert(ActiveWorkbook.Styles.Item(1).MergeCells)
}
```
