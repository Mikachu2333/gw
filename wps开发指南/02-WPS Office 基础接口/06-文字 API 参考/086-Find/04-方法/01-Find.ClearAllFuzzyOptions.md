# Find.ClearAllFuzzyOptions

清除所有与日语文本相关联的非特定搜索选项。



## 语法

express.**ClearAllFuzzyOptions()**

express   一个代表 **Find** 对象的变量。

## 返回值

void

## 说明


该方法将下列属性设置为 **False** ：

| **MatchFuzzyAY**            | **MatchFuzzyKanji**              |
| --------------------------- | -------------------------------- |
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
/*此示例在执行所选范围内的搜索之前清除所有非特定搜索选项，如果单词 “バイオリン” 的格式为粗体，则整个段落将被选中并复制到剪贴板。*/
function test() {
    let find = Selection.Find
    find.ClearFormatting()
    find.ClearAllFuzzyOptions()
    find.Font.Bold = true
    find.Execute("バイオリン", null, null, null, null, null, true, null, true)
    if (find.Found) {
        find.Parent.Expand(wdParagraph)
        find.Parent.Copy()
    }
}
```


```JavaScript
/*本示例清除活动文档上主文档文章中所有与日语文本相关联的非特定搜索选项。*/
function test() {
    ActiveDocument.Content.Find.ClearAllFuzzyOptions()
}
```
