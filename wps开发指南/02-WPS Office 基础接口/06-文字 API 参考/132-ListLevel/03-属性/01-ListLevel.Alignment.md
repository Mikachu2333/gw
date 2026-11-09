# ListLevel.Alignment

返回或设置一个 **WdListLevelAlignment** 常量，该常量代表列表模板的列表级别的对齐方式。可读写。



## 语法

express.**Alignment**

express   一个代表 **ListLevel** 对象的变量。

## 类型

WdListLevelAlignment

## 示例


```JavaScript
/*本示例遍历活动文档上所有列表模板，判断如果列表模板中列表级别的数量大于1，则将第二个级别的对齐方式设置为wdListLevelAlignCenter。*/
function test() {
    for (let i = 1; i <= ActiveDocument.ListTemplates.Count; i++) {
        let listLevels = ActiveDocument.ListTemplates.Item(i).ListLevels
        if (listLevels.Count > 1) {
            listLevels.Item(2).Alignment = wdListLevelAlignCenter
        }
    }
}
```


```JavaScript
/*本示例显示“项目符号和编号”对话框中“多级符号”选项卡上第一个列表模板（不包括“无”选项）中第一个列表级别的对齐方式是否为wdListLevelAlignLeft。*/
function test() {
    let listTemplate = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(1)
    alert(listTemplate.ListLevels.Item(1).Alignment == wdListLevelAlignLeft)
}
```
