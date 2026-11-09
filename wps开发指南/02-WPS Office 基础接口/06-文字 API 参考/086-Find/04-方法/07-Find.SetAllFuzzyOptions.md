# Find.SetAllFuzzyOptions

激活所有与日语文本相关的非特定搜索选项。



## 语法

express.**SetAllFuzzyOptions()**

express   一个代表 **Find** 对象的变量。

## 返回值

void

## 说明


该方法将下列属性设置为 **True** ：

| 属性名 | 属性名 |
| --------------------------- | -------------------------------- |
| **MatchFuzzyAY**            | **MatchFuzzyKanji**              |
| **MatchFuzzyBV**            | **MatchFuzzyKiKu**               |
| **MatchFuzzyByte**          | **MatchFuzzyOldKana**            |
| **MatchFuzzyCase**          | **MatchFuzzyProlongedSoundMark** |
| **MatchFuzzyDash**          | **MatchFuzzyPunctuation**        |
| **MatchFuzzyDZ**            | **MatchFuzzySmallKana**          |
| **MatchFuzzyHF**            | **MatchFuzzySpace**              |
| **MatchFuzzyHiragana**      | **MatchFuzzyTC**                 |
| **MatchFuzzyIterationMark** | **MatchFuzzyZJ**                 |



## 示例


```JavaScript
/*此示例在执行所选范围内的搜索之前激活所有与日语文本相关的非特定选项，如果单词“バイオリン”的格式为粗体，则选择整个段落并将其复制到剪贴板。*/
function test() {
    let find = Selection.Find
    find.ClearFormatting()
    find.SetAllFuzzyOptions()
    find.Font.Bold = msoTrue
    find.Execute("バイオリン", null, null, null, null, null, true, null, true)
    if (find.Found) {
        find.Parent.Expand(wdParagraph)
        find.Parent.Copy()
    }
}
```


```JavaScript
/*此示例在当前的主文档文章内执行搜索之前激活所有与日语文本相关的非特定选项，并将所有单词“バイ”替换为“example”。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.SetAllFuzzyOptions()
    find.Execute("バイ", null, null, null, null, null, true, null, true, "example", wdReplaceAll)
}
```
