import{_ as a,o as l,c as o,V as e}from"./chunks/framework.c2f65d89.js";const b=JSON.parse(`{"title":"プログラミング環境構築 Windows","description":"","frontmatter":{"title":"プログラミング環境構築 Windows","prev":{"link":"/text/chapter-0/","text":"0. はじめに"},"next":{"link":"/text/chapter-0/guidance","text":"講習会ガイダンス'"}},"headers":[],"relativePath":"text/chapter-0/enviroment/windows.md","filePath":"text/chapter-0/enviroment/windows.md"}`),t={name:"text/chapter-0/enviroment/windows.md"},s=e(`<h1 id="環境構築-windows" tabindex="-1">環境構築 Windows <a class="header-anchor" href="#環境構築-windows" aria-label="Permalink to &quot;環境構築 Windows&quot;">​</a></h1><h2 id="step-1-install-wsl" tabindex="-1">Step 1: Install WSL <a class="header-anchor" href="#step-1-install-wsl" aria-label="Permalink to &quot;Step 1: Install WSL&quot;">​</a></h2><ol><li><p><a href="https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=ja-jp&amp;gl=jp&amp;icid=CNavAppsWindowsApps" target="_blank" rel="noreferrer">https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=ja-jp&amp;gl=jp&amp;icid=CNavAppsWindowsApps</a> で Windows Terminal をインストール（既にインストールされていれば飛ばしてOKです）</p></li><li><p>アプリ検索の画面で、 <code>Terminal</code> と入力し 「管理者として実行」 <img src="https://md.trap.jp/uploads/upload_367dc95b2cd3e74c808320a907977237.png" alt=""></p></li><li><p><code>wsl --install -d Ubuntu</code> と入力して、エンターキーを押す。 <img src="https://md.trap.jp/uploads/upload_7266a7465d2df1dbc341237b2e4983b3.png" alt=""></p></li></ol><div class="warning custom-block"><p class="custom-block-title">TA向け</p><p>WSL インストールトラブルシューティング <a href="https://learn.microsoft.com/ja-jp/windows/wsl/troubleshooting" target="_blank" rel="noreferrer">https://learn.microsoft.com/ja-jp/windows/wsl/troubleshooting</a></p><p><code>wsl --install</code> に失敗した際の手動インストールマニュアル （Windowsバージョンの要件なども書いてあります） <a href="https://learn.microsoft.com/ja-jp/windows/wsl/install-manual" target="_blank" rel="noreferrer">https://learn.microsoft.com/ja-jp/windows/wsl/install-manual</a></p></div><div class="warning custom-block"><p class="custom-block-title">TA向け</p><p>極稀に、BIOS で virtualization 設定が切られている為に WSL がインストールできない事があります（<code>Please enable the Virtual Machine Platform Windows feature and ensure virtualization is enabled in the BIOS.</code> と表示されます） この場合は BIOS に入って、 Advanced -&gt; Virtualization の順で有効化してください。</p></div><ol start="3"><li>Ubuntu のアカウント設定</li><li><code>Enter new UNIX username:</code> が表示されるので、<strong>半角英数小文字</strong> でユーザーネームを入れる。（ <code>take</code> とか <code>taekmura</code> とか <code>ryugo</code> とか短い方が良い。フォルダの名前になります）</li><li><code>New Password:</code> WSL 内で使いたいパスワードを入力。何も表示されませんが入力されています。入力できたら エンターキーを押す。</li><li><code>Retype New password:</code> もう一度入力。</li></ol><p><img src="https://md.trap.jp/uploads/upload_0fb105e906b7670d57ba0d0810418a95.png" alt=""></p><ol start="4"><li><p>ウィンドウを閉じる</p></li><li><p>スタートから Windows Terminal を起動</p></li><li><p><code>Ctrl</code> + <code>,</code> で設定画面を開く</p></li><li><p>「規定のプロファイル」を「Ubuntu」に変更（複数あるならどれでも良い） <img src="https://md.trap.jp/uploads/upload_0ce2e7b6aa4468178d034ffc65934316.png" alt=""></p></li><li><p>「保存」ボタンを押す</p></li><li><p>Windows Terminal を閉じて、もう一度開く</p></li><li><p>traQ の tasks チャンネルで :wsl: を押す</p></li></ol><h2 id="step-2-install-clang" tabindex="-1">Step 2: Install Clang <a class="header-anchor" href="#step-2-install-clang" aria-label="Permalink to &quot;Step 2: Install Clang&quot;">​</a></h2><ol><li><p>WSL上で <code>sudo apt update</code></p></li><li><p>パスワードを求められるので、WSLで設定したパスワードを入力</p></li><li><p>WSL上で <code>sudo apt install clang zip curl -y</code> を実行する</p></li><li><p><code>clang --version</code> で clang のバージョンが表示されれば成功</p></li><li><ol start="11"><li>traQ の tasks チャンネルで :cpp: を押す</li></ol></li></ol><h2 id="step-3-vscode-install-init" tabindex="-1">Step 3: VSCode Install &amp; Init <a class="header-anchor" href="#step-3-vscode-install-init" aria-label="Permalink to &quot;Step 3: VSCode Install &amp; Init&quot;">​</a></h2><ol><li><p><a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">https://code.visualstudio.com/download</a> から VSCode をインストール</p></li><li><p>起動後、 <code>Ctrl</code> + <code>Shift</code> + <code>X</code> を押す</p></li><li><p><code>Japanese</code> と入力し、 <code>Japanese Language Pack for Visual Studio Code</code> をインストール。 <img src="https://md.trap.jp/uploads/upload_b54bb733b3bf68010e033d30f2bf57c2.png" alt=""></p></li><li><p>VSCode の右下「Change Language and Restart」を押してインストール。</p></li><li><p>もう一度、 <code>Ctrl</code> + <code>Shift</code> + <code>X</code> を押す</p></li><li><p><code>WSL</code> を入力し、 <code>WSL</code> をインストール <img src="https://md.trap.jp/uploads/upload_80d3b7bc083b103d30d372ba8dabbe5b.png" alt=""></p></li><li><p><code>Ctrl+,</code> を押して、出てきた画面に「Auto Save」と入力</p></li><li><p>「Files: Auto Save」の項目を探して、「afterDelay」に変更する <img src="https://md.trap.jp/uploads/upload_8a51ad57ec7b6d396cb610c9bbb17040.png" alt=""></p></li><li><p>ターミナルで <code>code hello.txt</code> を入力し、VSCode が起動できたら成功！ <img src="https://md.trap.jp/uploads/upload_b00fe65803252e719a394f50527731d9.png" alt=""></p></li><li><p>traQ の tasks チャンネルで :vscode: を押す</p></li></ol><h2 id="step-4-拡張機能の設定" tabindex="-1">Step 4： 拡張機能の設定 <a class="header-anchor" href="#step-4-拡張機能の設定" aria-label="Permalink to &quot;Step 4： 拡張機能の設定&quot;">​</a></h2><ol><li><p>VSCodeの 画面で <code>Ctrl</code> + <code>Shift</code> + <code>X</code></p></li><li><p>「C++」と入力し、「C/C++ Extenstion」の拡張機能を追加</p></li><li><p><code>Code Runner</code> と入力して、「Code Runner」拡張機能を追加</p></li><li><p><code>Ctrl</code> + <code>,</code> で設定を開く。下記画像の赤丸で囲んだ部分を押して <code>settings.json</code> を開く。 <img src="https://md.trap.jp/uploads/upload_bbdd65cb92c5c57bb38f797676aaea8f.png" alt=""></p></li><li><p>もし<code>&quot;cpp&quot;: </code>で始まる行がなければ、一番最後の行の1つ前の行（ <code>}</code> の前！）に次のコードを追加する。その前の行に <code>,</code> がなかったら追加する。</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;code-runner.executorMap&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;cpp&quot;: &quot;cd $dir &amp;&amp; clang++ -std=c++17 $fileName -o $fileNameWithoutExt &amp;&amp; $dir$fileNameWithoutExt&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span></code></pre></div><p><img src="https://md.trap.jp/uploads/upload_6123c7ce669910790a06b98cc664b827.png" alt=""></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>もしすでに<code>&quot;cpp&quot;: </code> で始まる行があった場合、以下のように<code>g++</code> を <code>clang++</code> に置き換える。</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> &quot;cpp&quot;: &quot;cd $dir &amp;&amp; g++ $fileName -o $fileNameWithoutExt &amp;&amp; $dir$fileNameWithoutExt&quot;,</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> &quot;cpp&quot;: &quot;cd $dir &amp;&amp; clang++ -std=c++17 $fileName -o $fileNameWithoutExt &amp;&amp; $dir$fileNameWithoutExt&quot;,</span></span></code></pre></div></div><ol start="6"><li><p><code>&quot;code-runner.executorMap&quot;: {</code> の行の前に <code>&quot;code-runner.runInTerminal&quot;: true,</code> を書く（コピペ推奨！！）</p></li><li><p>こんな感じになっていれば OK <img src="https://md.trap.jp/uploads/upload_1444ef8d082128cc2723db31555f3960.png" alt=""></p></li><li><p>WSL を開き、 <code>code main.cpp</code> と入力する</p></li><li><p>次のように書く（コピペでも OK ）</p></li></ol><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="10"><li>画像の赤丸で実行してみる。下側の画面に <code>Hello, World!</code> が出れば成功！ <img src="https://md.trap.jp/uploads/upload_750a50362d2ae00ffcf2f4b041446ed9.png" alt=""></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>なにか出てきた場合は、代わりに三角の隣の<code>v</code> を押して、「Run Code」を押す！</p><p><img src="https://md.trap.jp/uploads/upload_2b042cfaa37207457e419a5380ccd466.png" alt=""></p></div><ol start="11"><li><p>traQ の tasks チャンネルで :done: を押す</p></li><li><p>環境構築はこれで完了です！お疲れ様でした。 :blob_pyon:</p></li></ol>`,22),p=[s];function n(c,i,d,r,u,m){return l(),o("div",null,p)}const g=a(t,[["render",n]]);export{b as __pageData,g as default};
