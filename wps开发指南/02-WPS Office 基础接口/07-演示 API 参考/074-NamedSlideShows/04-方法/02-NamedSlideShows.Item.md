# NamedSlideShows.Item

从指定的 **NamedSlideShows** 集合中返回单个 **NamedSlideShow** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **NamedSlideShows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 集合中要返回的单个 NamedSlideShow对象的名称或索引号。 |

## 返回值

NamedSlideShow

## 示例


```JavaScript
/*本示例删除第一篇演示文稿中名为“test”的自定义幻灯片放映。*/
function test() {
    let namedSlideShows = Presentations.Item(1).SlideShowSettings.NamedSlideShows
    namedSlideShows.Item("test").Delete()
}
```


```JavaScript
/*本示例显示活动演示文稿所有自定义幻灯片放映的名称。*/
function test() {
    let str = ""
    let namedSlideShows = ActivePresentation.SlideShowSettings.NamedSlideShows
    for (let i = 1; i <= namedSlideShows.Count; i++) {
        str += namedSlideShows.Item(i).Name + "\n"
    }
    alert(str)
}
```
