# SlideShowView.GotoClick

播放幻灯片上与指定的鼠标单击关联的动画以及随后的任何动画。



## 语法

express.**GotoClick(Index)**

express   一个代表 **SlideShowView** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 启动动画的鼠标单击的索引号。 |

## 返回值

void

## 说明


使用 **[GetClickIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/GetClickIndex)** 方法可返回启动当前正在幻灯片上播放或刚刚已经播放完的动画的当前鼠标单击的索引号。

指定 _Index_ 的值为 0 将播放起始于任意自动播放的动画之前的位置的动画。指定 _Index_ 的值为 **msoClickStateBeforeAutomaticAnimations** 将移动到任意自动播放的动画之前的位置，然后暂停。指定 _Index_ 的值为 **msoClickStateAfterAllAnimations** 将移动到所有动画之后的位置。



## 示例


```JavaScript
/*本示例在活动演示文稿的放映视图中从当前幻灯片的自动运行的动画之前开始播放动画。*/
function test() {
    ActivePresentation.SlideShowWindow.View.GotoClick(0)
}
```


```JavaScript
/*本示例放映第一篇演示文稿，并从幻灯片上第二个动画开始播放。*/
function test() {
    Presentations.Item(1).SlideShowSettings.Run().View.GotoClick(2)
}
```
