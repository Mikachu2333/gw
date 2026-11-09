# ListTemplate.Name

返回或设置指定对象的名称。 **String** 类型，可读写。



## 语法

express.**Name**

express   一个代表 **ListTemplate** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示活动文档中的第一个列表模板的名称。*/
function test() {
    alert(ActiveDocument.ListTemplates.Item(1).Name)
}
```


```JavaScript
/*此示例设置“项目符号和编号”对话框中“多级符号”选项卡上所有列表模板（不包括“无”选项）的名称。*/
function test() {
    let listTemplates = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates
    for (let i = 1; i <= listTemplates.Count; i++) {
        listTemplates.Item(i).Name = "example_" + i
    }
}
```
