# Beep

播放一声蜂鸣提示音。

## 语法

```typescript
function Beep(): void
```

## 说明

通过系统扬声器播放一声固定频率（523 Hz，C5 音阶）、持续 700 毫秒的蜂鸣音。
调用后脚本会阻塞直到蜂鸣播放完毕（约 700ms）。仅在 Windows 上有效，其他平台调用无效果。

## 示例

```javascript
/* 操作完成后提示 */
function test() {
  // 执行长时间操作...
  Beep()
  Debug.Print("处理完成")
}
```
