# PageNumbers.RestartNumberingAtSection

如果页码在指定节的开头重新从 1 开始，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**RestartNumberingAtSection**

express   一个代表 **PageNumbers** 对象的变量。

## 类型

boolean

## 说明


如果将 **RestartNumberingAtSection** 属性设置为 **False** ，则会忽略 **[StartingNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumbers/member/StartingNumber)** 属性，以便从前一节继续编排页码。



## 示例


```JavaScript
/*本示例在活动文档的第一节的主页眉中添加页码，然后设置每节的主页眉中页码从 1 重新开始编号。*/
function test() {
    ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).PageNumbers.Add(wdAlignPageNumberCenter)
    for (let i = 1; i <= ActiveDocument.Sections.Count; i++) {
        let section = ActiveDocument.Sections.Item(i)
        let pageNumbers = section.Headers.Item(wdHeaderFooterPrimary).PageNumbers
        pageNumbers.RestartNumberingAtSection = true
        pageNumbers.StartingNumber = 1
    }
}
```


```JavaScript
/*本示例显示所选页脚中的页码是否在对应节的开头重新从 1 开始。*/
function test() {
    let pageNumbers = Selection.HeaderFooter.PageNumbers
    alert(pageNumbers.RestartNumberingAtSection)
}
```
