# DisplayFormat 对象

代表关联的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的显示设置。只读。

## 说明


更改区域的条件格式或表格样式等操作可导致当前用户界面中的显示内容与 **Range** 对象相应属性中的值不一致。使用 **DisplayFormat** 对象的属性可返回当前用户界面中显示的值。


## 示例


```JavaScript
/*本示例设置在当前用户界面中 G2 单元格边框的粗细为 xlThick ，并显示是否设置成功。*/
function test() {
    Range("G2").Style.Borders.Weight = xlThick
    alert(Range("G2").DisplayFormat.Style.Borders.Weight == xlThick)
}
```


```JavaScript
/*本示例显示在当前用户界面中 D3:D5 单元格文本的字体颜色是否为红色。*/
function test() {
    alert(Range("D3:D5").DisplayFormat.Font.Color == RGB(255, 0, 0))
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/Characters) | 返回一个 **[Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/obj)** 对象，该对象代表当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的文本字符区域。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AddIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/AddIndent) | 返回一个值，该值指示 ET 是否会在单元格中的文本对齐方式设置为等距分布（水平或垂直）时自动缩进当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的文本。只读。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/Borders) | 返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/obj)** 对象，该对象代表当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的边框。只读。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/Font) | 返回一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj)** 对象，该对象代表当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 的字体。只读。 |
| [FormulaHidden](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/FormulaHidden) | 返回一个值，该值指示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象在工作表受保护时是否会隐藏自己的公式。只读。 |
| [HorizontalAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/HorizontalAlignment) | 返回一个值，该值表示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象采用水平对齐方式。只读。 |
| [IndentLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/IndentLevel) | 返回一个值，该值表示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的缩进级别。只读。 |
| [Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/Interior) | 返回一个 **[Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/obj)** 对象，该对象代表当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的内部。只读。 |
| [Locked](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/Locked) | 返回一个值，该值指示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象是否已锁定。只读。 |
| [MergeCells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/MergeCells) | 返回一个值，该值指示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象是否包含合并单元格。只读。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/NumberFormat) | 返回一个值，该值表示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的格式代码。只读。 |
| [NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/NumberFormatLocal) | 返回一个值，该值表示当前用户界面中以用户语言将关联的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 显示为字符串时的格式代码。只读。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/Orientation) | 返回一个值，该值表示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的文本方向。只读。 |
| [ReadingOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/ReadingOrder) | 返回当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的读取顺序。只读。 |
| [ShrinkToFit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/ShrinkToFit) | 返回一个值，该值指示 ET 是否会自动缩小文本以适合当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的可用列宽。只读。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/Style) | 返回一个包含 **[Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/obj)** 对象的值，该值表示关联的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象在当前用户界面中显示时所采用的样式。 |
| [VerticalAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/VerticalAlignment) | 返回一个值，该值表示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象采用垂直对齐方式。只读。 |
| [WrapText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/member/WrapText) | 返回一个值，该值指示 ET 是否会使当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的文本自动换行。只读。 |