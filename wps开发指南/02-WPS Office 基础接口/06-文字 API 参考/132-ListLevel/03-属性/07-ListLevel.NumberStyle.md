# ListLevel.NumberStyle

返回或设置 **ListLevel** 对象的编号样式。 **WdListNumberStyle** 类型，可读写。



## 语法

express.**NumberStyle**

express   一个代表 **ListLevel** 对象的变量。

## 类型

WdListNumberStyle

## 说明


某些 **WdListNumberStyle** 常量可能不可用，具体取决于所选择或安装的语言支持（例如，美国英语）。



## 示例


```JavaScript
/*本示例为第三个多级编号列表模板创建另一种编号样式。*/
function test() {
    let listTemplate = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(3)
    for (let i = 1; i <= 9; i++) {
        let listLevel = listTemplate.ListLevels.Item(i)
        if (i % 2 == 0) {
            listLevel.NumberStyle = wdListNumberStyleUppercaseRoman
        } else {
            listLevel.NumberStyle = wdListNumberStyleLowercaseRoman
        }
    }
}
```


```JavaScript
/*本示例将活动文档中每个多级符号列表的编号样式更改为大写字母。*/
function test() {
    for (let i = 1; i <= ActiveDocument.ListTemplates.Count; i++) {
        let listTemplate = ActiveDocument.ListTemplates.Item(i)
        for (let j = 1; j <= listTemplate.ListLevels.Count; j++) {
            listTemplate.ListLevels.Item(j).NumberStyle = wdListNumberStyleUppercaseLetter
        }
    }
}
```
