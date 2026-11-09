# ListTemplates.Item

返回集合中的单个 **ListTemplate** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **ListTemplates** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

ListTemplate

## 示例


```JavaScript
/*此示例设置“项目符号和编号”对话框中“多级符号”选项卡上所有列表模板（不包括“无”选项）的名称。*/
function test() {
    let listTemplates = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates
    for (let i = 1; i <= listTemplates.Count; i++) {
        listTemplates.Item(i).Name = "example_" + i
    }
}
```


```JavaScript
/*此示例将活动文档中的第一个列表模板的第一个列表级别的起始编号设置为3。*/
function test() {
    ActiveDocument.ListTemplates.Item(1).ListLevels.Item(1).StartAt = 3
}
```
