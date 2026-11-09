# TextColumns.EvenlySpaced

如果文本栏是等宽的，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**EvenlySpaced**

express   一个代表 **TextColumns** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **EvenlySpaced** 属性可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。

如果您设置了 **TextColumns** 对象的 **[Spacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/member/Spacing)** 或 **[Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/member/Width)** 属性，则 **EvenlySpaced** 属性会自动设置为 **msoTrue** 。另外，设置 **EvenlySpaced** 属性可能会更改 **TextColumns** 对象的 **Spacing** 和 **Width** 属性的设置。



## 示例


```JavaScript
/*本示例将活动文档中的文本栏设置为等宽。*/
function test() {
    let textColumns = ActiveDocument.PageSetup.TextColumns
    if (textColumns.Count > 1) {
        textColumns.EvenlySpaced = msoTrue
    }
}
```


```JavaScript
/*本示例显示活动文档中“分栏”对话框（“页面”菜单）中“栏宽相等”选项的状态是否为选中状态。*/
function test() {
    let evenlySpaced = ActiveDocument.PageSetup.TextColumns.EvenlySpaced
    alert(evenlySpaced === msoTrue)
}
```
