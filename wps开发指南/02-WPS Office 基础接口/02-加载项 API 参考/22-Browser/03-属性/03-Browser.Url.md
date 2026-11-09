# Browser.Url

当前页面的 URL。

## 语法

express.**Url**

express   一个代表 **Browser** 对象的变量。

## 类型

string，只读。

## 示例

```javascript
/* 获取当前页面地址 */
function test() {
  var url = Application.ThisBrowser.Url
  console.log("当前URL：" + url)
}
```
