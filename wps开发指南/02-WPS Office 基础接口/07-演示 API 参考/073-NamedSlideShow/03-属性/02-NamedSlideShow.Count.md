# NamedSlideShow.Count

返回指定集合中的对象数目。只读。



## 语法

express.**Count**

express   一个代表 **NamedSlideShow** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿第一个自定义幻灯片放映中幻灯片的数量。*/
function test() {
    let namedSlideShows = ActivePresentation.SlideShowSettings.NamedSlideShows
    alert(namedSlideShows.Item(1).Count)
}
```
