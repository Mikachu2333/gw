# CaptionLabel.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **CaptionLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示所有内置题注标签的名称。*/
function test() {
    for (let i = 1; i <= Application.CaptionLabels.Count; i++) {
        let captionLabel = Application.CaptionLabels.Item(i)
        if (captionLabel.BuiltIn) {
            alert(captionLabel.Name)
        }
    }
}
```


```JavaScript
/*本示例将所选内容的文本替换为第三个题注标签的名称。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item(3)
    Selection.Range.Text = captionLabel.Name
}
```
