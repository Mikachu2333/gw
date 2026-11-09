# Range.Words

返回一个 **Words** 集合，该集合代表范围中的所有单词。只读。



## 语法

express.**Words**

express   一个代表 **Range** 对象的变量。

## 类型

Words

## 说明


文档中的标点符号和段落标记包括在 **Words** 集合中。



## 示例


```JavaScript
/*本示例显示所选区域的字数。段落标记、部分单词和标点符号都统计在内。*/
function test() {
    alert(`There are ${Selection.Range.Words.Count} words.`)
}
```


```JavaScript
/*本示例遍历 range（范围为从活动文档的开始到所选内容的末尾）中的单词，并删除该范围中出现的单词“Franklin”（包含尾部空格）。*/
function test() {
    let range = ActiveDocument.Range(0, Selection.End)
    for (let i = range.Words.Count; i >= 1; i--) {
        if (range.Words.Item(i).Text == "Franklin ") {
            range.Words.Item(i).Delete()
        }
    }
}
```
