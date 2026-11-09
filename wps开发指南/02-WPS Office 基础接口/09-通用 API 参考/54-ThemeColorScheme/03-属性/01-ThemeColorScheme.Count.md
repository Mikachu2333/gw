# ThemeColorScheme.Count

获取一个 **Integer** 类型的值，指示 **ThemeColorScheme** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **ThemeColorScheme** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片中配色方案的数量。*/
function test() {
    let themeColorScheme = ActivePresentation.Slides.Item(1).ThemeColorScheme
    alert(themeColorScheme.Count)
}
```
