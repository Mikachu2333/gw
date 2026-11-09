# ListLevels.Item

返回集合中的单个 **ListLevel** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **ListLevels** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

ListLevel

## 示例


```JavaScript
/*本示例显示活动文档上第三个列表模板的第一个列表级别的对齐方式是否为wdListLevelAlignLeft。*/
function test() {
    let listLevels = ActiveDocument.ListTemplates.Item(3).ListLevels
    alert(listLevels.Item(1).Alignment == wdListLevelAlignLeft)
}
```


```JavaScript
/*本示例显示“项目符号和编号”对话框中“项目符号”选项卡上第一个列表模板的第一个列表级别的数字格式。*/
function test() {
    let listLevels = Application.ListGalleries.Item(wdBulletGallery).ListTemplates.Item(1).ListLevels
    alert(listLevels.Item(1).NumberFormat)
}
```
