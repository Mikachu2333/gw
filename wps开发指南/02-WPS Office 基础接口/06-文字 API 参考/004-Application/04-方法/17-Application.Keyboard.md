# Application.Keyboard

返回或设置键盘的语言和布局设置。



## 语法

express.**Keyboard(LangId)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| LangId | 可选 | number（int4 精度） | WPS 要针对其设置键盘的语言和布局组合。如果省略该参数，则该方法返回当前的语言和布局设置。 |

## 返回值

number（int4 精度）

## 说明


Windows 用一种名为“输入语言句柄”的变量类型来跟踪键盘的语言和布局设置，常把这种变量称为“HKL”。句柄的低端字是语言 ID，句柄的高端字是键盘布局。



## 示例


```JavaScript
/*本示例显示当前的键盘语言和布局设置。*/
function test() {
    let keyboard = Application.Keyboard()
    alert(keyboard)
}
```


```JavaScript
/*本示例设置当前的键盘语言和布局，然后显示用户界面所选语言是否为简体中文。*/
function test() {
    Application.Keyboard(134481924)
    alert(Application.Language == msoLanguageIDSimplifiedChinese)
}
```
