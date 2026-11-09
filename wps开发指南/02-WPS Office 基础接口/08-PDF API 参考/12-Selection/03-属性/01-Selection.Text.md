# Selection.Text

获取选中的文本内容。支持属性访问和方法调用。 **String** 类型，只读（属性）或方法调用。

## 语法

express.**Text**

express   一个代表 **Selection** 对象的变量。

## 类型

string

## 参数说明

**方法签名**：`Text([autoNewline], [maxCount], [countByWords])`

| 参数 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| AutoNewline | boolean | true | 是否在多选区间自动插入换行符 |
| MaxCount | number | 5000 | 最大返回长度（0 表示不限制） |
| CountByWords | boolean | false | true=按词数限制，false=按字符数 |

## 返回值

**string** — 当前选区的文本内容。

## 示例

```JavaScript
var sel = app.ActiveDocument.Selection;
var text = sel.Text;         // 默认参数
var text2 = sel.Text(true, 100); // 最多 100 字符
```
