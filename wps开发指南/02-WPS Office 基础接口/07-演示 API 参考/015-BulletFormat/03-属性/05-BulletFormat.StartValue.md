# BulletFormat.StartValue

当 **BulletFormat** 对象的 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/Type)** 属性设为 **ppBulletNumbered** 时，返回或设置项目符号列表的起始值。可读/写。



## 语法

express.**StartValue**

express   一个代表 **BulletFormat** 对象的变量。

## 类型

number（int 精度）

## 说明


 **StartValue** 属性的值必须在 1 到 32767 范围内。



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片中第二个形状指定的文本框中的项目符号起始值设置为 5。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let BulletFormat = shape.TextFrame.TextRange.ParagraphFormat.Bullet
    BulletFormat.Type = ppBulletNumbered
    BulletFormat.StartValue = 5
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片中第一个形状的项目符号起始值。*/
function test() {
    let textFrame = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).TextFrame
    let BulletFormat = textFrame.TextRange.ParagraphFormat.Bullet
    BulletFormat.Type = ppBulletNumbered
    alert(BulletFormat.StartValue)
}
```
