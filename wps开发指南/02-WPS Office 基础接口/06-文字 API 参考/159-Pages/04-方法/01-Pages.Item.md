# Pages.Item

返回集合中的单个 **Page** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Pages** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 Long 类型值。 |

## 返回值

Page

## 示例


```JavaScript
/*本示例显示活动窗口上第一个窗格中每一页的高度。*/
function test() {
    let pages = ActiveDocument.ActiveWindow.Panes(1).Pages
    for (let i = 1; i <= pages.Count; i++) {
        alert(pages.Item(i).Height)
    }
}
```


```JavaScript
/*本示例显示活动窗口中第一个窗格的第一页的宽度。*/
function test() {
    alert(ActiveDocument.ActiveWindow.Panes(1).Pages.Item(1).Width)
}
```
