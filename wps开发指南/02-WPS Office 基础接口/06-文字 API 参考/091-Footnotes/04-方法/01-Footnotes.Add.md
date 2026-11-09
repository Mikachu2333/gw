# Footnotes.Add

返回一个 **Footnote** 对象，该对象代表添加到区域中的脚注。



## 语法

express.**Add(Range, Reference, Text)**

express   一个代表 **Footnotes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 标记用于尾注或脚注的区域。可以是折叠区域。 |
| Reference | 可选 | any | 自定义引用标记的文字。如果省略该参数，WPS 将插入自动编号的引用标记。 |
| Text | 可选 | any | 尾注或脚注文本。 |

## 返回值

Footnote

## 说明


要为 *Reference* 参数指定一个符号，可用 `{FontName CharNum}` 语法。FontName 是包含该符号的字体名称。修饰字体的名称显示在 **“插入”** 菜单 **“符号”** 对话框的 **“字体”** 框中。CharNum 是要插入符号的相应位置序数与 31 之和，在符号表中从左向右计数。例如，如果指定的符号是“Symbol”字体的 omega (ω)，它在符号表格中的位置为 56，该参数就应为“{Symbol 87}”。



## 示例


```JavaScript
/*本示例在选定内容的末尾添加一条自动编号的脚注。*/
function test() {
    Application.ActiveDocument.Footnotes.Add(Selection.Range, null, "The Willow Tree, (Lone Creek Press, 1996).")
}
```


```JavaScript
/*本示例为引用标记添加一条使用自定义符号的脚注。*/
function test() {
    Application.ActiveDocument.Footnotes.Add(Selection.Range, "{Symbol 87}", "More information in the full report.")
}
```
