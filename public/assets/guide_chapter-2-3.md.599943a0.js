import{_ as e,o as a,c as t,V as o}from"./chunks/framework.c2f65d89.js";const m=JSON.parse('{"title":"講師・TA ガイド - Chapter 2 & 3","description":"","frontmatter":{},"headers":[],"relativePath":"guide/chapter-2-3.md","filePath":"guide/chapter-2-3.md"}'),i={name:"guide/chapter-2-3.md"},l=o('<h1 id="講師・ta-ガイド-chapter-2-3" tabindex="-1">講師・TA ガイド - Chapter 2 &amp; 3 <a class="header-anchor" href="#講師・ta-ガイド-chapter-2-3" aria-label="Permalink to &quot;講師・TA ガイド - Chapter 2 &amp; 3&quot;">​</a></h1><h2 id="目的" tabindex="-1">目的 <a class="header-anchor" href="#目的" aria-label="Permalink to &quot;目的&quot;">​</a></h2><h3 id="section-2" tabindex="-1">Section 2 <a class="header-anchor" href="#section-2" aria-label="Permalink to &quot;Section 2&quot;">​</a></h3><ul><li>最小限のアプリケーションを動かしてみる</li><li>入出力 / 四則演算を扱う</li></ul><h3 id="section-3" tabindex="-1">Section 3 <a class="header-anchor" href="#section-3" aria-label="Permalink to &quot;Section 3&quot;">​</a></h3><ul><li>if 文を扱う</li><li>型をちょっと触れる</li></ul><h2 id="詰まりそうなポイント" tabindex="-1">詰まりそうなポイント <a class="header-anchor" href="#詰まりそうなポイント" aria-label="Permalink to &quot;詰まりそうなポイント&quot;">​</a></h2><p>前回から日にちが少し空いてること、上手く行ってなくても前回の段階ではどうにかなってしまった、などの理由で環境構築がまだうまく行っておらずに詰まってしまうという例が散見されます。環境構築レベルの問題だったら、 Chapter 0, 1 を参照して解決してください。</p><h2 id="聞かれたこと・起きたことピックアップ" tabindex="-1">聞かれたこと・起きたことピックアップ <a class="header-anchor" href="#聞かれたこと・起きたことピックアップ" aria-label="Permalink to &quot;聞かれたこと・起きたことピックアップ&quot;">​</a></h2><ul><li><code>if(15&lt;=x&lt;18)</code> と書いた（ C++ では許されない記法です） <ul><li>Warning で <code>Condition is always true</code> が出て困っていたようです <ul><li>先に <code>15&lt;=x</code> が処理され、 <code>1</code> or <code>0</code> となり恒真となります。</li></ul></li></ul></li><li>計算途中も int 型で管理されるので、 <code>cout &lt;&lt; 1/2*4 &lt;&lt; endl</code> などと書くと <code>0</code> が出力されます。テキストでも注意を入れていますが、TAの皆さんも注意してください。</li></ul>',10),r=[l];function c(d,n,h,s,u,_){return a(),t("div",null,r)}const f=e(i,[["render",c]]);export{m as __pageData,f as default};
