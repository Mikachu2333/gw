# TaskPane.Navigate

此方法用于在当前的 **Taskpane** 上重新载入url对应的网页。

## 语法

express.Navigate(url)

express   一个代表 TaskPane 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| url | 必选 | String | 这个url可以是一个在线的网址，也可以是一个本地的html资源. |

## 示例

```javascript
let tp = Application.CreateTaskpane("https://www.kingsoft.com") if (tp){ tp.Visible = true tp.Navigate("https://www.wps.cn") }
```
