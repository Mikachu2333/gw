# OptionButton.GroupName

您可以通过设置组名，创建一组互斥的OptionButton。

## 语法

express.GroupName

express   一个代表 OptionButton 对象的变量。

## 说明

您可以通过设置组名，创建一组互斥的OptionButton。同一组里的OptionButton将采用相同的设置，点击组内的任何一个选项都会将其他选项置为false。不同容器下相同的组名会被视为不同组（每个容器一个组）。


## 示例

```javascript
/*将OptionButton1的组名设置为group one*/
function func1()
{
    UserForm1.OptionButton1.GroupName = "group one"
}
```
