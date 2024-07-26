import{_ as c,r,o as l,c as p,a as t,d as a,w as o,b as n,e as d}from"./app-61339773.js";const i={},u=d('<h1 id="登录操作" tabindex="-1"><a class="header-anchor" href="#登录操作" aria-hidden="true">#</a> 登录操作</h1><p>人机验证方式登录包含<strong>账号密码登录</strong>与手<strong>机短信验证码登录</strong></p><p><strong>注：扫码登录</strong>不需要进行<strong>人机验证</strong>，故<strong>不使用</strong>以下接口</p><h2 id="扫码登录" tabindex="-1"><a class="header-anchor" href="#扫码登录" aria-hidden="true">#</a> 扫码登录</h2>',4),h=d(`<h2 id="验证登录" tabindex="-1"><a class="header-anchor" href="#验证登录" aria-hidden="true">#</a> 验证登录</h2><p>人机验证流程：</p><ol><li>请求验证码参数，得到登录密钥<code>key</code>与极验id<code>gt</code>和极验KEY<code>challenge</code></li><li>进行滑动or点击验证</li><li>返回验证结果<code>validate</code>与<code>seccode</code>，进行短信或密码登录</li></ol><h3 id="申请captcha验证码" tabindex="-1"><a class="header-anchor" href="#申请captcha验证码" aria-hidden="true">#</a> 申请captcha验证码</h3><blockquote><p>https://passport.bilibili.com/x/passport-login/captcha?source=main_web</p></blockquote><p><em>请求方式：GET</em></p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>返回信息</td><td></td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>geetest</td><td>obj</td><td>极验captcha数据</td><td></td></tr><tr><td>tencent</td><td>obj</td><td>(?)</td><td><strong>作用尚不明确</strong></td></tr><tr><td>token</td><td>str</td><td>登录 API token</td><td>与 captcha 无关，与登录接口有关</td></tr><tr><td>type</td><td>str</td><td>验证方式</td><td>用于判断使用哪一种验证方式，目前所见只有极验<br>geetest：极验</td></tr></tbody></table><p><code>geetest</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>gt</td><td>str</td><td>极验id</td><td>一般为固定值</td></tr><tr><td>challenge</td><td>str</td><td>极验KEY</td><td>由B站后端产生用于人机验证</td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://passport.bilibili.com/x/passport-login/captcha?source=main_web&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geetest&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;00fbe75cc2864ba0af969231f193a974&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;geetest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;challenge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a57d9be17505d4a15ed84694c48fbf74&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;gt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ac597a4506fee079629df5d8b66dd4fe&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tencent&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;appid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="进行验证" tabindex="-1"><a class="header-anchor" href="#进行验证" aria-hidden="true">#</a> 进行验证</h3>`,17),b={href:"https://docs.geetest.com/sensebot/start/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://kuresaru.github.io/geetest-validator/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/kuresaru/geetest-validator",target:"_blank",rel:"noopener noreferrer"},m=d('<ol><li>打开手动验证器，在1、2分别填入上面API返回的<code>gt</code>和<code>challenge</code></li><li>点击按钮3，稍等加载验证码，点击按钮4进行验证</li><li>验证完成后，点击按钮5生成验证结果</li><li>使用最开始获得到的<code>key</code>、<code>challenge</code>和刚获得到的<code>validate</code>、<code>seccode</code>继续之后的登录操作</li></ol><h3 id="继续登录" tabindex="-1"><a class="header-anchor" href="#继续登录" aria-hidden="true">#</a> 继续登录</h3>',2);function v(_,q){const e=r("RouterLink"),s=r("ExternalLinkIcon");return l(),p("div",null,[u,t("ul",null,[t("li",null,[a(e,{to:"/docs/login/login_action/QR.html"},{default:o(()=>[n("扫码登录")]),_:1})])]),h,t("p",null,[n("本文档为 Bilibili 文档，验证码为 "),t("a",b,[n("geetest 极验"),a(s)]),n(" 提供，故不提供相关 API")]),t("p",null,[n("附: "),t("a",k,[n("手动验证器"),a(s)]),t("a",g,[n("及其源码"),a(s)])]),m,t("ul",null,[t("li",null,[a(e,{to:"/docs/login/login_action/SMS.html"},{default:o(()=>[n("短信登录")]),_:1})]),t("li",null,[a(e,{to:"/docs/login/login_action/password.html"},{default:o(()=>[n("密码登录")]),_:1})])])])}const y=c(i,[["render",v],["__file","index.html.vue"]]);export{y as default};
