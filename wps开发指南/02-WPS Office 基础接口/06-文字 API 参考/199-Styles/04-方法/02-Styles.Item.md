# Styles.Item

返回集合中的单个 **Style** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Styles** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

Style

## 示例


```JavaScript
/*本示例将活动文档上新建段落的文本替换为所有样式的名称。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Styles.Count; i++) {
        let style = ActiveDocument.Styles.Item(i)
        ActiveDocument.Paragraphs.Add().Range.Text = style.NameLocal
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个样式所使用的语言是否为wdEnglishUS。*/
function test() {
    alert(Documents.Item(1).Styles.Item(1).LanguageID == wdEnglishUS)
}
```
