# Pages.Item

返回一个 **Page** 对象，该对象代表工作簿中的页的集合。只读。



## 语法

express.**Item(Index)**

express   一个代表 **Pages** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 页的索引值。 |

## 返回值

Page

## 示例


```JavaScript
/*本示例显示活动工作表第一个页面页眉居中内容。*/
function test() {
    alert(ActiveSheet.PageSetup.Pages.Item(1).CenterHeader.Text)
}
```


```JavaScript
/*本示例显示 Sheet1 第一个页面左页眉内容。*/
function test() {
    alert(Application.Worksheets.Item("Sheet1").PageSetup.Pages.Item(1).LeftHeader.Text)
}
```
