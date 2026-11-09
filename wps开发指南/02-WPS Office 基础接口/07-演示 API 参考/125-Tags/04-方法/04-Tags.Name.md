# Tags.Name

以 **String** 类型返回指定标记的名称。



## 语法

express.**Name(Index)**

express   一个代表 **Tags** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 标记号。 |

## 返回值

String

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中所有标记的名称和值。*/
function test() {
    let tags = ActivePresentation.Slides.Item(1).Tags
    for (let i = 1; i <= tags.Count; i++) {
        alert(`Tag #${i}: Name = ${tags.Name(i)}`)
        alert(`Tag #${i}: Value = ${tags.Value(i)}`)
    }
}
```


```JavaScript
/*此示例在活动演示文稿中搜索每张幻灯片的标记。如果存在名为“PRIORITY”的标记，则会显示标记值。如果没有名为“PRIORITY”的标记，该示例将添加此标记，为其提供值“Unknown”。*/
function test() {
    let found = false
    let slideIndex = null
    for (let j = 1; j <= ActivePresentation.Slides.Count; j++) {
        let tags = ActivePresentation.Slides.Item(j).Tags
        for (let i = 1; i <= tags.Count; i++) {
            if (tags.Name(i) == "PRIORITY") {
                found = true
                slideIndex = tags.Parent.Slides.Item(j).SlideIndex
                alert(`Slide ${slideIndex} priority: ${tags.Value(i)}`)
            }
        }
        if (!found) {
            slideIndex = tags.Parent.Slides.Item(j).SlideIndex
            tags.Add("Name", "New Figures")
            tags.Add("Priority", "Unknown")
            alert(`Slide ${slideIndex} priority tag added: Unknown`)
        }
    }
}
```
