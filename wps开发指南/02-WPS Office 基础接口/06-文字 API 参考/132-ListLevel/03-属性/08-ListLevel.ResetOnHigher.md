# ListLevel.ResetOnHigher

设置或返回指定列表级别从 1 开始重新编号之前必须显示的列表级别。 **Long** 类型，可读写。



## 语法

express.**ResetOnHigher**

express   一个代表 **ListLevel** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果每次显示列表级别时继续按顺序编号，则 **ResetOnHigher** 属性返回 **msoFalse** 。

本功能允许交叉列表并保持数值序列。不能将列表级别的 **ResetOnHigher** 属性设置为大于或等于其在 **[ListLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevels/obj)** 集合中的索引的值。



## 示例


```JavaScript
/*本示例将“项目符号和编号”对话框中“多级符号”选项卡上第一个列表模板（不包括“无”选项）中所有列表级别设置为在使用该级别时继续其顺序编号。*/
function test() {
    let listLevels = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(1).ListLevels
    for (let i = 1; i <= listLevels.Count; i++) {
        listLevels.Item(i).ResetOnHigher = msoFalse
    }
}
```


```JavaScript
/*本示例显示活动文档上第一个列表模板的第一个列表级别从 1 开始重新编号之前是否展示列表级别。*/
function test() {
    let listLevel = ActiveDocument.ListTemplates.Item(1).ListLevels.Item(1)
    alert(listLevel.ResetOnHigher === msoTrue)
}
```
