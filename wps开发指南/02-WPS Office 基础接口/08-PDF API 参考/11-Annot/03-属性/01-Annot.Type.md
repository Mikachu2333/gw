# Annot.Type

获取注释类型。 **Long** 类型，只读。

## 语法

express.**Type**

express   一个代表 **Annot** 对象的变量。

## 类型

long

## 说明

**值说明**：

| 值 | 类型名 | 值 | 类型名 |
|---|--------|---|--------|
| 0 | none | 1 | freeText |
| 2 | callout | 3 | typeWriter |
| 4 | highlight | 5 | underline |
| 6 | squiggly | 7 | strikeOut |
| 8 | insert | 9 | replace |
| 10 | text | 11 | areaHighlight |
| 12 | shape | 13 | line |
| 14 | popup | 15 | link |
| 16 | square | 17 | circle |
| 18 | polygon | 19 | polyLine |
| 20 | arrow | 21 | cloudy |
| 22 | stamp | 23 | ink |
| 24 | fileAttachment | 25 | sound |
| 26 | movie | 27 | richMedia |
| 28 | screen | 29 | widget |
| 30 | printerMark | 31 | trapNet |
| 32 | watermark | 33 | 3D |
| 34 | signatureWidget | 35 | multimedia |
| 36 | image | 37 | wpsInk |
| 38 | scrawl | 39 | caSign |
| 40 | textHighlight | 41 | measureDistance |
| 42 | measurePerimeter | 43 | measureArea |
| 44 | checkBox | 45 | inkPartEraser |
| 46 | inkWholeEraser | 47 | instruct |
| 48 | path | 49 | widgetCheckBox |
| 50 | widgetRadioButton | 51 | widgetPushButton |
| 52 | widgetListBox | 53 | widgetComboBox |
| 54 | widgetTextField | 55 | fillShape |

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.Item(1);
console.log("注释类型: " + annot.Type);
```
