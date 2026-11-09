# Document.ActiveWritingStyle

返回或设置指定文档中指定语言的写作风格。 **String** 类型，可读写。



## 语法

**注意：**为 **ActiveWritingStyle** 赋值，须将新值追加到参数中，如下分别为赋值与取值的 TypeScript 函数声明：
```typescript
ActiveWritingStyle( /** @pointer */ LanguageID: any, prop: string): void;
ActiveWritingStyle( /** @pointer */ LanguageID: any): string;
```

express.**ActiveWritingStyle(LanguageID)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| LanguageID | 必选 | any | 设置指定文档中的写作风格所用的语言。可以是一个字符串或 **WdLanguageID** 常量之一。由于您所选择或安装的语言支持不同（例如，美国英语），某些 **WdLanguageID** 常量可能无法使用。 |
| prop | 可选 | string | 待设置的写作风格。不传该参数则为取值情况。 |

## 返回值

string

## 说明


 **WritingStyleList** 属性返回一个可用写作风格名称的数组。



## 示例


```JavaScript
/*本示例设置活动文档中法语、德语和美国英语的写作风格。若要运行本示例，必须安装法语、德语和美国英语的语法文件。*/
function test() {
    ActiveDocument.ActiveWritingStyle(wdFrench, "Commercial")
    ActiveDocument.ActiveWritingStyle(wdGerman, "Technisch/Wiss")
    ActiveDocument.ActiveWritingStyle(wdEnglishUS, "Technical")
}
```


```JavaScript
/*本示例显示选定内容的语言的写作风格。*/
function test() {
    alert(ActiveDocument.ActiveWritingStyle(Selection.LanguageID))
}
```
