# View.GotoSlide

切换到指定的幻灯片。



## 语法

express.**GotoSlide(Index)**

express   一个代表 **View** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 要切换到的幻灯片的编号。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在第一个窗口中从当前幻灯片切换到第三张幻灯片。*/
function test() {
    let view = Windows.Item(1).View
    view.GotoSlide(3)
}
```


```JavaScript
/*本示例在活动窗口中从当前幻灯片切换到第三张幻灯片。*/
function test() {
    let view = ActiveWindow.View
    view.GotoSlide(3)
}
```
