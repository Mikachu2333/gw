# ListLevel.LinkedStyle

返回或设置与指定 **ListLevel** 对象链接的样式的名称。 **String** 类型，可读写。



## 语法

express.**LinkedStyle**

express   一个代表 **ListLevel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置“项目符号和编号”对话框中“多级符号”选项卡上第一个列表模板（不包括“无”选项）中所有列表级别的样式名称。*/
function test() {
    let listLevels = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(1).ListLevels
    for (let i = 1; i <= listLevels.Count; i++) {
        listLevels.Item(i).LinkedStyle = "Heading " + listLevels.Item(i).Index
    }
}
```


```JavaScript
/*本示例显示“项目符号和编号”对话框中“编号”选项卡上第二个列表模板（不包括“无”选项）中最后一个列表级别的样式名称。*/
function test() {
    let listLevels = Application.ListGalleries.Item(wdNumberGallery).ListTemplates.Item(2).ListLevels
    alert(listLevels.Item(listLevels.Count).LinkedStyle)
}
```
