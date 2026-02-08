# 米白夢幻消消樂（Match-3）

## 你要做的事
1) 把你喜歡的 5 張圖片放進 `assets/tiles/`，命名為 `1.png~5.png`
2) 把通關圖片放進 `assets/`，命名為 `win.png`

## 本機開啟（不要直接點 index.html）
因為使用 ES Module(import)，要用本機伺服器：

### VS Code
安裝 Live Server，右鍵 index.html → Open with Live Server

### Python
在此資料夾開終端機：
python -m http.server 5500
然後開： http://localhost:5500

## 部署（GitHub Pages）
把整個資料夾推到 GitHub repo，Settings → Pages → Deploy from branch → main / root
