# BulletFormat.Number

当 **BulletFormat** 对象的 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/Type)** 属性设置为 **ppBulletNumbered** 时，返回段落的项目符号编号。只读。



## 语法

express.**Number**

express   一个代表 **BulletFormat** 对象的变量。

## 类型

number（int 精度）

## 说明


如果对具有不同编号的多个段落使用本属性，则会返回值 **ppBulletMixed** 。如果对非 **ppBulletNumbered** 类型的段落使用本属性，则会产生运行错误。



## 示例


```JavaScript
/*本示例将活动窗口所选文本区域中第一段的项目符号编号存储在名为“num”的变量中。*/
function test() {
    let selection = ActiveWindow.Selection
    if (selection.Type == ppSelectionText) {
        let bulletFormat = selection.TextRange.Paragraphs(1).ParagraphFormat.Bullet
        if (bulletFormat.Type == ppBulletNumbered) {
            let num = bulletFormat.Number
        }
    }
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个（文本框）形状中文本段落的项目符号的类型设置为ppBulletNumbered，然后显示该项目符号的编号。*/
function test() {
    let textRange = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame.TextRange
    let bulletFormat = textRange.ParagraphFormat.Bullet
    bulletFormat.Type = ppBulletNumbered
    alert(bulletFormat.Number)
}
```
