# Sections.Item

返回集合中的单个 **Section** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Sections** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Section

## 示例


```JavaScript
/*本示例显示活动文档第一个节的文本内容*/
function test() {
    let firstSec = Application.ActiveDocument.Sections.Item(1)
    alert(firstSec.Range.Text)
}
```


```JavaScript
/*本示例将活动文档中第一节的页面方向设置为横向。*/
function test() {
    Application.ActiveDocument.Sections.Item(1).PageSetup.Orientation = wdOrientLandscape
}
```
